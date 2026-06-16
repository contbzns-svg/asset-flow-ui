import { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { ProductDetails } from './pages/ProductDetails';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { useCart } from './hooks/useCart';
import { CartDrawer } from './components/CartDrawer';
import { Product } from './data/mock-products';
import { toast } from 'sonner';

type Page = 'home' | 'product' | 'checkout' | 'success' | 'admin';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('تمت الإضافة للسلة بنجاح');
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
    window.scrollTo(0, 0);
  };

  const handlePaymentSuccess = (email: string) => {
    setCustomerEmail(email);
    clearCart();
    setCurrentPage('success');
    window.scrollTo(0, 0);
  };

  return (
    <div dir="rtl" lang="ar">
      <Layout cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} currentPage={currentPage} onNavigate={(page) => setCurrentPage(page as Page)}>
        {currentPage === 'home' && (
          <Home onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
        )}
        {currentPage === 'product' && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'checkout' && (
          <Checkout
            items={cartItems}
            totalPrice={totalPrice}
            onBack={() => setCurrentPage('home')}
            onSuccess={handlePaymentSuccess}
          />
        )}
        {currentPage === 'success' && (
          <Success email={customerEmail} onGoHome={() => setCurrentPage('home')} />
        )}
        {currentPage === 'admin' && (
          <Admin />
        )}
      </Layout>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
export default App;
