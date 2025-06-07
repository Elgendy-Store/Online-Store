import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import storelogo from '../assets/-5904417191535691899_121.jpg';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('aboutUs')}</h1>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-xl overflow-hidden mb-12">
          <div className="relative py-16 px-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">متجر الجندي</h2>
              <p className="text-lg md:text-xl mb-6">
                وجهتك الأولى للإكسسوارات الإلكترونية ذات الجودة العالية
              </p>
              <p className="text-primary-200">
                نسعى لتقديم أفضل المنتجات وأحدث التقنيات بأسعار منافسة وخدمة عملاء متميزة
              </p>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Our Story */}
        <motion.section 
          className="bg-white rounded-xl shadow-md p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">{t('ourHistory')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                تأسس متجر الجندي في عام 2015 بهدف تقديم منتجات تكنولوجية عالية الجودة للمستهلكين في مصر. بدأنا رحلتنا كمتجر صغير في محافظة الغربية، متخصصين في إكسسوارات الهواتف المحمولة، وواصلنا التوسع حتى أصبحنا نعمل مؤخرا في مدينة العبور، حيث نواصل تقديم أفضل المنتجات والخدمات لعملائنا.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                مع مرور السنوات، توسعنا لنشمل مجموعة متنوعة من المنتجات الإلكترونية وإكسسوارات الكمبيوتر. نفتخر بالنمو الذي حققناه والثقة التي اكتسبناها من عملائنا على مر السنين.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src={storelogo}
                alt="فريق متجر الجندي" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">{t('ourVision')}</h2>
            <p className="text-neutral-700 leading-relaxed">
              نسعى لنكون الوجهة الرائدة في مجال بيع الإكسسوارات والمنتجات الإلكترونية في مصر، من خلال تقديم منتجات عالية الجودة وخدمة عملاء استثنائية وتجربة تسوق سلسة ومريحة.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-4">
              نطمح لمواكبة أحدث التطورات التكنولوجية وتوفيرها لعملائنا بأسعار تنافسية، مع الحفاظ على مبادئنا في النزاهة والشفافية.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">{t('ourMission')}</h2>
            <p className="text-neutral-700 leading-relaxed">
              مهمتنا هي تزويد عملائنا بأفضل المنتجات التكنولوجية والإكسسوارات الأصلية بأسعار منافسة، وتقديم تجربة تسوق مميزة من خلال:
            </p>
            <ul className="list-disc list-inside text-neutral-700 mt-4 space-y-2">
              <li>اختيار منتجات ذات جودة عالية وضمان أصالتها</li>
              <li>توفير خدمة عملاء متميزة قبل وبعد البيع</li>
              <li>تقديم النصائح والإرشادات المتعلقة بالمنتجات التكنولوجية</li>
              <li>الالتزام بالمصداقية والشفافية في جميع تعاملاتنا</li>
            </ul>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.section 
          className="bg-white rounded-xl shadow-md p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">الجودة</h3>
              <p className="text-neutral-700">
                نلتزم بتقديم منتجات عالية الجودة ونختار بعناية من الموزعين المعتمدين والوكلاء الرسميين.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">النزاهة</h3>
              <p className="text-neutral-700">
                نؤمن بالشفافية والصدق في جميع تعاملاتنا مع العملاء والموردين والشركاء.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">الابتكار</h3>
              <p className="text-neutral-700">
                نسعى دائمًا لمواكبة أحدث التطورات التكنولوجية وتقديم منتجات مبتكرة تلبي احتياجات عملائنا.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">رضا العملاء</h3>
              <p className="text-neutral-700">
                نضع رضا عملائنا في مقدمة أولوياتنا ونسعى جاهدين لتقديم تجربة تسوق مميزة وخدمة ما بعد البيع.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutPage;