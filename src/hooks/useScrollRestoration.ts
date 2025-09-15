import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType, NavigationType } from 'react-router-dom';

// In-memory map for scroll positions (per session)
const scrollPositions = new Map<string, number>();

// Helper: persist to sessionStorage for refreshes
const SCROLL_POSITIONS_KEY = 'scroll-positions';

const saveToSessionStorage = (path: string, position: number) => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(SCROLL_POSITIONS_KEY) || '{}');
    stored[path] = position;
    sessionStorage.setItem(SCROLL_POSITIONS_KEY, JSON.stringify(stored));
  } catch {}
};
const loadFromSessionStorage = (path: string): number | null => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(SCROLL_POSITIONS_KEY) || '{}');
    return stored[path] !== undefined ? stored[path] : null;
  } catch {
    return null;
  }
};

// Helper: deferred scroll restoration with retries for long/lazy pages
const restoreScrollPositionWithRetries = (targetPosition: number, maxRetries = 10) => {
  let retryCount = 0;
  let lastScrollHeight = document.documentElement.scrollHeight;

  const attemptScroll = () => {
    retryCount++;
    window.scrollTo({ top: targetPosition, left: 0, behavior: 'instant' });

    // If close enough, stop
    if (Math.abs(window.scrollY - targetPosition) <= 50) return;

    // If page height is still changing, or not at target, retry
    const currentScrollHeight = document.documentElement.scrollHeight;
    if (retryCount < maxRetries) {
      if (Math.abs(currentScrollHeight - lastScrollHeight) > 100) {
        setTimeout(attemptScroll, 200 + retryCount * 100);
      } else {
        requestAnimationFrame(() => setTimeout(attemptScroll, 100));
      }
      lastScrollHeight = currentScrollHeight;
    }
  };
  requestAnimationFrame(attemptScroll);
};

export const useScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousLocationRef = useRef<string | null>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // On first mount, just track location
    if (isInitialMount.current) {
      previousLocationRef.current = currentPath;
      isInitialMount.current = false;
      return;
    }

    // Save scroll position for previous route before navigating
    const previousPath = previousLocationRef.current;
    if (previousPath && previousPath !== currentPath) {
      scrollPositions.set(previousPath, window.scrollY);
      saveToSessionStorage(previousPath, window.scrollY);
    }

    // Restore or reset scroll for new route
    if (navigationType === NavigationType.Pop) {
      const saved = scrollPositions.get(currentPath)
        ?? loadFromSessionStorage(currentPath);
      if (typeof saved === 'number') {
        restoreScrollPositionWithRetries(saved);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    previousLocationRef.current = currentPath;

    // Save on unload
    const handleBeforeUnload = () => {
      scrollPositions.set(currentPath, window.scrollY);
      saveToSessionStorage(currentPath, window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.pathname, location.search, navigationType]);
};