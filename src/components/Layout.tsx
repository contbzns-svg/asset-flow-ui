import React from 'react';
import { Navbar } from './Navbar';
import { Toaster } from './ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
  onOpenCart: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, cartCount, onOpenCart, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar cartCount={cartCount} onOpenCart={onOpenCart} currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} متجر المنتجات الرقمية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
      <Toaster position="top-center" />
    </div>
  );
}
