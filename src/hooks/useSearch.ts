import { useMemo, useState, useCallback } from 'react';
import Fuse from 'fuse.js';
import { SearchItem } from '../types/types';
import { getAllCategories } from '../data/categories';
import { getAllProducts } from '../data/products';

import i18n from '../i18n/i18n';

// Arabic keyword mapping for colloquial/alternative terms
const arabicKeywordMap: Record<string, string> = {
  'كيبورد': 'لوحات مفاتيح',
  'صب': 'أجهزة الصوت والموسيقى',
  'ماوس': 'ماوس وأجهزة تأشير',
  // Add more mappings as needed
};

export const useSearch = () => {
  const [query, setQuery] = useState('');

  // Create search index combining products, categories, and subcategories
  const searchIndex = useMemo(() => {
    const searchItems: SearchItem[] = [];
    const products = getAllProducts();
    const categories = getAllCategories();

    // Add products
    products.forEach(product => {
      searchItems.push({
        id: product.id,
        name: product.name,
        englishName: product.englishName,
        type: 'product',
        categoryId: product.categories[0], // Use first category
        subcategoryId: product.subcategory,
        priority: 1, // Highest relevance
        image: product.images && product.images.length > 0 ? product.images[0] : undefined,
      } as any);
    });

    // Add categories
    categories.forEach(category => {
      searchItems.push({
        id: category.id,
        name: category.name,
        englishName: category.englishName,
        type: 'category',
        priority: 2, // Medium relevance
        image: category.image,
      } as any);

      // Add subcategories
      category.subcategories?.forEach(subcategory => {
        searchItems.push({
          id: subcategory.id,
          name: subcategory.name,
          englishName: subcategory.englishName,
          type: 'subcategory',
          categoryId: category.id,
          priority: 3, // Lower relevance
        } as any);
      });
    });

    return searchItems;
  }, []);

  // Detect current language
  const language = i18n.language || 'ar';

  // Fuse.js configuration
  const fuse = useMemo(() => {
    // Dynamically set keys based on language
    const keys = language === 'ar'
      ? [{ name: 'name', weight: 1 }]
      : [{ name: 'englishName', weight: 1 }];
    // Always fallback to both for broad matching
    if (language === 'ar') keys.push({ name: 'englishName', weight: 0.3 });
    else keys.push({ name: 'name', weight: 0.3 });
    return new Fuse(searchIndex, {
      keys,
      threshold: 0.4, // More lenient matching
      includeMatches: true,
      includeScore: true,
      useExtendedSearch: true,
    });
  }, [searchIndex, language]);

  // Search function
  const search = useCallback((searchQuery: string): SearchItem[] => {
    if (!searchQuery.trim()) return [];

    let queryToSearch = searchQuery;
    // Arabic keyword mapping
    if (language === 'ar') {
      const mapped = arabicKeywordMap[searchQuery.trim()];
      if (mapped) queryToSearch = mapped;
    }

    const results = fuse.search(queryToSearch);

    // Transform results to include highlight information
    const transformedResults = results.map(result => {
      const item = result.item as any;
      const matches = result.matches || [];

      // Extract highlight indices from matches
      const highlightIndices: number[][] = [];
      matches.forEach(match => {
        if (match.indices) {
          highlightIndices.push(...match.indices);
        }
      });

      return {
        ...item,
        highlightIndices,
      };
    });

    // Sort by priority (subcategory > category > product), then by score
    return transformedResults
      .sort((a, b) => {
        if (a.priority !== b.priority) {
          return b.priority - a.priority; // Higher priority first
        }
        const aResult = results.find((r: any) => (r.item as SearchItem).id === a.id);
        const bResult = results.find((r: any) => (r.item as SearchItem).id === b.id);
        return (aResult?.score || 1) - (bResult?.score || 1);
      })
      .slice(0, 10); // Limit to 10 results
  }, [fuse, language]);

  // Get current search results
  const searchResults = useMemo(() => {
    return search(query);
  }, [query, search]);

  const updateQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    searchResults,
    updateQuery,
    clearSearch,
    isSearching: query.length > 0,
  };
};
