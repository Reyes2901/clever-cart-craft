
import { useState, useEffect } from "react";
import { Category } from "@/types";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/products";

export function CategoryGrid() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setCategoryList(categories);
  }, []);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categoryList.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
