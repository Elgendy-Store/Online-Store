// Example usage of the SearchBar component
import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchItem } from '../types/types';

const SearchExample: React.FC = () => {
  const handleItemSelect = (item: SearchItem) => {
    console.log('Selected item:', item);
    // Handle navigation or other actions based on the selected item
    switch (item.type) {
      case 'product':
        // Navigate to product page
        console.log(`Navigate to product: ${item.id}`);
        break;
      case 'category':
        // Navigate to category page
        console.log(`Navigate to category: ${item.id}`);
        break;
      case 'subcategory':
        // Navigate to subcategory page
        console.log(`Navigate to subcategory: ${item.id} in category: ${item.categoryId}`);
        break;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">البحث في المتجر</h1>
      <SearchBar
        onItemSelect={handleItemSelect}
        placeholder="ابحث عن المنتجات، الفئات، والفئات الفرعية..."
        className="max-w-lg"
      />
    </div>
  );
};

export default SearchExample;
