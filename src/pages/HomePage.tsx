import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedSubcategoriesSection from '../components/home/FeaturedSubcategoriesSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedSubcategoriesSection />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;