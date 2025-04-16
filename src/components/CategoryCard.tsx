
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/category/${category.id}`} 
      className="block relative group overflow-hidden rounded-lg shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={category.image || 'https://via.placeholder.com/400x300'} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <div>
          <h3 className="text-white font-bold text-xl">{category.name}</h3>
          {category.description && (
            <p className="text-white/80 text-sm mt-1">{category.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
