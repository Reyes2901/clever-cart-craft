
import { useState, useEffect } from "react";
import { Category } from "@/types";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/products";

export function CategoryGrid() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  
  useEffect(() => {
    setCategoryList(categories);
  }, []);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Explora por Categoría
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre nuestra amplia selección de productos tecnológicos organizados por categorías
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryList.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
