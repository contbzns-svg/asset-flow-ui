import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from './ui/sheet';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { CartItem } from '../hooks/useCart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemove: (id: string) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  totalPrice,
  onCheckout,
}: CartDrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b text-right">
          <div className="flex items-center justify-between">
            <SheetTitle>سلة التسوق</SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-grow overflow-hidden flex flex-col">
          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">سلتك فارغة</h3>
                <p className="text-muted-foreground">ابدأ بالتسوق وأضف بعض المنتجات!</p>
              </div>
              <Button onClick={onClose} variant="outline">تصفح المنتجات</Button>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-grow p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                          <p className="text-sm text-primary font-bold mt-1">{item.price} ر.س</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded-md h-8">
                            <button
                              className="px-2 hover:bg-muted"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="px-2 text-sm min-w-[20px] text-center">{item.quantity}</span>
                            <button
                              className="px-2 hover:bg-muted"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => onRemove(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-6 border-t bg-muted/10 space-y-4">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span>الإجمالي</span>
                  <span>{totalPrice} ر.س</span>
                </div>
                <Button className="w-full h-12 text-lg font-bold" onClick={onCheckout}>
                  إتمام الطلب
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
