
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} ha sido agregado al carrito`,
    });
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {hasDiscount && (
          <Badge className="absolute top-2 right-2 bg-purple-600 text-white">
            Oferta
          </Badge>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="outline" className="bg-white text-black px-3 py-1">
              Agotado
            </Badge>
          </div>
        )}
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-gray-800 hover:text-purple-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            {hasDiscount ? (
              <>
                <span className="text-purple-600 font-bold">${product.discountPrice?.toFixed(2)}</span>
                <span className="ml-2 text-gray-400 text-sm line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-gray-800">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <Button 
            variant="default" 
            size="sm" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} className="mr-2" />
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
}
