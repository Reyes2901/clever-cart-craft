
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/category/${category.id}`} 
      className="block relative group overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={category.image || 'https://via.placeholder.com/400x400'} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-white font-bold text-xl mb-1">{category.name}</h3>
          {category.description && (
            <p className="text-white/90 text-sm">{category.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
