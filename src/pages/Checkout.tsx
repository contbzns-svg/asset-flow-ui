import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { CartItem } from '../hooks/useCart';
import { Separator } from '../components/ui/separator';
import { ArrowRight, CreditCard, Lock } from 'lucide-react';

interface CheckoutProps {
  items: CartItem[];
  totalPrice: number;
  onBack: () => void;
  onSuccess: (email: string) => void;
}

export function Checkout({ items, totalPrice, onBack, onSuccess }: CheckoutProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(email);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button variant="ghost" onClick={onBack} className="gap-2 -mr-2">
        <ArrowRight className="h-4 w-4" />
        العودة للسلة
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>معلومات الدفع</CardTitle>
            </CardHeader>
            <CardContent>
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني (لاستلام المنتج)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-sm text-muted-foreground">سيتم إرسال رابط التحميل إلى هذا البريد فوراً.</p>
                </div>

                <div className="space-y-4">
                  <Label>معلومات البطاقة</Label>
                  <div className="space-y-4">
                    <div className="relative">
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="رقم البطاقة" className="h-12 pr-10" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="MM/YY" className="h-12" />
                      <Input placeholder="CVV" className="h-12" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>جميع المعاملات مشفرة وآمنة</span>
              </div>
              <Button
                form="checkout-form"
                className="w-full h-14 text-lg font-bold"
                disabled={isLoading}
              >
                {isLoading ? 'جاري المعالجة...' : `دفع ${totalPrice} ر.س الآن`}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-medium">{item.price * item.quantity} ر.س</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>الإجمالي</span>
                <span>{totalPrice} ر.س</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
