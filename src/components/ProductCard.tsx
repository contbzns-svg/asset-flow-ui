import { Product } from '../data/mock-products';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90" variant="secondary">
          {product.category}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg line-clamp-1">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="text-xl font-bold text-primary">
          {product.price} ر.س
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button className="flex-1 gap-2" onClick={() => onAddToCart(product)}>
          <ShoppingCart className="h-4 w-4" />
          أضف للسلة
        </Button>
        <Button variant="outline" size="icon" onClick={() => onViewDetails(product)}>
          <Eye className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
