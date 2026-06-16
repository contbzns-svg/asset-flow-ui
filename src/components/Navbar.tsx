import { ShoppingCart, Search, Menu, LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ cartCount, onOpenCart, currentPage, onNavigate }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <span className="text-2xl font-bold text-primary">رقمي</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className={`transition-colors hover:text-primary ${currentPage === 'home' ? 'text-primary font-bold' : ''}`} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>الرئيسية</a>
            <a href="#" className="transition-colors hover:text-primary" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>التصنيفات</a>
            <a href="#" className="transition-colors hover:text-primary">عن المتجر</a>
            <a href="#" className={`transition-colors hover:text-primary flex items-center gap-1 ${currentPage === 'admin' ? 'text-primary font-bold' : ''}`} onClick={(e) => { e.preventDefault(); onNavigate('admin'); }}>
              <LayoutDashboard className="h-4 w-4" />
              لوحة التحكم
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="ابحث عن منتج..."
              className="h-10 w-64 rounded-md border border-input bg-background pr-10 pl-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <Button variant="outline" size="icon" className="relative" onClick={onOpenCart}>
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] min-w-[20px] h-5 flex items-center justify-center rounded-full" variant="destructive">
                {cartCount}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
