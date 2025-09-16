import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { SearchItem } from '../types/types';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "البحث عن المنتجات، الفئات، والفئات الفرعية...",
  className = "",
}) => {
  const navigate = useNavigate();
  const { query, searchResults, updateQuery, clearSearch, isSearching } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateQuery(value);
    setIsOpen(value.length > 0);
    setSelectedIndex(-1);
  };

  // Handle item selection
  const handleItemSelect = (item: SearchItem) => {
    updateQuery(item.name);
    setIsOpen(false);
    setSelectedIndex(-1);
    navigate(`/search?q=${encodeURIComponent(item.name)}`);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isOpen && selectedIndex >= 0 && selectedIndex < searchResults.length) {
        handleItemSelect(searchResults[selectedIndex]);
      } else if (query.trim()) {
        setIsOpen(false);
        setSelectedIndex(-1);
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
      return;
    }
    if (!isOpen || searchResults.length === 0) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev =>
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };


  // Handle clear search
  const handleClear = () => {
    clearSearch();
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  // Handle focus
  const handleFocus = () => {
    if (query.length > 0) {
      setIsOpen(true);
    }
  };

  // Handle blur - close dropdown after a short delay to allow clicking
  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
      setSelectedIndex(-1);
    }, 150);
  };

  // Highlight text function
  const highlightText = (text: string, indices: number[][]) => {
    if (!indices.length) return text;

    const parts = [];
    let lastIndex = 0;

    indices.forEach(([start, end]) => {
      // Add non-highlighted part
      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start));
      }
      // Add highlighted part
      parts.push(
        <span key={start} className="bg-yellow-200 font-medium">
          {text.slice(start, end + 1)}
        </span>
      );
      lastIndex = end + 1;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  // Get type label in Arabic
  const getTypeLabel = (type: SearchItem['type']) => {
    switch (type) {
      case 'product':
        return 'منتج';
      case 'category':
        return 'فئة';
      case 'subcategory':
        return 'فئة فرعية';
      default:
        return '';
    }
  };

  // Get type color
  const getTypeColor = (type: SearchItem['type']) => {
    switch (type) {
      case 'product':
        return 'text-blue-600 bg-blue-50';
      case 'category':
        return 'text-green-600 bg-green-50';
      case 'subcategory':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
          autoComplete="off"
        />
        {isSearching && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Dropdown Suggestions */}
      {isOpen && searchResults.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto"
        >
          {searchResults.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleItemSelect(item)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {item.highlightIndices && item.highlightIndices.length > 0
                      ? highlightText(item.name, item.highlightIndices)
                      : item.name
                    }
                  </div>
                  {item.englishName && (
                    <div className="text-xs text-gray-500 truncate">
                      {item.highlightIndices && item.highlightIndices.length > 0
                        ? highlightText(item.englishName, item.highlightIndices)
                        : item.englishName
                      }
                    </div>
                  )}
                </div>
                <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(item.type)}`}>
                  {getTypeLabel(item.type)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length > 0 && searchResults.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="px-4 py-3 text-sm text-gray-500 text-center">
            لا توجد نتائج للبحث: "{query}"
          </div>
        </div>
      )}
    </div>
  );
};
