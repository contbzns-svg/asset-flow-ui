import { useState, useEffect } from 'react';
import { Product, categories } from '../data/mock-products';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';

interface AdminProductFormProps {
  product?: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Omit<Product, 'id'> | Product) => void;
}

export function AdminProductForm({ product, isOpen, onClose, onSave }: AdminProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    title: '',
    description: '',
    price: 0,
    category: categories[1], // Default to first real category
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60',
    features: [],
  });
  const [featureInput, setFeatureInput] = useState('');

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
        features: product.features,
      });
    } else {
      setFormData({
        title: '',
        description: '',
        price: 0,
        category: categories[1],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60',
        features: [],
      });
    }
  }, [product, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      onSave({ ...formData, id: product.id } as Product);
    } else {
      onSave(formData);
    }
    onClose();
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({ ...formData, features: [...formData.features, featureInput.trim()] });
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-right">
            {product ? 'تعديل منتج' : 'إضافة منتج جديد'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4 text-right" dir="rtl">
          <div className="space-y-2">
            <Label htmlFor="title">اسم المنتج</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">التصنيف</Label>
            <select
              id="category"
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              {categories.filter(c => c !== 'الكل').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">السعر (ر.س)</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">الوصف</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">رابط الصورة</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>المميزات</Label>
            <div className="flex gap-2">
              <Input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="أضف ميزة..."
              />
              <Button type="button" onClick={addFeature}>إضافة</Button>
            </div>
            <ul className="mt-2 space-y-1">
              {formData.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-between bg-muted p-2 rounded-md text-sm">
                  <span>{feature}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-destructive h-6 px-2"
                    onClick={() => removeFeature(index)}
                  >
                    حذف
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <DialogFooter className="mt-6 flex-row-reverse justify-start gap-2">
            <Button type="submit">{product ? 'حفظ التعديلات' : 'إضافة المنتج'}</Button>
            <Button type="button" variant="outline" onClick={onClose}>إلغاء</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
