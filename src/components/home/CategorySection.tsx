import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="categories-section" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('categories')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t('exploreProducts')}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link 
                to={`/categories/${category.id}`}
                className="block group"
              >
                <div className="overflow-hidden rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold">{i18n.language === 'ar' ? category.name : category.englishName}</h3>
                    </div>
                  </div>
                  
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="p-4 border-t border-neutral-200">
                      <ul className="flex flex-wrap gap-2">
                        {category.subcategories.slice(0, 3).map((subcategory) => (
                          <li 
                            key={subcategory.id}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {i18n.language === 'ar' ? subcategory.name : subcategory.englishName}
                          </li>
                        ))}
                        {category.subcategories.length > 3 && (
                          <li className="text-neutral-500 px-3 py-1 text-sm">
                            +{category.subcategories.length - 3} {t('more')}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;