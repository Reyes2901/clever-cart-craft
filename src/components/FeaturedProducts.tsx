
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const featured = getFeaturedProducts();
    setProducts(featured);
  }, []);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Productos Destacados</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
