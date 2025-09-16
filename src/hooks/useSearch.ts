import { useMemo, useState, useCallback } from 'react';
import Fuse from 'fuse.js';
import { SearchItem } from '../types/types';
import { getAllCategories } from '../data/categories';
import { getAllProducts } from '../data/products';

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
      });
    });

    // Add categories
    categories.forEach(category => {
      searchItems.push({
        id: category.id,
        name: category.name,
        englishName: category.englishName,
        type: 'category',
        priority: 2, // Medium relevance
      });

      // Add subcategories
      category.subcategories?.forEach(subcategory => {
        searchItems.push({
          id: subcategory.id,
          name: subcategory.name,
          englishName: subcategory.englishName,
          type: 'subcategory',
          categoryId: category.id,
          priority: 3, // Lower relevance
        });
      });
    });

    return searchItems;
  }, []);

  // Fuse.js configuration
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'name', weight: 0.7 },
        { name: 'englishName', weight: 0.3 },
      ],
      threshold: 0.4, // More lenient matching
      includeMatches: true,
      includeScore: true,
      useExtendedSearch: true,
    });
  }, [searchIndex]);

  // Search function
  const search = useCallback((searchQuery: string): SearchItem[] => {
    if (!searchQuery.trim()) return [];

    const results = fuse.search(searchQuery);

    // Transform results to include highlight information
    const transformedResults = results.map(result => {
      const item = result.item as SearchItem;
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
  }, [fuse]);

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
