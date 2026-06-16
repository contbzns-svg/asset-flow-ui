import { useState } from 'react';
import { categories, Product } from '../data/mock-products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { useProducts } from '../hooks/useProducts';

interface HomeProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function Home({ onAddToCart, onViewDetails }: HomeProps) {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredProducts = selectedCategory === "الكل"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-primary/5 p-8 md:p-16 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-foreground">
          أفضل المنتجات الرقمية في <span className="text-primary">مكان واحد</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          اكتشف مجموعة مختارة من الدورات التدريبية، الكتب الإلكترونية، القوالب، والبرمجيات التي تساعدك على النمو والاحتراف.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-8 text-lg font-bold">ابدأ التسوق</Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-lg font-bold">تواصل معنا</Button>
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">تصفح الفئات</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            لا توجد منتجات في هذا التصنيف حالياً.
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">تحميل فوري</h3>
          <p className="text-sm text-muted-foreground">احصل على منتجاتك فوراً بعد إتمام عملية الدفع.</p>
        </div>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 0-7.906 12.25 0 0 17.524 0c1.881-2.012 3-4.637 3-7.514a11.954 11.954 0 00-1.382-5.508z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">أمان كامل</h3>
          <p className="text-sm text-muted-foreground">عمليات دفع آمنة وحماية كاملة لبياناتك الشخصية.</p>
        </div>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">دعم فني</h3>
          <p className="text-sm text-muted-foreground">فريق دعم متواجد لمساعدتك في أي استفسار.</p>
        </div>
      </section>
    </div>
  );
}
