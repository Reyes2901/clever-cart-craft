
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const featured = getFeaturedProducts();
    setProducts(featured);
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Productos Destacados
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explora nuestra selección de productos más populares y mejor valorados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
