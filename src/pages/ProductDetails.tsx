import { Product } from '../data/mock-products';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export function ProductDetails({ product, onAddToCart, onBack }: ProductDetailsProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button variant="ghost" onClick={onBack} className="gap-2 -mr-2">
        <ArrowRight className="h-4 w-4" />
        العودة للمنتجات
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="aspect-video rounded-3xl overflow-hidden border">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border bg-muted/50 cursor-pointer hover:border-primary transition-colors">
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="text-sm px-3 py-1">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-black">{product.title}</h1>
          </div>

          <div className="text-4xl font-bold text-primary">
            {product.price} ر.س
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4 pt-4">
            <h3 className="font-bold text-xl">ماذا ستحصل عليه:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold flex-grow sm:flex-grow-0 gap-3" onClick={() => onAddToCart(product)}>
              <ShoppingCart className="h-6 w-6" />
              أضف إلى السلة
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold">
              مشاركة المنتج
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
