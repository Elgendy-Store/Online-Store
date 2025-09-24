import React from 'react';
//import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedSubcategoriesSection from '../components/home/FeaturedSubcategoriesSection';
import BrandsSection from '../components/home/BrandsSection';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* <Hero /> */}
      <CategorySection />
      <BrandsSection />
      <FeaturedSubcategoriesSection />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;