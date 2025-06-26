import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, ChevronRight, Check, Plus } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useBudget } from '../context/BudgetContext';
import ProductImageGallery from '../components/products/ProductImageGallery';
import ProductCard from '../components/products/ProductCard';
import ProductRating from '../components/products/ProductRating';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { addToBudget, isInBudget } = useBudget();
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'features'>('description');
  const [showRatingSuccess, setShowRatingSuccess] = useState(false);
  const [isAddedToBudget, setIsAddedToBudget] = useState(false);
  
  const product = getProductById(id || '');
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
        <p className="mb-8">عذراً، المنتج الذي تبحث عنه غير موجود.</p>
        <Link to="/categories" className="btn btn-primary">
          تصفح المنتجات
        </Link>
      </div>
    );
  }

  const inBudget = isInBudget(product.id);

  const handleAddToBudget = () => {
    if (!isAddedToBudget) {
      addToBudget(product);
      setIsAddedToBudget(true);
    }
  };

  const handleRate = (rating: number) => {
    setShowRatingSuccess(true);
    setTimeout(() => setShowRatingSuccess(false), 3000);
  };

  const discountedPrice = product.isPromotion && product.discount_value
    ? product.price - (product.price * (product.discount_value / 100))
    : null;

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center flex-wrap">
            <li className="flex items-center">
              <Link to="/" className="text-neutral-600 hover:text-primary-600">
                {t('home')}
              </Link>
              <ChevronRight size={16} className="mx-2 text-neutral-400" />
            </li>
            <li className="flex items-center">
              <Link to="/categories" className="text-neutral-600 hover:text-primary-600">
                {t('categories')}
              </Link>
              <ChevronRight size={16} className="mx-2 text-neutral-400" />
            </li>
            <li className="flex items-center">
              {product.categories.map((category, index) => (
                <React.Fragment key={category}>
                  <Link 
                    to={`/categories/${category}`} 
                    className="text-neutral-600 hover:text-primary-600"
                  >
                    {category}
                  </Link>
                  {index < product.categories.length - 1 && (
                    <span className="mx-2 text-neutral-400">|</span>
                  )}
                </React.Fragment>
              ))}
              <ChevronRight size={16} className="mx-2 text-neutral-400" />
            </li>
            <li className="text-neutral-900 font-medium">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <ProductImageGallery images={product.images} alt={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
                {product.englishName && (
                  <p className="text-neutral-600">{product.englishName}</p>
                )}
              </div>

              {/* Rating Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center text-secondary-500">
                      <ProductRating initialRating={product.rating} interactive={false} size={18} onRate={() => {}} />
                      <span className="mr-1 text-sm">{product.rating}</span>
                    </div>
                    <span className="text-neutral-500 text-sm mr-2">({product.reviewCount} تقييم)</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-4">
                  <p className="text-sm text-neutral-700 mb-2">قيّم هذا المنتج:</p>
                  <div className="flex items-center gap-4">
                    <ProductRating onRate={handleRate} size={24} />
                    {showRatingSuccess && (
                      <span className="text-success-600 text-sm">
                        شكراً لتقييمك!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-neutral-200 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-right">
                    {product.isPromotion && product.discount_value && (
                      <span className="block mb-1 bg-secondary-500 text-secondary-1000 text-base font-medium px-2 py-1 rounded-full">
                        Sale -{product.discount_value}%
                      </span>
                    )}
                    {product.isPromotion && product.discount_value ? (
                      <>
                        <span className="line-through text-neutral-500 mr-2">{product.price} {t('egp')}</span>
                        <span className="text-2xl font-bold text-primary-600">
                          {discountedPrice?.toFixed(2)} {t('egp')}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-neutral-900">
                        {product.price} {t('egp')}
                      </span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    product.isAvailable 
                      ? 'bg-success-100 text-success-700' 
                      : 'bg-error-100 text-error-700'
                  }`}>
                    {product.isAvailable ? t('availability') : t('outOfStock')}
                  </span>
                </div>

                <button
                  onClick={handleAddToBudget}
                  disabled={!product.isAvailable || isAddedToBudget}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-colors ${
                    isAddedToBudget
                      ? 'bg-success-500 text-white cursor-not-allowed'
                      : product.isAvailable
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-neutral-300 text-neutral-600 cursor-not-allowed'
                  }`}
                >
                  {isAddedToBudget ? (
                    <>
                      <Check size={20} className="mr-2" />
                      تمت الإضافة بنجاح
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={20} className="mr-2" />
                      {t('addToBudget')}
                    </>
                  )}
                </button>
              </div>

              {/* Product Tabs */}
              <div>
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'description'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {t('details')}
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'specifications'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {t('specifications')}
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'features'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {t('features')}
                  </button>
                </div>

                <div className="py-4">
                  {activeTab === 'description' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-neutral-700 leading-relaxed">
                        {product.description}
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'specifications' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <li key={key} className="flex justify-between border-b border-neutral-100 pb-2">
                            <span className="font-medium text-neutral-800">{key}</span>
                            <span className="text-neutral-600">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary-100 text-primary-600 rounded-full p-1 mt-0.5 mr-2">
                              <Check size={14} />
                            </span>
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('relatedProducts')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;