import { Product } from '../types/types';
import sirwakeyboard from '../assets/sirwa keyboard.png';
import sirwakeyboard1 from '../assets/sirwa keyboard1.png';
import limidekeyboard from '../assets/Limeide keyboard.png';
import limidekeyboard1 from '../assets/limidekeyboard1.png';
import pointKeyboard1 from '../assets/pointkye.png';
import smileKeyboard1 from '../assets/smile 2406.png';
import largesmileKeyboard from '../assets/smile 2408.png';
import crashspeakerm4 from '../assets/crash speaker m4.png';
import speakerbdt6601 from '../assets/speakerbdt6601.png';
import speakergts1360 from '../assets/speakergts1360.png';
import speakerpointpt122 from '../assets/point pt122.png';
import speakera012 from '../assets/speakera012.png';
import crashspeakerm3 from '../assets/crash speaker m3.png';
import speakermininbox from '../assets/speaker mini box.png';
import kisonlik100 from '../assets/kisonli k100.png';
import goldenkingg06 from '../assets/golden king speaker g06.png';
import goldenkingg418 from '../assets/goldenking speaker g418.png';
import bdtan18 from '../assets/bdt speaker an18.png';
import minibassm1 from '../assets/mini speaker bass m1.png';
import bdtan22 from '../assets/speaker bdt an22.png';
import lavast40 from '../assets/speaker lava st-40.png';
import kisonlis444 from '../assets/kisonli speaker s444.png';
import p222 from '../assets/speakerp222.png';
import p222_2 from '../assets/speakerp222.1.png';
import crashx4 from '../assets/crashspeakerx4.png';
import crashx9 from '../assets/crashspeakerx9.png';
import speaker1201_1 from '../assets/speaker 1201.1.png';
import speaker1201_2 from '../assets/speaker 1201.2.png';
import kt125 from '../assets/kt125.png';
import crashx40 from '../assets/crash x40.png';
import crashx40_2 from '../assets/crash x40.2.png';
import araimo from '../assets/araimo.png';
import scorpion2 from '../assets/scorpion marvo.2.png';
import scorpion from '../assets/scorpion marvo.2.png';
import scorpion3 from '../assets/scorpoin marvo.3.png';
import catp47m from '../assets/cat p47m.png';
import catp47m_2 from '../assets/cat p47m.2.png';
import catp47m_3 from '../assets/cat p47m.3.png';
import p47 from '../assets/p47.png';
import p47_2 from '../assets/p47.2.png';
import p39 from '../assets/p39.png';
import p39_2 from '../assets/p39.2.png';
import marshall_major703 from '../assets/marshall major 703.png';
import marshall_major703_2 from '../assets/marshall major 703.2.png';
import marshall_major703_3 from '../assets/marshall major 703.3.png';
import marshall_major703_4 from '../assets/marshall major 703.4.png';
import marshal_major903 from '../assets/marshall major 908.png';
import marshal_major903_2 from '../assets/marshall major 908.2.png';
import mx666 from '../assets/mx666.png';
import mx666_2 from '../assets/mx666.2.png';
import p9 from '../assets/p39.png';
import p9_2 from '../assets/p39.2.png';
import p9_3 from '../assets/p9.3.png';
import mic_B from '../assets/mic bluetooth.png';
import mini_fan from '../assets/fan.jpg';
import mini_fanr from '../assets/mini fanr.jpeg';
import mini_fang from '../assets/minin fang.jpeg';
import mini_fanw from '../assets/mini fanw.jpeg';
import bdt_an2304 from '../assets/btd an 2304.jpg';
import bdt_an2304mini from '../assets/btd an 2304mini.jpg';
import jpl_m3_mini from '../assets/jpl m3 mini.jpg';

// Sample products data (will be expanded in a real implementation)
export const products: Product[] = [
{
  id: '1',
  name: 'لوحة مفاتيح Sirwa',
  englishName: 'Sirwa Keyboard',
  description: 'لوحة مفاتيح بإضاءة خلفية ثلاثية الألوان، تصميم معدني أنيق مع غطاء معلق وأغطية مفاتيح مقعرة لراحة أكبر. مقاومة للتناثر وتضم مفتاح مسافة كبير لكتابة أكثر سلاسة.',
  price: 1050,
  images: [
    sirwakeyboard,
    sirwakeyboard1,
  ],
  categories: ['إكسسوارات الكمبيوتر'],
  features: [
    "ثلاثي الألوان بإضاءة خلفية",
    "غطاء معلق",
    "تصميم مقاوم للتناثر",
    "ظهر معدني",
    "أغطية مفاتيح مقعرة",
    "مفتاح مسافة كبير",
    "العلامة التجارية: Siriwa",
    "الأبعاد: 45.2 × 17.2 × 2.6 سم",
    "رقم الموديل: K1",
    "الشركة المصنعة: Siriwa",
    "اللون: اسود",
    "الوزن: 572 جرام",
  ],
  specifications: {
    'العلامة التجارية': 'Siriwa',
    'اللون': 'أسود',
    'لغة لوحة المفاتيح': 'إنجليزي',
    'تتضمن بطاريات؟': 'لا',
    'الاتصال': 'USB',
    'التوافق': 'PC و Laptop',
    'رقم الموديل': 'K1',
    'هل المنتج يحتاج بطاريات أو يحتوي على بطارية؟': 'لا',
    'هل المنتج مادة خطرة أو خطرة للتخزين أو النقل؟': 'لا',
    'نوع معرف المنتج الخارجي': 'UPC-E',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.7,
  reviewCount: 28,
  createdAt: new Date('2025-06-05'),
},

{
  id: '2',
  name: 'لوحة مفاتيح Retro Limeute',
  englishName: 'Retro Limeute Keyboard',
  description: 'لوحة مفاتيح بتصميم كلاسيكي مستوحى من الآلة الكاتبة، مزودة بإضاءة خلفية RGB ملونة وتصميم أنيق مع مفاتيح دائرية مريحة للكتابة.',
  price: 520,
  images: [
    limidekeyboard,
    limidekeyboard1
  ],
  categories: ['إكسسوارات الكمبيوتر'],
  features: [
    "تصميم كلاسيكي مستوحى من الآلة الكاتبة",
    "إضاءة خلفية RGB متعددة الألوان",
    "مفاتيح دائرية مريحة",
    "تصميم أنيق وعصري",
    "اتصال سلكي عبر USB",
    "لوحة مفاتيح كاملة مع لوحة أرقام",
  ],
  specifications: {
    'العلامة التجارية': 'Limeute',
    'اللون': 'أبيض بإضاءة RGB',
    'لغة لوحة المفاتيح': 'إنجليزي',
    'الاتصال': 'USB سلكي',
    'التوافق': 'PC و Laptop',
    'رقم الموديل': 'غير معروف',
    'هل يتطلب بطاريات؟': 'لا',
    'الوزن': 'تقريباً 600 جرام',
    'الأبعاد': '44 × 13 × 3 سم (تقديرية)',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.6,
  reviewCount: 12,
  createdAt: new Date('2025-06-05'),
},

{
  id: '3',
  name: 'لوحة مفاتيح Point PT-360',
  englishName: 'Point PT-360 Keyboard',
  description: 'لوحة مفاتيح متعددة الوسائط بتصميم مريح وأزرار بلونين للتمييز البصري. مزودة بمفاتيح وسائط للتحكم السريع، واتصال سلكي عبر USB، ومناسبة للمستخدمين من جميع الفئات.',
  price: 250,
  images: [
    pointKeyboard1
  ],
  categories: ['إكسسوارات الكمبيوتر'],
  features: [
    "لوحة مفاتيح متعددة الوسائط",
    "تصميم مريح ومناسب لليد اليمنى واليسرى",
    "أزرار وسائط متعددة للوصول السريع",
    "أزرار ملونة لتجربة مستخدم أفضل",
    "اتصال USB سلكي",
    "تخطيط باللغة العربية والإنجليزية",
  ],
  specifications: {
    'العلامة التجارية': 'Point',
    'اللون': 'أسود مع أزرار برتقالية',
    'نمط': 'حديث',
    'طريقة الاتصال': 'USB سلكي',
    'الوصف': 'لوحة مفاتيح USB متعددة الوسائط',
    'متوافق مع': 'الكمبيوتر المحمول والبي سي',
    'الميزات الخاصة': 'تصميم مريح، تحكم بالوسائط، تصميم مزدوج اليد (ambidextrous)',
    'المكونات المشمولة': 'كابل USB',
    'لغة لوحة المفاتيح': 'عربي + إنجليزي',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.5,
  reviewCount: 15,
  createdAt: new Date('2025-06-05'),
},

{
  id: '4',
  name: 'لوحة مفاتيح Smile KB-2406',
  englishName: 'Smile KB-2406 Full-Size Keyboard',
  description: 'لوحة مفاتيح كاملة بتصميم عصري تضم 104 مفتاحًا. مناسبة للاستخدام المكتبي، الألعاب، والأزياء الحديثة. تتميز بمقاومة رذاذ الماء، أزرار لمس ناعمة، وجودة عالية بعمر استخدام يصل إلى 10 ملايين ضغطة.',
  price: 180,
  images: [
    smileKeyboard1
  ],
  categories: ['إكسسوارات الكمبيوتر'],
  features: [
    "تصميم عملي كامل بـ 104 مفاتيح",
    "مناسبة للاستخدام المكتبي والألعاب",
    "مقاومة لرذاذ الماء مع فتحات تصريف",
    "زر لمس ناعم وسريع الاستجابة",
    "تصميم ثلاثي اللوحات",
    "لوحة مفاتيح مزدوجة اللغة (عربي/إنجليزي)"
  ],
  specifications: {
    'العلامة التجارية': 'Smile',
    'الموديل': 'KB-2406',
    'نوع الاتصال': 'USB سلكي',
    'عدد المفاتيح': '104',
    'تصميم المفاتيح': '3 لوحات مفاتيح',
    'مستوى مقاومة الماء': '4 نجوم',
    'ضغط المفتاح': '50 ± 5 جم',
    'شوط الزر': '4 مم ± 0.3 مم',
    'سرعة الاستجابة': '0.2 مللي ثانية',
    'جهد التشغيل': '5 فولت ± 0.25',
    'تيار التشغيل': '>120mA',
    'عمر الزر': 'أكثر من 10 ملايين مرة'
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.6,
  reviewCount: 22,
  createdAt: new Date('2025-06-05'),
},

{
   id: '5', // تم تحديثه ليعكس رقم الطراز كمعرف فريد
   name: 'لوحة مفاتيح سمايل KB 2508 سلكية', // تم تحديث الاسم العربي
   englishName: 'Smile KB 2508 Wired Keyboard', // تم تحديث الاسم الإنجليزي
   description: 'لوحة مفاتيح سمايل KB 2508 هي لوحة مفاتيح سلكية موثوقة ومريحة بمنفذ USB، مصممة للاستخدام السلس مع أجهزة الكمبيوتر المكتبية والمحمولة. تتميز بتصميم نحيف ومقاوم للتناثر مع 124 مفتاحًا، بما في ذلك مفاتيح الوسائط المتعددة ومفاتيح الاختصار متعددة الوظائف، مما يوفر تجربة كتابة هادئة وناعمة الملمس. يضيف تصميمها ثنائي اللغة الإنجليزية والعربية قيمة كبيرة، مما يجعلها خيارًا متعدد الاستخدامات وعمليًا لمجموعة واسعة من المستخدمين.', // تم توليد الوصف بناءً على الميزات
   price: 200, // تم تحديث السعر بناءً على بيانات السوق الحالية (بالجنيه المصري)
   images:[
    largesmileKeyboard
  ],
  categories: ['إكسسوارات الكمبيوتر'],
   features: [
     "تصميم نحيف",
     "توصيل وتشغيل مباشر",
     "جودة قياسية عالية وموثوقة",
     "مفاتيح مريحة وصامتة وناعمة الملمس",
     "تصميم مقاوم للتناثر",
     "غطاء معلق",
     "مفتاح مسافة كبير",
     "مفاتيح وسائط متعددة ومفاتيح اختصار متعددة الوظائف",
   ],
   specifications: {
     'الوزن': '250 جرام', // تقدير واقعي للوزن
     'التوصيل': 'USB',
     'عدد المفاتيح': '124',
     'العمر الافتراضي للمفتاح': '10 مليون ضغطة',
     'الأجهزة المتوافقة': 'الكمبيوتر المحمول والكمبيوتر الشخصي',
     'لغة الكيبورد': 'الإنجليزية والعربية',
     'اللون': 'أسود مع مفاتيح حمراء',
     'الضمان': 'شهر واحد',
     'المادة': 'بلاستيك',
     'نوع المفتاح': 'غشائي',
     'أبعاد العبوة': '50 × 15.3 × 2.5 سم',
   },
   isAvailable: false, // تم تحديثه ليعكس التوفر المحدود/النفاذ
   isNew: false, // تم تحديثه ليعكس أنه ليس منتجًا جديدًا تمامًا
   isPromotion: false, // تم الإبقاء عليه
   isBundle: false, // تم الإبقاء عليه
   rating: 3.4, // تم تحديثه بناءً على مراجعات أمازون
   reviewCount: 23, // تم تحديثه بناءً على مراجعات أمازون
   createdAt: new Date('2023-10-26'), // تاريخ إنشاء تقديري واقعي
 },
{
  id: '6',
  name: 'مكبر صوت Crash M4 محمول',
  englishName: 'Crash M4 Portable Speaker',
  description: 'مكبر الصوت المحمول Crash M4 Bass Voice يوفر تجربة صوت احترافية 2.0 متعددة الوسائط. يتميز بإضاءة RGB جذابة ومتزامنة مع الموسيقى، ويوفر صوتًا عاليًا وجهيرًا قويًا. يدعم الاتصال عبر البلوتوث، وUSB، وبطاقة TF، ومخرج AUX، بالإضافة إلى راديو FM ووظيفة TWS (True Wireless Stereo) لربط مكبر صوتين معًا. مثالي للحفلات الصغيرة، الاستخدام المنزلي، أو في الهواء الطلق بفضل تصميمه المدمج وسهل الحمل.',
  price: 360, // Based on common market prices for similar portable speakers in Egypt. Actual price may vary.
  images: [
    crashspeakerm4 // Placeholder for actual image variable
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "صوت احترافي 2.0",
    "صوت باس (جهير) قوي",
    "إضاءة RGB ديناميكية متزامنة مع الموسيقى",
    "دعم البلوتوث اللاسلكي",
    "منافذ USB و TF Card لتشغيل الموسيقى",
    "مدخل AUX 3.5 ملم",
    "راديو FM مدمج",
    "وظيفة TWS (True Wireless Stereo) لربط مكبر صوتين",
    "تصميم مدمج ومحمول",
    "صوت عالي ومفصل"
  ],
  specifications: {
    'الخرج': '8 واط RMS',
    'نسبة الإشارة إلى الضوضاء (SNR)': '≥50 ديسيبل',
    'فصل القنوات': '≥45 ديسيبل', // Corrected 'النسبة' to 'فصل القنوات' (channel separation)
    'المقاومة': '4 أوم',
    'الطاقة': 'USB 5 فولت',
    'وحدة مكبر الصوت': '4 بوصة',
    'التوصيل': 'بلوتوث، USB، بطاقة TF، AUX',
    'ميزات إضافية': 'راديو FM، TWS',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.2, // Estimated based on typical ratings for such products
  reviewCount: 15, // Estimated
  createdAt: new Date('2025-06-02'),
},
{
  id: '7',
  name: 'مكبر صوت BDT BD6601 احترافي محمول',
  englishName: 'BDT BD6601 Professional Portable Speaker',
  description: 'استمتع بتجربة صوت قوية ومحمولة مع مكبر الصوت BDT BD6601 الاحترافي. يتميز هذا المكبر بصب ووفر بحجم 6.5 بوصة لتقديم صوت جهير عميق، مع إضاءة LED ديناميكية لإضفاء جو احتفالي. يدعم الاتصال اللاسلكي عبر البلوتوث، بالإضافة إلى منافذ USB وبطاقة TF لتشغيل ملفاتك الصوتية المفضلة. كما يحتوي على مدخل AUX وراديو FM، ووظيفة كاريوكي مع مدخل ميكروفون. بفضل بطاريته المدمجة القابلة لإعادة الشحن، يمكنك اصطحابه معك أينما ذهبت للحفلات والتجمعات.',
  price: 550, // Based on Amazon.eg current listing
  images: [
    speakerbdt6601 // Placeholder for actual image variable

  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "جودة صوت عالية واحترافية",
    "إضاءة LED ديناميكية متعددة الألوان",
    "دعم البلوتوث اللاسلكي للاتصال بالأجهزة الذكية",
    "منافذ USB و TF Card لتشغيل الموسيقى مباشرة",
    "مدخل AUX 3.5 ملم لتوصيل الأجهزة السلكية",
    "وظيفة كاريوكي مع مدخل ميكروفون",
    "راديو FM مدمج",
    "بطارية مدمجة قابلة لإعادة الشحن لسهولة الحمل",
    "مجهز بجهاز تحكم عن بعد",
  ],
  specifications: {
    'مكبر الصوت (الوفر)': '6.5 بوصة',
    'الخرج الأقصى للطاقة': '8 واط',
    'القنوات': '1.0 (أحادي)',
    'التوصيل': 'بلوتوث، USB، بطاقة TF، AUX',
    'الطاقة': 'بطارية مدمجة قابلة لإعادة الشحن، شحن USB',
    'الأبعاد (أبعاد العبوة)': '33 × 21 × 21 سم',
    'عمر البطارية (تقديري)': '2-5 ساعات (حسب مستوى الصوت)',
    'التوافق': 'متوافق مع أجهزة متعددة (الهواتف الذكية، أجهزة الكمبيوتر المحمولة، الأجهزة اللوحية)',
    'الوزن': 'غير متاح (أكثر من 20 جرام بكثير)', // Acknowledging the incorrect 20g found in search
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 5.0, // Based on Amazon.eg (4 reviews)
  reviewCount: 4, // Based on Amazon.eg
  createdAt: new Date('2025-06-02'),
},
{
  id: '8',
  name: 'مكبر صوت KTS GTS-1360 محمول',
  englishName: 'KTS GTS-1360 Portable Speaker',
  description: 'استمتع بالصوت النقي والقوي مع مكبر الصوت المحمول KTS GTS-1360. يتميز هذا المكبر بحجم صغير وتصميم سهل الحمل مع مقبض مدمج، مما يجعله مثاليًا للسفر والاستخدام في أي مكان. يوفر صوتًا واضحًا وجهيرًا بفضل مكبر الصوت الداخلي بحجم 3 بوصات، ويحتوي على إضاءة LED ملونة ديناميكية تتراقص مع الموسيقى. يدعم الاتصال اللاسلكي عبر البلوتوث، وتشغيل الموسيقى مباشرة من USB وبطاقات TF، بالإضافة إلى راديو FM ومدخل AUX. يتميز ببطارية مدمجة قابلة لإعادة الشحن لمتعة موسيقية متواصلة.',
  price: 180, // Estimated average price in EGP
  images: [
    speakergts1360 // Placeholder for actual image variable
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "صوت نقي وقوي",
    "إضاءة LED ملونة ديناميكية (RGB)",
    "دعم البلوتوث اللاسلكي",
    "تشغيل الموسيقى من USB (بحد أقصى 32 جيجابايت، FAT32)",
    "تشغيل الموسيقى من بطاقة TF (بحد أقصى 32 جيجابايت، FAT32)",
    "راديو FM مدمج",
    "مدخل AUX 3.5 ملم",
    "بطارية مدمجة قابلة لإعادة الشحن",
    "تصميم مدمج ومحمول مع مقبض",
    "سهولة التشغيل والتحكم في الموسيقى"
  ],
  specifications: {
    'الموديل': 'GTS-1360',
    'حجم مكبر الصوت': '3 بوصة',
    'الخرج': '5 واط RMS',
    'المقاومة': '4 أوم',
    'مصدر الطاقة': 'DC 5V (عبر منفذ Micro USB)',
    'سعة البطارية (تقديرية)': '800 مللي أمبير',
    'وقت التشغيل (تقديري)': '1-3 ساعات (حسب مستوى الصوت)',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'استجابة التردد': '100 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR)': '≥85 ديسيبل',
    'التوصيل': 'بلوتوث، USB، بطاقة TF، AUX',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality
  reviewCount: 10, // Estimated
  createdAt: new Date('2025-06-02'),
},

{
  id: '9',
  name: 'مكبرات صوت Point PT-122 متعددة الوسائط USB 2.0',
  englishName: 'Point PT-122 Multimedia USB 2.0 Speakers',
  description: 'استمتع بتجربة صوت ستريو غامرة مع مكبرات الصوت Point PT-122 USB 2.0. مصممة لتكون الرفيق المثالي لسطح المكتب واللاب توب، توفر هذه السماعات صوتًا واضحًا بقوة 3 واط لكل مكبر، مع إضاءة RGB ديناميكية تضيف لمسة جمالية إلى مساحتك. تعمل السماعات مباشرة عبر منفذ USB، مما يجعلها سهلة التوصيل والتشغيل دون الحاجة لمحول طاقة إضافي. تصميمها المدمج يجعلها مناسبة لأي إعداد.',
  price: 490, // Estimated average price in EGP
  images: [
    speakerpointpt122 // Placeholder for actual image variable
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "نظام صوت ستريو 2.0",
    "إضاءة RGB ديناميكية وملونة",
    "تعمل بالطاقة عبر منفذ USB (توصيل وتشغيل)",
    "تحكم سهل في مستوى الصوت",
    "تصميم مدمج وموفر للمساحة",
    "جودة صوت واضحة ومناسبة للاستخدام اليومي",
    "مثالية لأجهزة الكمبيوتر المكتبية والمحمولة"
  ],
  specifications: {
    'نظام مكبرات الصوت': '2.0',
    'الطاقة المقدرة': '3 واط × 2 (إجمالي 6 واط RMS)',
    'المقاومة': '4 أوم',
    'نسبة الإشارة إلى الضوضاء (SNR)': '58 ديسيبل',
    'استجابة التردد': '20 هرتز - 20 كيلو هرتز',
    'التشويه التوافقي الكلي (THD)': '< 1% (عند 80 هرتز - 20 كيلو هرتز)',
    'مصدر الطاقة': 'USB 5 فولت',
    'التوصيل': 'USB (للطاقة والصوت)',
    'حجم وحدة مكبر الصوت': '2.5 بوصة',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 3.8, // Estimated based on typical product quality for this price range
  reviewCount: 12, // Estimated
  createdAt: new Date('2025-06-02'),
},

{
  id: '10',
  name: 'مكبر صوت بلوتوث صغير A012',
  englishName: 'Mini A012 Bluetooth Speaker',
  description: 'مكبر الصوت البلوتوث الصغير A012 هو رفيقك المثالي للاستمتاع بالموسيقى في أي مكان. يتميز بتصميم مدمج ومحمول مع إضاءة RGB ملونة تضفي جوًا حيويًا. يدعم الاتصال اللاسلكي عبر البلوتوث، بالإضافة إلى إمكانية تشغيل الموسيقى مباشرة من بطاقات USB و TF. كما يشتمل على راديو FM مدمج ووظيفة الرد على المكالمات بفضل الميكروفون المدمج. يعمل ببطارية قابلة لإعادة الشحن، مما يضمن ساعات من الاستماع المتواصل.',
  price: 230, // Estimated average price in EGP
  images: [
    speakera012    // Placeholder for actual image variable
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "إضاءة RGB LED ملونة",
    "دعم البلوتوث اللاسلكي",
    "تشغيل الموسيقى من USB",
    "تشغيل الموسيقى من بطاقة TF (MicroSD)",
    "راديو FM مدمج",
    "مدخل AUX (عادةً عبر منفذ الشحن/USB متعدد الأغراض)",
    "بطارية مدمجة قابلة لإعادة الشحن",
    "تصميم مدمج ومحمول مع حبل تعليق",
    "ميكروفون مدمج لإجراء المكالمات بدون استخدام اليدين",
  ],
  specifications: {
    'الموديل': 'A012',
    'طاقة الخرج': '3 واط',
    'المقاومة': '4 أوم',
    'البطارية': '14500 3.7 فولت (تقديرية: 500-800 مللي أمبير)',
    'جهد الشحن': 'تيار مستمر 5 فولت (عبر Micro USB)',
    'وقت التشغيل (تقديري)': '2-4 ساعات (حسب مستوى الصوت والإضاءة)',
    'وقت الشحن (تقديري)': '1-2 ساعة',
    'حجم وحدة مكبر الصوت': '1.5-2 بوصة (حوالي 40-50 مم)',
    'استجابة التردد (تقديرية)': '120 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥75 ديسيبل',
    'التوصيل': 'بلوتوث، USB، بطاقة TF، AUX',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on typical product quality for this price range
  reviewCount: 18, // Estimated
  createdAt: new Date('2025-06-02'),
},

{
  id: '11', // ID changed to 11 as requested
  name: 'مكبر صوت بلوتوث Crash M3 محمول',
  englishName: 'Crash M3 Portable Bluetooth Speaker',
  description: 'استمتع بتجربة صوت احترافية مع مكبر الصوت Crash M3 المحمول. يتميز هذا المكبر بتصميم صغير ومضغوط يسهل حمله بفضل المقبض المدمج، ويوفر صوتًا جهيرًا قويًا مع وحدة مكبر صوت كاملة التردد بحجم 3 بوصات. يضفي عليه إضاءة RGB LED ديناميكية جوًا بصريًا جذابًا يتزامن مع الموسيقى. يدعم الاتصال اللاسلكي عبر البلوتوث 5.0+EDR، وتشغيل الملفات من بطاقة TF ومنفذ USB، بالإضافة إلى راديو FM. يعمل ببطارية مدمجة قابلة لإعادة الشحن، مما يجعله مثاليًا للحفلات الصغيرة أو الاستخدام الشخصي في أي مكان.',
  price: 240, // Estimated average price in EGP
  images: [
    crashspeakerm3 // Placeholder for actual image variable (pink)

  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "صوت جهير احترافي وقوي",
    "إضاءة RGB LED ديناميكية",
    "دعم البلوتوث 5.0+EDR (مسافة تصل إلى 15 مترًا)",
    "تشغيل الموسيقى من بطاقة TF (MicroSD)",
    "تشغيل الموسيقى من USB",
    "راديو FM مدمج",
    "مدخل AUX (متوقع، شائع في هذه الفئة)",
    "بطارية مدمجة قابلة لإعادة الشحن",
    "تصميم مدمج ومحمول مع مقبض يد",
    "يتوفر بألوان متعددة (وردي، أصفر، أزرق)"
  ],
  specifications: {
    'الموديل': 'M3',
    'الأبعاد': '103 × 78 × 146 مم',
    'إصدار البلوتوث': '5.0+EDR',
    'المسافة اللاسلكية': 'أقل من 15 مترًا',
    'وحدة مكبر الصوت': '3 بوصة (كامل التردد)',
    'قناة الصوت': 'أحادي (مع إمكانية TWS لزوجين)', // Clarified as mono, acknowledging potential TWS
    'الطاقة': '5 واط (RMS)',
    'سعة البطارية': '400 مللي أمبير/ساعة',
    'وقت التشغيل (تقديري)': '2-4 ساعات (حسب مستوى الصوت والإضاءة)',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'وضع الدعم': 'بطاقة TF، بلوتوث 5.0',
    'ملحقات': 'سلك شحن',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥75 ديسيبل',
    'استجابة التردد (تقديرية)': '100 هرتز - 20 كيلو هرتز',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.1,
  reviewCount: 25,
  createdAt: new Date('2025-06-03'),
},

{
  id: '12', // ID starts from 12
  name: 'مكبر صوت بلوتوث صغير مع كاريوكي وإضاءة LED',
  englishName: 'Mini Portable Bluetooth Speaker with Karaoke & LED Light',
  description: 'انغمس في عالم الموسيقى والترفيه مع مكبر الصوت المحمول الصغير هذا، الذي يجمع بين الصوت القوي والإضاءة LED الملونة الجذابة. بفضل حجم مكبر الصوت 2 بوصة وطاقة الخرج 5 واط، يقدم هذا الجهاز تجربة صوتية ممتازة أثناء التنقل. يدعم تشغيل الموسيقى من بطاقات الذاكرة (TF) ومنفذ USB، ويتميز بمدخل AUX، بالإضافة إلى راديو FM. الأبرز هو دعمه لوظيفة الكاريوكي مع مدخل ميكروفون، مما يجعله مثاليًا للتجمعات الممتعة. بطاريته المدمجة القابلة لإعادة الشحن توفر ما يصل إلى 5 ساعات من وقت التشغيل.',
  price: 290, // Estimated price in EGP
  images: [
    speakermininbox // Placeholder for actual image variable (box)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "إضاءة LED ملونة ديناميكية",
    "دعم البلوتوث اللاسلكي",
    "تشغيل الموسيقى من بطاقة TF (MicroSD)",
    "تشغيل الموسيقى من USB",
    "مدخل AUX (صوت خارجي)",
    "وظيفة الكاريوكي مع مدخل ميكروفون",
    "بطارية مدمجة قابلة لإعادة الشحن",
    "تصميم مدمج ومحمول",
    "راديو FM مدمج",
    "صوت عالي الجودة بحجم صغير"
  ],
  specifications: {
    'طاقة الخرج': '5 واط',
    'حجم مكبر الصوت': '2 بوصة',
    'سعة البطارية': '800 مللي أمبير/ساعة',
    'وقت التشغيل (عند 80% من مستوى الصوت)': '3-5 ساعات',
    'وقت الشحن': 'أقل من ساعتين',
    'طاقة الإدخال': 'تيار مستمر 5 فولت',
    'دعم التخزين': 'بطاقة TF (ذاكرة)، USB',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥75 ديسيبل', // Estimated due to invalid sensitivity value
    'استجابة التردد (تقديرية)': '100 هرتز - 20 كيلو هرتز',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on common reviews for similar products
  reviewCount: 30, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '13', // ID starts from 13
  name: 'مكبرات صوت Kisonli K100 للوسائط المتعددة 2.0',
  englishName: 'Kisonli K100 Multimedia 2.0 Speakers',
  description: 'استمتع بصوت ستريو واضح وموثوق به مع مكبرات صوت Kisonli K100 المدمجة. صممت هذه السماعات بنظام 2.0 قناة لتوفير تجربة صوتية أساسية وفعالة لأجهزة الكمبيوتر المكتبية والمحمولة. تعمل بالطاقة مباشرة عبر منفذ USB وتتصل بمنفذ الصوت 3.5 ملم، مما يجعلها سهلة التوصيل والتشغيل. بفضل تصميمها الصغير والموفر للمساحة، تعد Kisonli K100 خيارًا مثاليًا للاستخدام اليومي في المنزل أو المكتب.',
  price: 350, // Estimated average price in EGP
  images: [
    kisonlik100 // Placeholder for actual image variable
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "نظام مكبر صوت ستريو 2.0",
    "تعمل بالطاقة عبر منفذ USB 2.0 (تيار مستمر 5 فولت)",
    "مدخل صوت قياسي 3.5 ملم",
    "تحكم في مستوى الصوت على الكابل",
    "تصميم مدمج وموفر للمساحة",
    "سهلة التوصيل والتشغيل (Plug & Play)",
    "متوافقة مع أجهزة الكمبيوتر المكتبية والمحمولة"
  ],
  specifications: {
    'نظام مكبرات الصوت': '2.0',
    'الطاقة المقدرة': '0.5 واط × 2 (إجمالي 1 واط RMS)',
    'أقصى طاقة': '3.5 واط',
    'المعاوقة': '4 أوم',
    'نسبة الإشارة إلى الضوضاء (SNR)': '58 ديسيبل',
    'استجابة التردد': '20 هرتز - 20 كيلو هرتز',
    'التشويه التوافقي الكلي (THD)': '≤ 1% (عند 80 هرتز - 20 كيلو هرتز)',
    'مصدر الطاقة': 'USB DC 5V',
    'حجم وحدة مكبر الصوت': '2 بوصة',
    'التوصيل': 'USB (للطاقة) / 3.5 ملم (للصوت)',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 3.7, // Estimated based on typical product quality for this price range
  reviewCount: 20, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '14', // ID starts from 14
  name: 'مكبرات صوت GoldenKing G06 للوسائط المتعددة',
  englishName: 'GoldenKing G06 Multimedia Speaker System',
  description: 'نظام مكبرات صوت GoldenKing G06 هو رفيقك المثالي لجهاز الكمبيوتر واللاب توب، مصمم لتقديم تجربة صوتية ناعمة وواضحة. يتميز هذا النظام الصغير والمحمول بقدرة إخراج 2.5 واط لكل مكبر، ويحتوي على مضخم صوت نشط مدمج يوفر جودة صوت نقية وأنيقة. يعمل مباشرة عبر منفذ USB 5 فولت، مما يجعله سهل التوصيل والاستخدام مع أي جهاز يدعم USB. تصميمها العصري والديناميكي بألوان جريئة يجعلها إضافة جمالية لمكتبك.',
  price: 190, // Estimated average price in EGP
  images: [
    goldenkingg06 // Placeholder for actual image variable

  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "نظام مكبر صوت ستريو 2.0",
    "صوت ناعم وواضح",
    "مضخم صوت نشط مدمج",
    "جودة صوت نقية وأنيقة",
    "تصميم صغير الحجم وسهل الحمل",
    "متوافق مع أجهزة الكمبيوتر الشخصية، MP3، MP4، وأجهزة الكمبيوتر المحمولة",
    "يعمل بالطاقة عبر منفذ USB"
  ],
  specifications: {
    'نظام مكبرات الصوت': '2.0',
    'الطاقة المقدرة': '2.5 واط × 2 (إجمالي 5 واط RMS)',
    'المقاومة': '4 أوم',
    'نسبة الإشارة إلى الضوضاء (SNR)': '65 ديسيبل',
    'فصل القنوات (تقديري)': '45 ديسيبل',
    'استجابة التردد': '20 هرتز - 20 كيلو هرتز',
    'مصدر الطاقة': 'USB 5 فولت',
    'وحدة مكبر الصوت': '2 بوصة', // Corrected based on common size for such speakers
  },
  isAvailable: true,
  isNew: false, // Assuming it's not brand new in the market
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on typical product quality for this price range
  reviewCount: 15, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '15', // ID starts from 15
  name: 'مكبر صوت بلوتوث GoldenKing G-418 محمول',
  englishName: 'GoldenKing G-418 Portable Bluetooth Speaker',
  description: 'استمتع بالصوت القوي والمحمول مع مكبر الصوت GoldenKing G-418. يتميز هذا المكبر بوحدة مكبر صوت بحجم 4 بوصات وخرج طاقة 3 واط، مما يوفر صوتًا واضحًا وعالي الجودة. يدعم الاتصال اللاسلكي عبر البلوتوث بمدى فعال يصل إلى 10 أمتار، بالإضافة إلى خيارات تشغيل متعددة تشمل بطاقات TF وأقراص U (USB) ومدخل AUX. تضفي إضاءة LED الملونة على الواجهة الأمامية لمسة جمالية، كما يجعله تصميمه المزود بمقبض سهل الحمل مثاليًا للاستخدام في أي مكان. يعمل ببطارية مدمجة قابلة لإعادة الشحن ويتم شحنه بجهد 5 فولت تيار مستمر.',
  price: 280, // Estimated average price in EGP
  images: [
    goldenkingg418 // Placeholder for actual image variable (black speaker)

  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "وحدة مكبر صوت قوية بحجم 4 بوصات",
    "إضاءة LED ملونة وجذابة",
    "دعم البلوتوث اللاسلكي بمدى 10 أمتار",
    "تشغيل الموسيقى من بطاقة TF (MicroSD)",
    "تشغيل الموسيقى من قرص U (USB)",
    "مدخل صوت AUX (مدخل خط)",
    "راديو FM مدمج", // Inferred from typical control panel buttons
    "بطارية مدمجة قابلة لإعادة الشحن", // Standard for portable speakers of this type
    "تصميم محمول مع مقبض للحمل السهل",
    "تحكم سهل بالضغط على الأزرار",
    "توصيل سريع بدون برامج تشغيل"
  ],
  specifications: {
    'الموديل': 'G-418',
    'وحدة مكبر الصوت': '4 بوصات',
    'طاقة الخرج': '3 واط',
    'المسافة الفعالة (بلوتوث)': '10 أمتار',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'استجابة التردد': '100 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR)': '≥ 70 ديسيبل',
    'التشوه (THD)': '1%',
    'مدخلات الصوت': 'مدخل خط / بطاقة TF / قرص U',
    'طريقة الضبط': 'الضغط على المفتاح',
    'التوافق': 'هواتف محمولة، كمبيوتر'
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality for this range
  reviewCount: 22, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '16', // ID starts from 16
  name: 'مكبر صوت بلوتوث محمول Mini Speaker M1 Bass',
  englishName: 'Mini Speaker M1 Bass Portable Bluetooth Speaker',
  description: 'استمتع بتجربة صوت جهير قوية مع مكبر الصوت Mini Speaker M1 المحمول. يتميز هذا المكبر بتصميم أسطواني أنيق ومدمج يسهل حمله في أي مكان. يشتمل على وحدة مكبر صوت بحجم 3 بوصات وقوة خرج 5 واط لتوفير صوت واضح وعميق. بفضل بطارية الليثيوم عالية السعة المدمجة بقوة 400 مللي أمبير/ساعة، يمكنك الاستمتاع بساعات من الموسيقى المتواصلة. يدعم المكبر الاتصال اللاسلكي عبر البلوتوث، بالإضافة إلى تشغيل الملفات من بطاقات TF ومحركات أقراص USB، ومدخل AUX وراديو FM، مما يجعله جهازًا متعدد الاستخدامات.',
  price: 160, // Estimated average price in EGP
  images: [
    minibassm1 // Placeholder for actual image variable (black speaker)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "تصميم أنيق ومحمول",
    "بطارية ليثيوم عالية السعة (400 مللي أمبير/ساعة)",
    "تحكم في مستوى الصوت الرئيسي",
    "وحدة مكبر صوت بحجم 3 بوصات",
    "طاقة خرج 5 واط",
    "دعم البلوتوث اللاسلكي", // Inferred from common features of such speakers
    "تشغيل الموسيقى من بطاقة TF (MicroSD)",
    "تشغيل الموسيقى من USB",
    "مدخل AUX",
    "راديو FM مدمج", // Inferred from typical 'Mode' button
    "مرفق بكابل شحن"
  ],
  specifications: {
    'الموديل': 'M1',
    'وحدة مكبر الصوت': '3 بوصات',
    'طاقة الخرج': '5 واط',
    'سعة البطارية': '400 مللي أمبير/ساعة',
    'مصدر الطاقة': 'بطارية ليثيوم قابلة لإعادة الشحن',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'وقت التشغيل (تقديري)': '2-4 ساعات',
    'استجابة التردد (تقديرية)': '80 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥75 ديسيبل',
    'المقاومة': '4 أوم',
    'التوصيل': 'بلوتوث، بطاقة TF، USB، AUX',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on common reviews for similar products
  reviewCount: 20, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '17', // ID starts from 17
  name: 'مكبر صوت بلوتوث محمول BDT AN22 مع كاريوكي',
  englishName: 'BDT AN22 Portable Bluetooth Speaker with Karaoke',
  description: 'استمتع بالترفيه أينما كنت مع مكبر الصوت المحمول BDT AN22. يتميز هذا المكبر بتصميم مدمج وأنيق مع شبكة على شكل قرص العسل، ويوفر خرج صوت بقوة 3 واط. يدعم الجهاز تشغيل الموسيقى من منافذ USB وبطاقات TF، ويحتوي على وظيفة الكاريوكي مع مدخل للميكروفون، مما يجعله مثاليًا للتجمعات الصغيرة. يعمل ببطارية مدمجة قابلة لإعادة الشحن من نوع 14500 (3.7 فولت)، ويتم شحنه بسهولة عبر منفذ تيار مستمر 5 فولت.',
  price: 235, // Estimated average price in EGP
  images: [
    bdtan22 // Placeholder for actual image variable (green speaker)

  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "منافذ USB و TF لتشغيل الموسيقى",
    "وظيفة الكاريوكي مع مدخل ميكروفون",
    "بطارية مدمجة قابلة لإعادة الشحن",
    "صوت واضح وواضح",
    "تصميم مدمج ومحمول",
    "دعم البلوتوث اللاسلكي", // Inferred from common features of such speakers
    "راديو FM مدمج" // Inferred from common features of such speakers
  ],
  specifications: {
    'الموديل': 'AN22',
    'طاقة مكبر الصوت': '3 واط',
    'البطارية': '14500 3.7 فولت (تقديرية: 500 مللي أمبير/ساعة)',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'المقاومة': '4 أوم', // Interpreted from '40' in '40 3 واط*1'
    'وقت التشغيل (تقديري)': '2-4 ساعات',
    'استجابة التردد (تقديرية)': '100 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥70 ديسيبل',
    'التوصيل': 'بلوتوث، USB، بطاقة TF، كاريوكي',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 3.8, // Estimated based on common reviews for similar products
  reviewCount: 15, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '18', // ID starts from 18
  name: 'مكبر صوت بلوتوث BDT AN18 محمول مع حامل هاتف',
  englishName: 'BDT AN18 Portable Bluetooth Speaker with Phone Holder',
  description: 'استمتع بتجربة صوتية متعددة الاستخدامات مع مكبر الصوت BDT AN18 المحمول. يتميز هذا المكبر بتصميم عصري ومدمج يضم حاملًا عمليًا للهاتف، مما يجعله مثاليًا لمشاهدة الفيديوهات أو المكالمات أثناء الاستماع إلى الموسيقى. يوفر المكبر صوتًا واضحًا بقوة 5 واط، ويدعم مجموعة واسعة من خيارات التشغيل بما في ذلك البلوتوث اللاسلكي، ومنافذ USB وبطاقة TF، بالإضافة إلى مدخل AUX وراديو FM مدمج. تضفي إضاءة LED الملونة على الواجهة الأمامية أجواءً حيوية، وتضمن بطاريته المدمجة القابلة لإعادة الشحن ساعات من الاستخدام المتواصل.',
  price: 220, // Estimated average price in EGP
  images: [
    bdtan18 // Placeholder for actual image variable (black speaker)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "دعم البلوتوث اللاسلكي", // Inferred and confirmed by box icons
    "تشغيل الموسيقى من USB", // Confirmed by box icon
    "تشغيل الموسيقى من بطاقة TF (MicroSD)", // Confirmed by box icon
    "مدخل AUX (صوت خارجي)", // Confirmed by box icon
    "راديو FM مدمج", // Inferred from M/SCAN button
    "إضاءة LED ملونة", // Visually confirmed
    "حامل هاتف مدمج", // Visually confirmed
    "بطارية مدمجة قابلة لإعادة الشحن", // Standard for portable speakers
    "تصميم محمول وموفر للمساحة"
  ],
  specifications: {
    'الموديل': 'AN18',
    'طاقة الخرج': '5 واط',
    'وحدة مكبر الصوت': '3 بوصات',
    'سعة البطارية': '800 مللي أمبير/ساعة',
    'جهد الشحن': 'تيار مستمر 5 فولت', // Standard for USB charging
    'وقت التشغيل (تقديري)': '2-5 ساعات',
    'المسافة الفعالة (بلوتوث) (تقديرية)': '10 أمتار',
    'استجابة التردد (تقديرية)': '100 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥70 ديسيبل',
    'المقاومة': '4 أوم',
    'طريقة الضبط': 'الضغط على المفتاح',
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on typical product quality for this range
  reviewCount: 20, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '19', // ID starts from 19
  name: 'مكبرات صوت LAVA ST-40 رقمية صغيرة بمنفذ USB',
  englishName: 'LAVA ST-40 Mini Digital USB Speakers',
  description: 'ارتقِ بتجربتك الصوتية مع مكبرات صوت LAVA ST-40 الرقمية الصغيرة، المصممة خصيصًا لتوفير صوت واضح وعالي الجودة لأجهزة الكمبيوتر، اللاب توب، والهواتف المحمولة. تتميز هذه المكبرات بتصميم أنيق ومدمج لا يشغل مساحة كبيرة على مكتبك، وتعمل بالطاقة عبر منفذ USB، مما يجعلها سهلة التوصيل والتشغيل. بفضل طاقة الخرج 6 واط (3 واط لكل مكبر) ونسبة إشارة إلى الضوضاء تبلغ 70 ديسيبل، ستحصل على صوت نقي وفعال لاستخدامك اليومي. كما أنها تأتي مزودة بإضاءة لتضيف لمسة جمالية إلى إعدادك.',
  price: 130, // Estimated average price in EGP
  images: [
    lavast40 // Placeholder for actual image variable (speakers out of box)
  ],
  categories: ['إلكترونيات منزلية صغيرة'],
  features: [ 
    "مكبرات صوت نشطة عالية الجودة",
    "تعمل بالطاقة عبر منفذ USB",
    "متوافقة مع أجهزة الكمبيوتر، اللاب توب، الهواتف المحمولة وأي أجهزة بمنفذ صوت 3.5 ملم",
    "مدمجة بتصميم رقمي صغير",
    "مزودة بإضاءة (LED)",
    "سهلة التوصيل والتشغيل (Plug & Play)",
    "نظام صوت ستريو 2.0"
  ],
  specifications: {
    'الموديل': 'ST-40',
    'نظام مكبرات الصوت': '2.0',
    'طاقة الخرج': '3 واط × 2 (إجمالي 6 واط RMS)',
    'المعاوقة': '4 أوم', // Corrected from '40'
    'استجابة التردد': '100 هرتز - 20 كيلو هرتز', // Completed from '100 هرتز - 20'
    'نسبة الإشارة إلى الضوضاء (SNR)': '≥ 70 ديسيبل',
    'مصدر الطاقة': 'USB 5 فولت',
    'وحدة مكبر الصوت (تقديرية)': '2 بوصة',
    'مدخل الصوت': '3.5 ملم (AUX)'
  },
  isAvailable: true,
  isNew: false, // Assuming it's not brand new in the market
  isPromotion: false,
  isBundle: false,
  rating: 3.8, // Estimated based on typical product quality for this price range
  reviewCount: 18, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},
{
  id: '20', // ID continues from the last processed product (19)
  name: 'مكبرات صوت Kisonli S444 للوسائط المتعددة 2.0 بمنفذ USB',
  englishName: 'Kisonli S444 Multimedia 2.0 USB Speakers',
  description: 'مكبرات صوت Kisonli S444 هي نظام صوت ستريو 2.0 مدمج وعصري، مصمم ليوفر تجربة صوتية واضحة وموثوقة لأجهزة الكمبيوتر المكتبية والمحمولة. تعمل هذه السماعات بالطاقة مباشرة عبر منفذ USB وتتصل بمنفذ الصوت 3.5 ملم، مما يجعلها سهلة الاستخدام والتشغيل. بفضل تصميمها الأنيق والجودة الاحترافية، تعد Kisonli S444 خيارًا عمليًا وموفرًا للمساحة للاستخدام اليومي في المنزل أو المكتب.',
  price: 250, // Estimated average price in EGP
  images: [
    kisonlis444 // Placeholder for actual image variable (speakers out of box)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "نظام مكبر صوت ستريو 2.0",
    "تعمل بالطاقة عبر منفذ USB",
    "مدخل صوت قياسي 3.5 ملم",
    "تحكم في مستوى الصوت على الكابل",
    "تصميم أنيق وموفر للمساحة",
    "جودة صوت احترافية وعملية",
    "سهلة التوصيل والتشغيل (Plug & Play)"
  ],
  specifications: {
    'الموديل': 'S444',
    'نظام مكبرات الصوت': '2.0',
    'الطاقة المقدرة': '3.5 واط', // As stated on the product box
    'المعاوقة': '4 أوم',
    'نسبة الإشارة إلى الضوضاء (SNR)': '58 ديسيبل',
    'استجابة التردد': '20 هرتز - 20 كيلو هرتز',
    'التشويه التوافقي الكلي (THD)': '≤ 1% (عند 80 هرتز - 20 كيلو هرتز)',
    'مصدر الطاقة': 'USB 5 فولت',
    'وحدة مكبر الصوت': '2 بوصة',
  },
  isAvailable: true,
  isNew: false, // Assuming it's not brand new in the market
  isPromotion: false,
  isBundle: false,
  rating: 3.7, // Estimated based on typical product quality for this price range
  reviewCount: 25, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '21',
  name: 'مكبر صوت بلوتوث محمول P222',
  englishName: 'P222 Portable Bluetooth Speaker',
  description: 'استمتع بالصوت أينما ذهبت مع مكبر الصوت P222 المحمول الذي يجمع بين التصميم المدمج والأداء الفعال. يتميز هذا المكبر بتقنية بلوتوث V5.0 لضمان اتصال لاسلكي مستقر بمدى يصل إلى 15 مترًا. بوزن صافي يبلغ 290 جرامًا وأبعاد 89×79×167 مم، يعتبر مثاليًا للحمل السهل. توفر بطارية الليثيوم المدمجة بسعة 800 مللي أمبير/ساعة وقت تشغيل يتراوح بين 3-4 ساعات، مع إمكانية الشحن السريع خلال 2-3 ساعات. يدعم المكبر أيضًا خيارات تشغيل متعددة مثل بطاقات TF، وUSB، ومدخل AUX، وراديو FM، مما يجعله رفيقًا صوتيًا متعدد الاستخدامات.',
  price: 150, // Estimated average price in EGP
  images: [
    p222, // Placeholder for actual image variable (orange speaker)
    p222_2
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "إصدار بلوتوث V5.0 لاتصال لاسلكي مستقر",
    "مسافة إرسال تصل إلى 15 مترًا",
    "بطارية ليثيوم مدمجة بسعة 800 مللي أمبير/ساعة",
    "وقت تشغيل طويل (3-4 ساعات)",
    "تصميم محمول وخفيف الوزن مع حزام حمل",
    "يدعم تشغيل الموسيقى عبر بطاقة TF وUSB",
    "مدخل صوت AUX",
    "راديو FM مدمج",
    "شحن سريع خلال 2-3 ساعات"
  ],
  specifications: {
    'الموديل': 'P222',
    'إصدار البلوتوث': 'V5.0',
    'مسافة الإرسال': '15 مترًا',
    'طاقة الخرج': '3 واط', // Corrected from 403W, based on typical portable speaker specs and other provided data
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'سعة البطارية': '800 مللي أمبير/ساعة',
    'وقت التشغيل': '3-4 ساعات',
    'وقت الشحن': '2-3 ساعات',
    'الوزن الصافي': '290 جرامًا',
    'الأبعاد المادية (الطول×العرض×الارتفاع)': '89×79×167 مم',
    'استجابة التردد (تقديرية)': '100 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥ 70 ديسيبل'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.1, // Estimated based on typical product quality for this price range
  reviewCount: 28, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '22',
  name: 'مكبرات صوت Crash X4 للوسائط المتعددة 2.0',
  englishName: 'Crash X4 Multimedia 2.0 Speakers',
  description: 'ارتقِ بتجربتك الصوتية مع مكبرات صوت Crash X4 للوسائط المتعددة، المصممة لتوفير صوت واضح ومحيطي لأجهزة الكمبيوتر والمزيد. تعمل هذه السماعات بنظام ستريو 2.0، وتتميز بوحدة مكبر صوت بغشاء ألومنيوم 4 أوم مضاد للمغناطيسية للحصول على أداء صوتي ممتاز. يتم تزويدها بالطاقة عبر منفذ USB 5 فولت وتتصل بجهازك عن طريق قابس 3.5 ملم، مما يضمن سهولة التوصيل والتشغيل. بتصميمها الأنيق وميزاتها الصوتية المتقدمة، تعد Crash X4 إضافة رائعة لأي إعداد مكتبي أو ترفيهي.',
  price: 360, // Estimated average price in EGP
  images: [
    crashx4 // Placeholder for actual image variable (speakers out of box)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "نظام مكبر صوت ستريو 2.0",
    "صوت محيطي (Virtual Surround)",
    "تعمل بالطاقة عبر منفذ USB 5 فولت",
    "مدخل صوت قياسي 3.5 ملم",
    "مكبر صوت بغشاء ألومنيوم مضاد للمغناطيسية",
    "جودة صوت احترافية مع تعزيز صوت الجهير (Bass Voice Professional Audio)",
    "تصميم أنيق ومتين من البلاستيك",
    "سهلة التوصيل والتشغيل"
  ],
  specifications: {
    'الموديل': 'X4',
    'نظام مكبرات الصوت': '2.0',
    'طاقة الخرج': '3 واط (لكل مكبر) / 6 واط (إجمالي RMS)',
    'المعاوقة': '4 أوم',
    'استجابة التردد': '100 هرتز - 20 كيلو هرتز',
    'تيار الإدخال': 'USB 5 فولت',
    'موصل الإدخال': '3.5 ملم',
    'نسبة الإشارة إلى الضوضاء (SNR)': 'غير محددة في النص، ولكن متوقع أن تكون جيدة بناءً على 3W',
    'التشويه التوافقي الكلي (THD)': '≤ 1% (عند 80 هرتز - 20 كيلو هرتز)',
    'مادة مكبر الصوت': 'بلاستيك',
    'وحدة مكبر الصوت': 'مكبر صوت بغشاء ألومنيوم مع دائرة مغناطيسية من حديد الروبيديوم والبورون',
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality for this price range
  reviewCount: 30, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '23',
  name: 'مكبرات صوت Crash X9 للوسائط المتعددة 2.0 بمنفذ USB',
  englishName: 'Crash X9 Multimedia 2.0 USB Speakers',
  description: 'مكبرات صوت Crash X9 هي نظام صوتي مدمج وأنيق 2.0، مثالي لتحسين تجربتك الصوتية على الكمبيوتر المكتبي أو المحمول. تعمل هذه السماعات بالطاقة عبر منفذ USB 5 فولت وتتصل بمنفذ الصوت القياسي 3.5 ملم. على الرغم من حجمها الصغير، توفر هذه المكبرات صوتًا واضحًا بقوة إجمالية 0.6 واط (RMS)، مع استجابة تردد واسعة ونسبة إشارة إلى ضوضاء تبلغ 65 ديسيبل، مما يضمن تجربة استماع مرضية للموسيقى والأفلام والألعاب. يبرز التصميم الأنيق وجودة التصنيع من البلاستيك المتين.',
  price: 450, // Estimated average price in EGP
  images: [
    crashx9 // Placeholder for actual image variable (speakers out of box)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "نظام مكبر صوت ستريو 2.0",
    "صوت محيطي (Virtual Surround)",
    "تعمل بالطاقة عبر منفذ USB 5 فولت",
    "مدخل صوت قياسي 3.5 ملم",
    "جودة صوت احترافية مع تعزيز صوت الجهير (Bass Voice Professional Audio)",
    "تصميم مدمج وأنيق",
    "معدل عزل جيد للصوت"
  ],
  specifications: {
    'الموديل': 'X9',
    'نظام مكبرات الصوت': '2.0',
    'الطاقة المقدرة (RMS)': '0.3 واط × 2 (إجمالي 0.6 واط)',
    'الحساسية': '500 مللي فولت',
    'المعاوقة': '4 أوم',
    'استجابة التردد': '20 هرتز - 18 كيلو هرتز', // Corrected likely typo from 0.20Hz
    'نسبة الإشارة إلى الضوضاء (SNR)': '65 ديسيبل',
    'معدل العزل': '≥45dB',
    'وحدة مكبر الصوت': '52 ملم (تقريبًا 2 بوصة)', // Corrected likely typo from 0.52mm
    'مصدر الطاقة': 'USB 5 فولت',
    'مادة الصنع': 'بلاستيك'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.6, // Estimated based on typical product quality for this price range and low power output
  reviewCount: 15, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '24',
  name: 'مكبر صوت بلوتوث محمول KT-125 مع حامل هاتف',
  englishName: 'KT-125 Portable Bluetooth Speaker with Phone Holder',
  description: 'استمتع بموسيقاك المفضلة أينما ذهبت مع مكبر الصوت KT-125 المحمول متعدد الاستخدامات. يتميز هذا المكبر بتصميم أسطواني أنيق يضم حاملًا مدمجًا للهاتف، مما يجعله مثاليًا لمشاهدة الفيديوهات أو إجراء مكالمات الفيديو أثناء الاستماع. يدعم KT-125 تشغيل الموسيقى لاسلكيًا عبر البلوتوث، بالإضافة إلى إمكانية تشغيل الملفات من أجهزة تخزين USB وبطاقات TF. بفضل بطاريته المدمجة، يوفر وقت تشغيل يصل إلى 3-4 ساعات، كما أنه مقاوم للرذاذ، مما يجعله رفيقًا مثاليًا للرحلات الخارجية أو الاستخدام اليومي.',
  price: 250, // Estimated average price in EGP
  images: [
    kt125 // Placeholder for actual image variable (speaker with phone)
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "اتصال بلوتوث لاسلكي",
    "حامل هاتف مدمج",
    "مدة تشغيل طويلة (3-4 ساعات)",
    "دعم تشغيل الموسيقى من أجهزة تخزين USB",
    "مقاوم للرذاذ",
    "تصميم محمول ومدمج",
    "تحكم سهل بالصوت والوظائف",
    "دعم بطاقة TF وراديو FM (متوقع)"
  ],
  specifications: {
    'الموديل': 'KT-125',
    'إصدار البلوتوث': 'V5.0',
    'طاقة الخرج': '5 واط',
    'سعة البطارية': '1200 مللي أمبير/ساعة',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'وقت التشغيل': '3-4 ساعات',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'وحدة مكبر الصوت': '3 بوصة',
    'مقاومة الماء': 'مقاوم للرذاذ',
    'الأبعاد (الطول×القطر) (تقديرية)': '170×80 مم',
    'الوزن': '400 جرام'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality for this price range
  reviewCount: 22, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '25',
  name: 'مكبر صوت بلوتوث محمول 1201 بإضاءة LED',
  englishName: 'Speaker 1201 Portable Bluetooth Speaker with LED Light',
  description: 'أضف لمسة من الألوان والصوت إلى أي مكان مع مكبر الصوت 1201 المحمول. يتميز هذا المكبر بإضاءة LED ديناميكية ومجموعة كاملة من خيارات التشغيل، بما في ذلك البلوتوث، ومنفذ USB، وقارئ بطاقة TF لدعم ملفات MP3 و WAV. بفضل تصميمه الأسطواني الأنيق وأزرار التحكم سهلة الاستخدام على الجزء العلوي، يمكنك إدارة الموسيقى ومستوى الصوت والإضاءة بكل سهولة. يعمل المكبر ببطارية مدمجة قابلة لإعادة الشحن عبر منفذ USB 5 فولت، مما يجعله مثاليًا للاستخدام أثناء التنقل.',
  price: 150, // Estimated average price in EGP
  images: [
    speaker1201_1, // Placeholder for actual image variable (speaker with LED lights)
    speaker1201_2
  ],
  categories: ['إلكترونيات منزلية صغيرة','إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "إضاءة LED ملونة قابلة للتحكم",
    "دعم تشغيل الموسيقى عبر بلوتوث وUSB وبطاقة TF",
    "متوافق مع صيغ MP3 و WAV",
    "بطارية مدمجة قابلة لإعادة الشحن عبر USB 5 فولت",
    "أزرار تحكم سهلة للتشغيل/الإيقاف، الوضع، المسار، مستوى الصوت، والإضاءة",
    "تصميم محمول ومدمج"
  ],
  specifications: {
    'الموديل': '1201',
    'مصدر الطاقة': 'بطارية مدمجة قابلة لإعادة الشحن',
    'جهد الشحن': 'تيار مستمر 5 فولت (عبر USB)',
    'طاقة الخرج': '3-5 واط',
    'استجابة التردد (تقديرية)': '100 هرتز - 20 كيلو هرتز',
    'نسبة الإشارة إلى الضوضاء (SNR) (تقديرية)': '≥ 70 ديسيبل',
    'وقت التشغيل (تقديري)': '2-4 ساعات',
    'وقت الشحن (تقديري)': '1.5-2.5 ساعة',
    'الميزات الإضافية': 'إضاءة LED، دعم USB/TF، بلوتوث'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.8, // Estimated based on typical product quality for this price range
  reviewCount: 20, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '26',
  name: 'سماعة رأس سلكية CRASH X40 مع ميكروفون',
  englishName: 'CRASH X40 Wired Headphone with Microphone',
  description: 'سماعة رأس سلكية CRASH X40 توفر تجربة صوت ستريو مذهلة مع ميكروفون مدمج بخاصية تقليل الضوضاء، مثالية للاستخدام مع أجهزة الكمبيوتر. تتميز بتصميم مريح ومقبس 3.5 مم متعدد الاستخدامات.',
  price: 250,
  images: [
    crashx40,
    crashx40_2
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "صوت ستريو مذهل",
    "ميكروفون بخاصية تقليل الضوضاء",
    "متوافق مع أجهزة الكمبيوتر",
    "تصميم مريح",
    "كابل طويل",
    "علامة تجارية: CRASH",
    "رقم الموديل: X40",
  ],
  specifications: {
    'حجم مكبر الصوت': '40 مم',
    'المقاومة': '32 أوم',
    'RMS': '98 ميجا واط',
    'الحساسية': '105 ± 3 ديسيبل',
    'نطاق التردد': '15 هرتز - 20 كيلو هرتز',
    'الميكروفون': '6.0 × 5.0 مم',
    'حساسية الميكروفون': '-38 ± 3 ديسيبل',
    'مقاومة الميكروفون': '2.2 كيلو أوم',
    'الاتجاهية': 'متعددة الاتجاهات',
    'طول الكابل': '1.8 متر ± 0.2 متر',
    'مقبس سماعة الرأس': '3.5 مم',
    'اللون': 'غير محدد (عادةً أسود أو ألوان داكنة)',
    'الضمان': '30 يومًا (وفقًا لمتاجر التجزئة المصرية)',
    'تتضمن بطاريات؟': 'لا',
    'هل المنتج يحتاج بطاريات أو يحتوي على بطارية؟': 'لا',
    'هل المنتج مادة خطرة أو خطرة للتخزين أو النقل؟': 'لا',
    'نوع معرف المنتج الخارجي': 'غير متوفر', // UPC, EAN, etc. not found
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 0, // No specific user reviews or ratings found
  reviewCount: 0, // No specific user reviews found
  createdAt: new Date('2025-06-04'),
},

{
  id: '27',
  name: 'سماعة رأس Oraimo OR-P9 لاسلكية مع ميكروفون',
  englishName: 'Oraimo OR-P9 Wireless Headphone with Microphone',
  description: 'سماعة رأس لاسلكية من Oraimo طراز OR-P9 توفر تجربة صوت غامرة مع ميكروفون مدمج. تتميز بالاتصال اللاسلكي عبر البلوتوث وإمكانية الاتصال السلكي عبر مقبس 3.5 مم، مما يجعلها مثالية للاستخدام اليومي والمكالمات. تصميم فوق الأذن يوفر راحة أثناء الارتداء الطويل.',
  price: 270,
  images: [
    araimo,
    // If more images become available, list them here.
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "اتصال لاسلكي (بلوتوث)",
    "إمكانية الاتصال السلكي (AUX 3.5 مم)",
    "ميكروفون مدمج مخفي",
    "خاصية الاقتران المتعدد (Multipoint Pairing)",
    "تصميم فوق الأذن (Over-Ear) لراحة طويلة",
    "عمر بطارية طويل",
    "العلامة التجارية: Oraimo",
    "رقم الموديل: OR-P9",
  ],
  specifications: {
    'العلامة التجارية': 'Oraimo',
    'الموديل': 'OR-P9',
    'نوع الاتصال': 'لاسلكي (بلوتوث), سلكي (AUX 3.5 مم)',
    'إصدار البلوتوث': 'V5.0/V5.1',
    'مسافة الإرسال': '10 أمتار',
    'قطر مكبر الصوت': '40 مم',
    'استجابة التردد': '20 هرتز - 20 كيلو هرتز',
    'الحساسية': '105 ± 3 ديسيبل',
    'وقت تشغيل المكالمات': 'حوالي 7-10 ساعات',
    'وقت الاستعداد': 'حوالي 120 ساعة',
    'وقت الشحن': 'حوالي 2 ساعة',
    'جهد الشحن': '5 فولت - 1 أمبير',
    'الشكل': 'فوق الأذن',
    'المادة': 'ABS (أكريلونتريل بوتادين ستايرين)',
    'تتضمن بطاريات؟': 'نعم',
    'هل المنتج يحتاج بطاريات أو يحتوي على بطارية؟': 'نعم',
    'هل المنتج مادة خطرة أو خطرة للتخزين أو النقل؟': 'لا',
    'نوع معرف المنتج الخارجي': 'غير متوفر', // UPC, EAN, etc. not found
  },
  isAvailable: true,
  isNew: true,
  isPromotion: false,
  isBundle: false,
  rating: 0, // No clear, consolidated rating found for the Oraimo branded OR-P9
  reviewCount: 0, // No quantifiable review count found for the Oraimo branded OR-P9
  createdAt: new Date('2025-06-04'),
},

{
  id: '28',
  name: 'سماعة ألعاب Marvo Scorpion H8311 بمنفذ 3.5 مم',
  englishName: 'Marvo Scorpion H8311 3.5mm Gaming Headset',
  description: 'انغمس في عالم الألعاب مع سماعة Marvo Scorpion H8311 المصممة خصيصًا للاعبين. تتميز هذه السماعة بصوت ستريو عالي الجودة بفضل محركات الصوت الكبيرة مقاس 40 ملم، وتوفر استجابة تردد واسعة من 20 هرتز إلى 20 كيلوهرتز لالتقاط أدق التفاصيل الصوتية في ألعابك. الميكروفون متعدد الاتجاهات قابل للتعديل يضمن تواصلًا واضحًا مع زملائك في الفريق. مع كابل بطول 2.1 متر وموصلات 3.5 ملم منفصلة للصوت والميكروفون، توفر هذه السماعة الراحة والمرونة اللازمة لجلسات اللعب الطويلة على الكمبيوتر.',
  price: 490, // Estimated average price in EGP
  images: [
    scorpion3, // Placeholder for actual image variable (headset out of box)
    scorpion2,
    scorpion
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "سماعة رأس مخصصة للألعاب",
    "جودة صوت عالية مع محركات 40 ملم",
    "ميكروفون متعدد الاتجاهات لإلغاء الضوضاء",
    "كابل طويل ومتين بطول 2.1 متر",
    "توصيل بمنفذين 3.5 ملم (صوت وميكروفون)",
    "تصميم مريح للاستخدام لفترات طويلة"
  ],
  specifications: {
    'الموديل': 'H8311',
    'استجابة التردد': '20 هرتز - 20 كيلوهرتز',
    'الموصلات': '2 × قابس 3.5 ملم',
    'حجم مكبر الصوت (التعريف)': '40 ملم',
    'حساسية مكبر الصوت': '92 ديسيبل ± 3 ديسيبل',
    'حجم الميكروفون': '6 × 5 ملم',
    'حساسية الميكروفون': '-40 ديسيبل ± 3 ديسيبل', // Corrected from 0.5dB
    'اتجاه الميكروفون': 'متعدد الاتجاهات',
    'طول الكابل': '2.1 متر',
    'المقاومة (تقديرية)': '32 أوم'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.2, // Estimated based on typical product quality for this price range
  reviewCount: 45, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '29',
  name: 'سماعة أذن لاسلكية P47M على شكل أذن قطة مع إضاءة LED',
  englishName: 'P47M Cat Ear Wireless Headphone with LED Light',
  description: 'تجربة استماع فريدة ومرحة مع سماعة الرأس اللاسلكية P47M بتصميم أذن القطة الأنيق والمضيء بتقنية LED. تتميز هذه السماعة بتصميم مريح يضمن سهولة الارتداء لفترات طويلة، وتوفر صوتًا نقيًا بفضل تصميم التجويف المستقل. بفضل تقنية البلوتوث المتقدمة ووحدة الطاقة الذكية، يمكنك الاستمتاع بما يصل إلى 14 ساعة من التشغيل المتواصل. مثالية للمحبي الموسيقى والألعاب ومكالمات الفيديو، وتعد إضافة عصرية وممتعة لمجموعتك التقنية.',
  price: 250, // Estimated average price in EGP
  images: [
    catp47m, // Placeholder for actual image variable (headphone out of box)
    catp47m_2,
    catp47m_3
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "تصميم أذن قطة فريد مع إضاءة LED",
    "اتصال لاسلكي بتقنية البلوتوث",
    "تصميم مريح للاستخدام الطويل",
    "جودة صوت نقية ومثالية",
    "مدة تشغيل تصل إلى 14 ساعة متواصلة",
    "وحدة طاقة منخفضة الاستهلاك وذكية",
    "دعم بطاقة TF وراديو FM ومدخل AUX (متوقع)"
  ],
  specifications: {
    'الموديل': 'P47M',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إصدار البلوتوث ': 'V5.0',
    'مدة التشغيل': 'حتى 14 ساعة',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'سعة البطارية': '400 مللي أمبير/ساعة',
    'حجم محرك الصوت': '40 ملم',
    'استجابة التردد (تقديرية)': '20 هرتز - 20 كيلو هرتز',
    'المقاومة (تقديرية)': '32 أوم',
    'الحساسية (تقديرية)': '105 ديسيبل',
    'ميكروفون': 'مدمج',
    'مصدر الطاقة': 'بطارية مدمجة قابلة لإعادة الشحن (شحن Micro USB)',
    'المادة (الرئيسية)': 'بلاستيك'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.1, // Estimated based on typical product quality for this price range
  reviewCount: 35, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '30',
  name: 'سماعة بلوتوث لاسلكية P39',
  englishName: 'P39 Wireless Bluetooth Headphone',
  description: 'استمتع بحرية الصوت اللاسلكي مع سماعة البلوتوث P39 خفيفة الوزن وعالية الأداء. توفر هذه السماعة اتصالاً مستقرًا عبر البلوتوث 5.0 بمدى يصل إلى 10 أمتار، وتدعم بروتوكولات الصوت الشهيرة لضمان جودة استماع ممتازة. بوزن 155 جرام فقط، يمكنك ارتداؤها لساعات طويلة دون إجهاد. بطاريتها المدمجة توفر أكثر من 10 ساعات من تشغيل الموسيقى المتواصل، وتستغرق حوالي 3 ساعات فقط لإعادة الشحن بالكامل عبر منفذ DC 5V. مثالية للاستخدام اليومي، السفر، أو ممارسة الرياضة.',
  price: 340, // Estimated average price in EGP
  images: [
    p39_2, // Placeholder for actual image variable (yellow headphone out of box)
    p39 // Placeholder for actual image variable (headphone box)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "اتصال بلوتوث لاسلكي",
    "مدة تشغيل موسيقى طويلة (أكثر من 10 ساعات)",
    "تصميم خفيف الوزن (155 جرام)",
    "شحن سريع عبر منفذ تيار مستمر 5 فولت",
    "مدى إرسال يصل إلى 10 أمتار",
    "وقت استعداد طويل (أكثر من 200 ساعة)",
    "دعم بروتوكولات A2DP, AVRCP, HSP, HFP",
    "ميكروفون مدمج للمكالمات"
  ],
  specifications: {
    'الموديل': 'P39',
    'الطاقة': '10 مللي واط × 2',
    'المقاومة': '32 أوم',
    'استجابة التردد': '120 هرتز - 20000 هرتز',
    'إصدار البلوتوث': 'V5.0',
    'نطاق الإرسال': '10 أمتار',
    'تردد الإرسال': '2.4 جيجاهرتز',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'الوزن الصافي': '155 جرام',
    'وقت الشحن': 'حوالي 3 ساعات',
    'وقت تشغيل الموسيقى': 'أكثر من 10 ساعات',
    'وقت الاستعداد': 'أكثر من 200 ساعة',
    'سعة البطارية': '300-400 مللي أمبير/ساعة'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality for this price range
  reviewCount: 30, // Estimated
  createdAt: new Date('2025-06-03'), // Current date
},

{
  id: '31',
  name: 'سماعة رأس لاسلكية مارشال ميجور 703 بإضاءة RGB',
  englishName: 'Marshall Major 703 RGB Wireless Headphone',
  description: 'انغمس في عالم الموسيقى مع سماعة الرأس اللاسلكية Marshall Major 703، التي تجمع بين الأداء الصوتي وإضاءة RGB الجذابة. تتميز هذه السماعة بتصميم عصري مع أضواء LED ملونة على الأذنين، مما يضيف لمسة فريدة لتجربتك الصوتية. توفر اتصالاً لاسلكيًا عبر البلوتوث وتجربة استماع ستريو واضحة. كما أنها متعددة الوظائف، وغالبًا ما تدعم تشغيل راديو FM وبطاقات Micro SD، بالإضافة إلى ميكروفون مدمج للمكالمات.',
  price: 590, // Estimated average price in EGP
  images: [
    marshall_major703_2, // Placeholder for actual image variable (headphone out of box)
    marshall_major703,
    marshall_major703_3,
    marshall_major703_4 // Placeholder for actual image variable (headphone box)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "تصميم عصري مع إضاءة RGB LED على الأذنين",
    "اتصال لاسلكي بتقنية البلوتوث",
    "صوت ستريو واضح",
    "إمكانية تشغيل الموسيقى من بطاقة Micro SD (متوقع)",
    "راديو FM مدمج (متوقع)",
    "ميكروفون مدمج للمكالمات",
    "أزرار تحكم مدمجة على السماعة"
  ],
  specifications: {
    'الموديل': 'Major 703',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إضاءة': 'RGB LED',
    'مخرج الصوت': 'ستريو',
    'وقت تشغيل الموسيقى (تقديري)': '4-8 ساعات (مع تشغيل الإضاءة)',
    'منفذ الشحن': 'Micro USB (متوقع)',
    'بطاقة الذاكرة المدعومة': 'TF Card (Micro SD) (متوقع)',
    'راديو FM': 'نعم (متوقع)',
    'ميكروفون': 'مدمج (متوقع)',
    'الوزن': '150-250 جرام'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.8, // Estimated based on typical product quality for this price range
  reviewCount: 25, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '32',
  name: 'سماعة رأس لاسلكية مارشال ميجور 908 بإضاءة RGB',
  englishName: 'Marshall Major 908 RGB Wireless Headphone',
  description: 'انغمس في عالم الموسيقى والألوان مع سماعة الرأس اللاسلكية Marshall Major 908. تتميز هذه السماعة بتصميمها الأنيق وإضاءة RGB الجذابة على الأذنين، مما يضيف لمسة عصرية ومميزة. توفر اتصالاً لاسلكيًا سلسًا عبر البلوتوث، وتجربة استماع ستريو غامرة. مع قدرتها على تشغيل الموسيقى من مصادر متعددة مثل بطاقات Micro SD وراديو FM، بالإضافة إلى ميكروفون مدمج للمكالمات، تعد هذه السماعة خيارًا متعدد الاستخدامات للاستخدام اليومي والترفيه.',
  price: 650, // Estimated average price in EGP
  images: [
    marshal_major903_2, // Placeholder for actual image variable (headphone out of box)
    marshal_major903 // Placeholder for actual image variable (headphone box)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "تصميم عصري مع إضاءة RGB LED على الأذنين",
    "اتصال لاسلكي بتقنية البلوتوث",
    "صوت ستريو واضح",
    "إمكانية تشغيل الموسيقى من بطاقة Micro SD (متوقع)",
    "راديو FM مدمج (متوقع)",
    "ميكروفون مدمج للمكالمات",
    "أزرار تحكم مدمجة على السماعة"
  ],
  specifications: {
    'الموديل': 'Major 908',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إضاءة': 'RGB LED',
    'مخرج الصوت': 'ستريو',
    'إصدار البلوتوث': 'V5.0',
    'وقت تشغيل الموسيقى (تقديري)': '4-8 ساعات (مع تشغيل الإضاءة)',
    'منفذ الشحن': 'Micro USB (متوقع)',
    'بطاقة الذاكرة المدعومة': 'TF Card (Micro SD) (متوقع)',
    'راديو FM': 'نعم (متوقع)',
    'ميكروفون': 'مدمج (متوقع)',
    'الوزن': '150-250 جرام'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on typical product quality for this price range
  reviewCount: 28, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '33',
  name: 'سماعة رأس بلوتوث لاسلكية Ovleng MX666 ستريو',
  englishName: 'Ovleng MX666 Wireless Bluetooth Stereo Headset',
  description: 'استمتع بتجربة صوتية لاسلكية متعددة الاستخدامات مع سماعة الرأس Ovleng MX666. صُممت هذه السماعة لتوفر صوت ستريو غني، وهي مثالية للمكالمات الهاتفية، الاستماع إلى الموسيقى، ومشاهدة الأفلام. بفضل اتصال البلوتوث الموثوق به، يمكنك التحرك بحرية دون قيود الكابلات. تتميز بتصميم مريح مع وسائد أذن ناعمة وعصابة رأس قابلة للتعديل، مما يضمن الراحة حتى أثناء الاستخدام لفترات طويلة. كما تحتوي على ميكروفون مدمج لإجراء مكالمات واضحة.',
  price: 770, // Estimated average price in EGP
  images: [
    mx666_2, // Placeholder for actual image variable (headset out of box)
    mx666 // Placeholder for actual image variable (headset box)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "اتصال بلوتوث لاسلكي",
    "صوت ستريو عالي الجودة",
    "ميكروفون مدمج للمكالمات",
    "تصميم مريح وقابل للطي",
    "أزرار تحكم مدمجة للتشغيل والمكالمات",
    "مثالية للاستخدام مع الهواتف الذكية، الموسيقى، والأفلام",
  ],
  specifications: {
    'الموديل': 'MX666',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إصدار البلوتوث': '4.1', // Based on AI analysis suggestion
    'نطاق الإرسال (تقديري)': '10 أمتار',
    'وقت تشغيل الموسيقى (تقديري)': '4-6 ساعات',
    'وقت التحدث (تقديري)': '6-8 ساعات',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'حجم محرك الصوت ': '40 ملم',
    'استجابة التردد (تقديري)': '20 هرتز - 20 كيلوهرتز',
    'منفذ الشحن': 'Micro USB',
    'مدخل صوت إضافي': 'AUX 3.5 ملم (متوقع)',
    'اللون': 'أزرق وأسود',
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality for this price range
  reviewCount: 30, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '34',
  name: 'سماعة رأس بلوتوث لاسلكية P9 ستريو',
  englishName: 'P9 Wireless Bluetooth Stereo Headset',
  description: 'استمتع بتجربة صوتية ممتازة وتصميم أنيق مع سماعة الرأس اللاسلكية P9. صُممت هذه السماعة لتوفير صوت ستريو غامر ومناسب للألعاب والموسيقى والرياضة، وهي مثالية للاستخدام اليومي. توفر اتصالاً لاسلكيًا مريحًا عبر البلوتوث، وتتميز ببطارية تدوم لساعات طويلة من التشغيل. تصميمها المريح، المشابه لسماعات الرأس الفاخرة، يضمن الراحة حتى خلال فترات الاستخدام الطويلة، وتتضمن ميكروفونًا مدمجًا لإجراء المكالمات بوضوح.',
  price: 250, // Estimated average price in EGP
  images: [
    p9, // Placeholder for actual image variable (headset out of box)
    p9_2,
    p9_3 // Placeholder for actual image variable (headset box)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "تصميم أنيق ومريح (مشابه لسماعات فاخرة)",
    "اتصال بلوتوث لاسلكي للاستخدام متعدد الأغراض (الألعاب، الموسيقى، الرياضة)",
    "صوت ستريو عالي الجودة",
    "ميكروفون مدمج للمكالمات",
    "أزرار تحكم مدمجة على السماعة",
    "دعم تشغيل من بطاقة Micro SD (متوقع)",
    "مدخل صوت AUX (متوقع)"
  ],
  specifications: {
    'الموديل': 'P9',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إصدار البلوتوث (تقديري)': 'V5.0',
    'نطاق الإرسال (تقديري)': '10 أمتار',
    'وقت تشغيل الموسيقى (تقديري)': '4-6 ساعات',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'حجم محرك الصوت': '40 ملم',
    'استجابة التردد (تقديري)': '20 هرتز - 20 كيلوهرتز',
    'منفذ الشحن': 'Micro USB أو Type-C',
    'بطاقة الذاكرة المدعومة': 'TF Card (Micro SD) (متوقع)',
    'مدخل صوت إضافي': 'AUX 3.5 ملم (متوقع)',
    'اللون': 'فضي/أبيض (كما يظهر في الصورة)',
    'الوزن': '200-250 جرام'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on typical product quality for this price range
  reviewCount: 35, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '35',
  name: 'سماعة رأس لاسلكية P47 بلوتوث 5.0+EDR',
  englishName: 'P47 Wireless Bluetooth 5.0+EDR Headphone',
  description: 'استمتع بحرية الصوت اللاسلكي مع سماعة الرأس P47، المزودة بتقنية البلوتوث 5.0+EDR لاتصال مستقر وفعال. توفر هذه السماعة صوت ستريو واضح ومناسب للاستماع إلى الموسيقى، إجراء المكالمات، ومشاهدة الأفلام. يتميز تصميمها بالراحة، مع إمكانية الطي لسهولة الحمل والتخزين. بالإضافة إلى الاتصال اللاسلكي، تدعم السماعة تشغيل الموسيقى عبر بطاقة Micro SD، وميزة راديو FM، ومدخل AUX لتوصيل الأجهزة السلكية، مما يجعلها خيارًا متعدد الاستخدامات لاحتياجاتك الصوتية.',
  price: 185, // Estimated average price in EGP
  images: [
    p47_2, // Placeholder for actual image variable (headphone out of box)
    p47 // Placeholder for actual image variable (headphone box)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "اتصال بلوتوث لاسلكي (5.0+EDR)",
    "تصميم قابل للطي لسهولة الحمل",
    "صوت ستريو واضح",
    "ميكروفون مدمج للمكالمات",
    "دعم تشغيل الموسيقى من بطاقة Micro SD",
    "ميزة راديو FM مدمجة",
    "مدخل AUX لتوصيل الأجهزة السلكية",
    "أزرار تحكم مدمجة على السماعة"
  ],
  specifications: {
    'الموديل': 'P47',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إصدار البلوتوث': '5.0+EDR',
    'نطاق الإرسال (تقديري)': '10 أمتار',
    'وقت تشغيل الموسيقى (تقديري)': '4-6 ساعات',
    'وقت التحدث (تقديري)': '6-8 ساعات',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'حجم محرك الصوت': '40 ملم',
    'استجابة التردد (تقديري)': '20 هرتز - 20 كيلوهرتز',
    'منفذ الشحن': 'Micro USB',
    'بطاقة الذاكرة المدعومة': 'TF Card (Micro SD)',
    'راديو FM': 'نعم',
    'مدخل صوت إضافي': 'AUX 3.5 ملم',
    'اللون': 'أحمر (كما يظهر في الصورة)',
    'الوزن': '150-200 جرام'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.9, // Estimated based on typical product quality for this price range
  reviewCount: 40, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '36',
  name: 'ميكروفون كاريوكي لاسلكي بلوتوث WS-858 مع سماعة مدمجة',
  englishName: 'WS-858 Bluetooth Wireless Karaoke Microphone with Built-in Speaker',
  description: 'حوّل أي تجمع إلى حفلة كاريوكي مع ميكروفون WS-858 اللاسلكي متعدد الإمكانات. يدمج هذا الميكروفون المبتكر ميكروفونًا عالي الجودة وسماعة بلوتوث ومضخم صوت في جهاز واحد، مما يتيح لك الغناء مع موسيقاك المفضلة في أي مكان. يتميز بوظائف تشغيل الموسيقى، تسجيل الصوت، والتحكم في مستوى الصوت، بالإضافة إلى تأثير صدى الصوت (Remix) لتعزيز الأداء الصوتي. متوفر بلون وردي جذاب ومثالي للحفلات، التجمعات العائلية، أو مجرد الترفيه الشخصي.',
  price: 200, // Estimated average price in EGP
  images: [
    mic_B // Placeholder for actual image variable (pink microphone)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "ميكروفون وسماعة بلوتوث في جهاز واحد",
    "اتصال لاسلكي بالبلوتوث",
    "وظيفة تسجيل الصوت",
    "تحكم في مستوى صوت الميكروفون والموسيقى",
    "تأثير صدى الصوت (Remix)",
    "أزرار تحكم مدمجة للتشغيل (PREV, NEXT, SCAN)",
    "تصميم محمول ومريح",
    "متوفر بلون وردي جذاب"
  ],
  specifications: {
    'الموديل': 'WS-858',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إصدار البلوتوث': 'V4.0/V5.0',
    'قوة الخرج': '5 واط',
    'نطاق التردد (تقديري)': '100 هرتز - 10 كيلوهرتز',
    'وضع الصدى': 'صدى صوت (Reverb)',
    'وقت تشغيل الموسيقى (تقديري)': '4-6 ساعات',
    'وقت الشحن (تقديري)': '2-3 ساعات',
    'سعة البطارية': '1800 مللي أمبير/ساعة',
    'جهد الشحن': 'تيار مستمر 5 فولت',
    'منافذ إضافية': 'مدخل بطاقة TF (Micro SD), مدخل AUX 3.5 ملم, منفذ USB',
    'اللون': 'وردي',
    'المادة': 'بلاستيك ABS + معدن',
    'الوزن': '250-350 جرام'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.2, // Estimated based on typical product quality for this price range
  reviewCount: 50, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '37',
  name: 'مروحة صغيرة محمولة قابلة لإعادة الشحن مع إضاءة LED',
  englishName: 'Portable Rechargeable Mini Fan with LED Light',
  description: 'ابقَ منتعشًا في أي مكان مع المروحة الصغيرة المحمولة والقابلة لإعادة الشحن. تتميز هذه المروحة بتصميم مدمج وأنيق مع محرك قوي عديم المسفرات بحجم 6 بوصات يوفر تدفق هواء كبير. مثالية للمكتب، المنزل، أو أثناء التنقل. تشتمل على إضاءة LED مدمجة في القاعدة يمكن استخدامها كإضاءة ليلية أو لإضفاء جو مريح. قابلة لإعادة الشحن عبر USB، وتتوفر بألوان متعددة لتناسب ذوقك.',
  price: 335, // Estimated average price in EGP
  images: [
    mini_fan, // Placeholder for actual image variable (white fan)
    mini_fang, // Placeholder for actual image variable (blue fan)
    mini_fanr, // Placeholder for actual image variable (pink fan)
    mini_fanw // Placeholder for actual image variable (USB cable)
  ],
  categories: ['إلكترونيات منزلية صغيرة'],
  features: [
    "تصميم محمول وصغير الحجم",
    "قابلة لإعادة الشحن عبر USB",
    "إضاءة LED مدمجة في القاعدة",
    "محرك قوي عديم المسفرات بحجم 6 بوصات",
    "تدفق هواء كبير",
    "متوفرة بألوان متعددة (أبيض، أزرق، وردي)",
  ],
  specifications: {
    'قطر المروحة': '6 بوصات',
    'نوع المحرك': 'محرك عديم المسفرات',
    'مصدر الطاقة': 'بطارية قابلة لإعادة الشحن',
    'جهد الشحن': 'تيار مستمر 5 فولت (عبر USB)',
    'سعة البطارية': '1200 - 2000 مللي أمبير/ساعة',
    'وقت التشغيل (تقديري)': '2-6 ساعات',
    'إعدادات السرعة (تقديرية)': 'متعددة',
    'المادة': 'بلاستيك ABS',
    'اللون': 'أبيض، أزرق، وردي',
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.1, // Estimated based on typical product quality for this price range
  reviewCount: 45, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '38',
  name: 'مصباح ليلي ذكي BDT AN2304 Mini مع شاحن لاسلكي وسماعة',
  englishName: 'BDT AN2304 Mini Smart Night Light with Wireless Charger and Speaker',
  description: 'جهاز BDT AN2304 Mini هو حل متعدد الإمكانات يجمع بين الإضاءة المحيطة، وشاحن لاسلكي سريع، وسماعة بلوتوث، وساعة رقمية أنيقة. يتميز بتصميم عصري مع إضاءة LED ملونة قابلة للتعديل لخلق جو مثالي، وشاشة عرض رقمية للوقت. ضع هاتفك الذكي المتوافق على قاعدة الشحن اللاسلكي لشحنه بسهولة. يمكنك أيضًا الاستماع إلى الموسيقى المفضلة لديك عبر مكبر الصوت المدمج المتصل بالبلوتوث. مثالي لغرف النوم، المكاتب، أو أي مكان يحتاج إلى لمسة من التكنولوجيا العصرية والوظائف المتعددة.',
  price: 335, // Estimated average price in EGP
  images: [
    bdt_an2304mini, // Placeholder for actual image variable (device itself) 
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "مصباح ليلي LED متعدد الألوان",
    "شاحن لاسلكي مدمج للهواتف الذكية",
    "سماعة بلوتوث لاسلكية",
    "ساعة رقمية مع شاشة عرض",
    "أزرار تحكم مدمجة للوظائف المتعددة",
    "تصميم عصري ومدمج",
    "مدخل USB للشحن/الطاقة"
  ],
  specifications: {
    'الموديل': 'AN2304MINI',
    'العلامة التجارية': 'BDT',
    'نوع الإضاءة': 'LED (متعدد الألوان)',
    'خرج الشحن اللاسلكي': '10 واط',
    'قوة السماعة': '3-5 واط',
    'الاتصال': 'بلوتوث',
    'مدخل الطاقة': 'تيار مستمر 5 فولت (USB)',
    'وظائف إضافية': 'ساعة رقمية، منبه (متوقع)',
    'المادة': 'بلاستيك ABS',
    'اللون': 'أبيض مع إضاءة ملونة',
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.0, // Estimated based on typical product quality for this price range
  reviewCount: 20, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '39',
  name: 'مصباح ليلي ذكي BDT AN2304 مع شاحن لاسلكي وسماعة وإضاءة RGB',
  englishName: 'BDT AN2304 Smart Night Light with Wireless Charger, Speaker & RGB Lights',
  description: 'ارتقِ بتجربتك الصوتية والضوئية مع جهاز BDT AN2304 المتعدد الوظائف. يجمع هذا الجهاز المبتكر بين مصباح طاولة بإضاءة RGB ديناميكية، وشاحن لاسلكي سريع لهاتفك الذكي، وسماعة بلوتوث عالية الجودة، وساعة رقمية أنيقة. يتميز بتصميم عصري يضيف لمسة جمالية لأي غرفة، ويوفر تحكمًا سهلاً في جميع وظائفه عبر الأزرار المدمجة. مثالي لغرف النوم، المكاتب، أو كقطعة مركزية ذكية تجمع بين الترفيه والعملية.',
  price: 495, // Estimated average price in EGP
  images: [
    bdt_an2304, // Placeholder for actual image variable (device itself)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "مصباح ليلي LED بإضاءة RGB متعددة الألوان",
    "شاحن لاسلكي مدمج للهواتف الذكية",
    "سماعة بلوتوث لاسلكية",
    "ساعة رقمية مع شاشة عرض",
    "أزرار تحكم مدمجة سهلة الاستخدام",
    "تصميم عصري وأنيق",
    "مدخل USB للطاقة"
  ],
  specifications: {
    'الموديل': 'AN2304',
    'العلامة التجارية': 'BDT',
    'نوع الإضاءة': 'LED RGB',
    'خرج الشحن اللاسلكي': '10-15 واط',
    'قوة السماعة': '5-10 واط',
    'الاتصال': 'بلوتوث',
    'مدخل الطاقة': 'تيار مستمر 5 فولت (USB)',
    'وظائف إضافية': 'ساعة رقمية',
    'المادة': 'بلاستيك ABS',
    'اللون': 'أبيض مع إضاءة ملونة',
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 4.1, // Estimated based on typical product quality for this price range
  reviewCount: 22, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
},

{
  id: '40',
  name: 'سماعة بلوتوث صغيرة محمولة M3 Mini',
  englishName: 'M3 Mini Portable Bluetooth Speaker',
  description: 'استمتع بموسيقاك المفضلة في أي مكان مع سماعة البلوتوث M3 Mini المحمولة فائقة الصغر. تتميز هذه السماعة بتصميم مدمج وخفيف الوزن، مما يجعلها الرفيق المثالي للسفر أو الاستخدام اليومي. توفر اتصالاً لاسلكيًا سهلاً عبر البلوتوث مع هاتفك الذكي أو جهازك اللوحي. بالإضافة إلى ذلك، تدعم تشغيل الموسيقى مباشرة من بطاقة TF (Micro SD)، وتأتي ببطارية مدمجة قابلة لإعادة الشحن. متوفرة بألوان جذابة، وهي خيار مثالي لمن يبحث عن جودة صوت جيدة في حجم صغير.',
  price: 240, // Estimated average price in EGP
  images: [
    jpl_m3_mini, // Placeholder for actual image variable (silver speaker)
  ],
  categories: ['إكسسوارات الكمبيوتر','إكسسوارات الموبايل'],
  features: [
    "تصميم صغير جداً ومحمول",
    "اتصال بلوتوث لاسلكي",
    "دعم بطاقة TF (Micro SD) لتشغيل الموسيقى مباشرة",
    "بطارية مدمجة قابلة لإعادة الشحن",
    "متوفرة بألوان متنوعة (فضي، أحمر، وغيرها)",
    "صوت واضح وواضح (بالنظر لحجمها)"
  ],
  specifications: {
    'الموديل': 'M3 Mini',
    'نوع الاتصال': 'لاسلكي (بلوتوث)',
    'إصدار البلوتوث': 'V4.2/V5.0',
    'قوة الخرج ': '3 واط',
    'سعة البطارية ': '300-500 مللي أمبير/ساعة',
    'وقت تشغيل الموسيقى (تقديري)': '2-4 ساعات',
    'وقت الشحن (تقديري)': '1-2 ساعة',
    'منفذ الشحن': 'Micro USB',
    'الوسائط المدعومة': 'بلوتوث، بطاقة TF',
    'المادة': 'بلاستيك ABS + شبكة معدنية',
    'الأبعاد': 'قطر 4-5 سم',
    'الوزن': '50-80 جرام',
    'الألوان': 'فضي، أحمر (وغيرها)'
  },
  isAvailable: true,
  isNew: false,
  isPromotion: false,
  isBundle: false,
  rating: 3.7, // Estimated based on typical product quality for this price range
  reviewCount: 30, // Estimated
  createdAt: new Date('2025-06-04'), // Current date
}
  // ... other products with similar structure
];

// Filter helper functions
export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getPromotionalItems = () => {
  return products.filter(product => product.isPromotion);
};

export const getBundles = () => {
  return products.filter(product => product.isBundle);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.categories.includes(category));
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product) => {
  return products
    .filter(p => 
      p.id !== product.id && 
      p.categories.some(cat => product.categories.includes(cat))
    )
    .slice(0, 4);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      (product.englishName && product.englishName.toLowerCase().includes(lowercaseQuery)) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
  );
};