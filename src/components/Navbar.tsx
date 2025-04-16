
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

export function Navbar() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-shop-blue">
            eCommerceIA
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-shop-blue transition-colors">
              Home
            </Link>
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`} 
                className="text-gray-600 hover:text-shop-blue transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Link to="/products" className="text-gray-600 hover:text-shop-blue transition-colors">
              All Products
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-shop-blue transition-colors"
            >
              <Search size={20} />
            </button>
            
            <Link to="/account" className="text-gray-600 hover:text-shop-blue transition-colors">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-shop-blue transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge 
                  variant="default" 
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full p-0"
                >
                  {cartCount}
                </Badge>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-shop-blue transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Search bar */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shop-blue"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-shop-blue">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-shop-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map(category => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`} 
                  className="text-gray-600 hover:text-shop-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link 
                to="/products" 
                className="text-gray-600 hover:text-shop-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
