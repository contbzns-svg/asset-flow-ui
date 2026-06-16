import { useState, useEffect } from 'react';
import { Product, mockProducts } from '../data/mock-products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('digital_products');
    if (savedProducts) {
      try {
        return JSON.parse(savedProducts);
      } catch (e) {
        console.error('Failed to parse products from localStorage', e);
        return mockProducts;
      }
    }
    return mockProducts;
  });

  useEffect(() => {
    localStorage.setItem('digital_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Math.random().toString(36).substr(2, 9),
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}
