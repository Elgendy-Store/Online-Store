import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;