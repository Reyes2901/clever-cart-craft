import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
//import locales sustituir por axios
import { products, getProductsByCategory, getCategoryById } from "@/data/products";
//import axios from "axios";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ProductListing = () => {
  const { categoryId } = useParams();
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("All Products");
  
  useEffect(() => {
    // Get products based on category or all products
    let filteredProducts: Product[];
    
    if (categoryId) {
      filteredProducts = getProductsByCategory(categoryId);
      const category = getCategoryById(categoryId);
      if (category) {
        setCategoryName(category.name);
      }
    } else {
      filteredProducts = [...products];
    }
    
    // Apply filters
    if (inStockOnly) {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    }
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Featured - keep products order as is or sort by featured flag
        filteredProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }
    
    setDisplayProducts(filteredProducts);
  }, [categoryId, priceRange, sortOption, inStockOnly]);
  
  return (
    <>
      <Helmet>
        <title>{categoryName} | eCommerceIA</title>
        <meta name="description" content={`Shop our collection of ${categoryName.toLowerCase()}`} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="bg-gray-50 py-6">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
              <p className="text-gray-600 mt-2">
                {displayProducts.length} products found
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters - Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="font-semibold text-lg mb-4">Filters</h2>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Slider 
                      defaultValue={priceRange} 
                      min={0} 
                      max={500} 
                      step={10}
                      onValueChange={setPriceRange} 
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600 text-sm">${priceRange[0]}</span>
                      <span className="text-gray-600 text-sm">${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Availability */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Availability</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="in-stock" 
                        checked={inStockOnly}
                        onCheckedChange={(checked) => setInStockOnly(checked as boolean)} 
                      />
                      <Label htmlFor="in-stock">In Stock Only</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="lg:w-3/4">
                {/* Sort Options */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600 text-sm">
                    Showing {displayProducts.length} results
                  </p>
                  
                  <select 
                    className="border rounded-md p-2 text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
                
                {displayProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No products found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProductListing;
