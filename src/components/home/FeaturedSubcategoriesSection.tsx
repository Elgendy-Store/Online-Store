import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const featuredSubcategoriesNames = [
  'سماعات',
  'شواحن',
  'ماوس وأجهزة تأشير',
  'أجهزة الصوت والموسيقى',
  'لوحات مفاتيح',
  'ساعة ذكية',
];

// Flatten all subcategories from all categories
const allSubcategories = categories.flatMap(cat =>
  (cat.subcategories || []).map(sub => ({ ...sub, parentCategory: cat }))
);

const featuredSubcategories = featuredSubcategoriesNames
  .map(name => allSubcategories.find(sub => sub.name === name))
  .filter(Boolean);

const FeaturedSubcategoriesSection: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary-700 text-center">اكتشف أقسامنا المميزة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 justify-items-center">
          {featuredSubcategories.map((sub: any) => (
            <Link
              key={sub.id}
              to={`/subcategory/${sub.name}`}
              className="flex flex-col items-center group rounded-xl hover:bg-primary-50 transition p-2"
            >
              {sub.image && (
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-20 h-20 object-contain rounded-full border mb-2 shadow-sm group-hover:scale-105 group-hover:shadow-md transition"
                />
              )}
              <span className="text-sm md:text-base font-semibold text-center text-neutral-800 mt-1 group-hover:text-primary-700">
                {sub.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSubcategoriesSection;
