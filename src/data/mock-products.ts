export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "دورة تطوير الويب الشاملة",
    description: "تعلم بناء تطبيقات الويب الحديثة من الصفر باستخدام React و Node.js. تشمل الدورة أكثر من 50 ساعة فيديو ومشاريع عملية.",
    price: 299,
    category: "دورات تعليمية",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    features: ["50+ ساعة فيديو", "مشاريع عملية", "شهادة إتمام", "دعم فني مدى الحياة"]
  },
  {
    id: "2",
    title: "قالب لوحة تحكم احترافي",
    description: "قالب React جاهز للاستخدام مع دعم الوضع الداكن، رسوم بيانية تفاعلية، وتصميم متجاوب بالكامل.",
    price: 89,
    category: "قوالب تصميم",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
    features: ["دعم الوضع الداكن", "رسوم بيانية تفاعلية", "تصميم متجاوب", "كود نظيف ومنظم"]
  },
  {
    id: "3",
    title: "كتاب إلكتروني: أساسيات الذكاء الاصطناعي",
    description: "دليل شامل للمبتدئين لفهم مفاهيم الذكاء الاصطناعي وتطبيقاته العملية في الحياة اليومية والأعمال.",
    price: 49,
    category: "كتب إلكترونية",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60",
    features: ["200+ صفحة", "أمثلة عملية", "تحديثات مجانية", "صيغة PDF و EPUB"]
  },
  {
    id: "4",
    title: "حزمة أيقونات UI متكاملة",
    description: "أكثر من 5000 أيقونة متجهة عالية الجودة مناسبة لتطبيقات الويب والموبايل، بصيغ SVG و PNG.",
    price: 39,
    category: "أصول تصميم",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60",
    features: ["5000+ أيقونة", "صيغ SVG و PNG", "ترخيص تجاري", "تحديثات دورية"]
  },
  {
    id: "5",
    title: "برنامج إدارة المشاريع",
    description: "تطبيق سطح مكتب لإدارة المهام والمشاريع بفعالية، مع ميزات التعاون الفريقي وتقارير الأداء.",
    price: 149,
    category: "برمجيات",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    features: ["إدارة المهام", "تعاون فريقي", "تقارير أداء", "دعم Windows و Mac"]
  },
  {
    id: "6",
    title: "دورة تصميم واجهات المستخدم UI/UX",
    description: "احترف تصميم تجارب المستخدم وواجهات الاستخدام باستخدام Figma مع مشاريع حقيقية في المحفظة.",
    price: 199,
    category: "دورات تعليمية",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&auto=format&fit=crop&q=60",
    features: ["تعلم Figma", "مشاريع حقيقية", "بناء محفظة أعمال", "شهادة معتمدة"]
  }
];

export const categories = [
  "الكل",
  "دورات تعليمية",
  "كتب إلكترونية",
  "قوالب تصميم",
  "أصول تصميم",
  "برمجيات"
];
