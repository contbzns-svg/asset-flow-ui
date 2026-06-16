import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../data/mock-products';
import { Button } from '../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { AdminProductForm } from '../components/AdminProductForm';
import { Plus, Edit, Trash2, LayoutDashboard } from 'lucide-react';
import { toast } from 'sonner';

export function Admin() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAdd = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      deleteProduct(id);
      toast.success('تم حذف المنتج بنجاح');
    }
  };

  const handleSave = (data: Omit<Product, 'id'> | Product) => {
    if ('id' in data) {
      updateProduct(data.id, data);
      toast.success('تم تحديث المنتج بنجاح');
    } else {
      addProduct(data);
      toast.success('تم إضافة المنتج بنجاح');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <LayoutDashboard className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black">لوحة التحكم</h1>
            <p className="text-muted-foreground">إدارة المنتجات الرقمية الخاصة بك</p>
          </div>
        </div>
        <Button onClick={handleAdd} className="gap-2 h-12 px-6 text-lg font-bold w-full sm:w-auto">
          <Plus className="h-5 w-5" />
          إضافة منتج جديد
        </Button>
      </div>

      <div className="bg-card border rounded-3xl overflow-hidden">
        <Table dir="rtl">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">المنتج</TableHead>
              <TableHead className="text-right">التصنيف</TableHead>
              <TableHead className="text-right">السعر</TableHead>
              <TableHead className="text-left">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <span className="line-clamp-1">{product.title}</span>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price} ر.س</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                  لا توجد منتجات حالياً. ابدأ بإضافة منتجك الأول!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <AdminProductForm
        isOpen={isFormOpen}
        product={editingProduct}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
