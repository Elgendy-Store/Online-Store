import React, { useRef, useState, useEffect, useCallback } from 'react';

interface UseAutoplayCarouselOptions {
  enabled?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnTouch?: boolean;
  resetOnManualNav?: boolean;
}

export function useAutoplayCarousel({
  enabled = true,
  interval = 2000,
  pauseOnHover = true,
  pauseOnFocus = true,
  pauseOnTouch = true,
  resetOnManualNav = true,
}: UseAutoplayCarouselOptions) {
  const [paused, setPaused] = useState(false);
  const [manualNav, setManualNav] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Call this when user interacts manually (arrows/swipe/keys)
  const notifyManualNav = useCallback(() => {
    if (resetOnManualNav) {
      setManualNav(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [resetOnManualNav]);

  // Call this to schedule resume after pause
  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setPaused(false);
      setManualNav(false);
    }, 700); // Resume after 700ms
  }, []);

  // Attach event listeners to pause/resume
  const bindPauseHandlers = useCallback((carouselEl: HTMLElement | null) => {
    if (!carouselEl) return;
    const onMouseEnter = () => pauseOnHover && setPaused(true);
    const onMouseLeave = () => pauseOnHover && scheduleResume();
    const onFocusIn = () => pauseOnFocus && setPaused(true);
    const onFocusOut = () => pauseOnFocus && scheduleResume();
    const onTouchStart = () => pauseOnTouch && setPaused(true);
    const onTouchEnd = () => pauseOnTouch && scheduleResume();
    carouselEl.addEventListener('mouseenter', onMouseEnter);
    carouselEl.addEventListener('mouseleave', onMouseLeave);
    carouselEl.addEventListener('focusin', onFocusIn);
    carouselEl.addEventListener('focusout', onFocusOut);
    carouselEl.addEventListener('touchstart', onTouchStart, { passive: true });
    carouselEl.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      carouselEl.removeEventListener('mouseenter', onMouseEnter);
      carouselEl.removeEventListener('mouseleave', onMouseLeave);
      carouselEl.removeEventListener('focusin', onFocusIn);
      carouselEl.removeEventListener('focusout', onFocusOut);
      carouselEl.removeEventListener('touchstart', onTouchStart);
      carouselEl.removeEventListener('touchend', onTouchEnd);
    };
  }, [pauseOnHover, pauseOnFocus, pauseOnTouch, scheduleResume]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return {
    paused: enabled ? paused || manualNav : true,
    setPaused,
    notifyManualNav,
    bindPauseHandlers,
    timerRef,
  };
}
