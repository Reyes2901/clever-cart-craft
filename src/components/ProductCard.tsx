
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  
  return (
    <div className="product-card group">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {hasDiscount && (
          <Badge variant="sale" className="absolute top-2 right-2">
            Sale
          </Badge>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <Badge variant="outline" className="bg-white text-gray-900 px-3 py-1">
              Out of Stock
            </Badge>
          </div>
        )}
      </Link>
      
      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-gray-800 hover:text-shop-blue transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            {hasDiscount ? (
              <>
                <span className="text-shop-accent font-semibold">${product.discountPrice?.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 text-sm line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-semibold text-gray-800">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`text-xs ${index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <Button 
            variant="default" 
            size="sm" 
            className="w-full flex items-center justify-center"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
