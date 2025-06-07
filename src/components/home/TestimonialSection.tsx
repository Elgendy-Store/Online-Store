import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getAllTestimonials } from '../../data/testimonials';

const TestimonialSection: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = getAllTestimonials();

  // Animation variants
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

  // Render star ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={18} className="text-secondary-500" fill="currentColor" />
        ))}
        
        {hasHalfStar && (
          <div className="relative">
            <Star size={18} className="text-neutral-300" fill="currentColor" />
            <div className="absolute top-0 right-0 w-1/2 overflow-hidden">
              <Star size={18} className="text-secondary-500" fill="currentColor" />
            </div>
          </div>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={18} className="text-neutral-300" fill="currentColor" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('testimonials')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            اقرأ ما قاله عملاؤنا عن تجربتهم مع متجر الجندي
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.slice(0, 6).map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                {renderStars(testimonial.rating)}
                
                <p className="my-4 text-neutral-700">
                  "{testimonial.comment}"
                </p>
                
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="mr-3">
                    <p className="font-medium text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">
                      {new Date(testimonial.date).toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;