import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
//import locales sustituir por axios

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

  const BASE_URL = import.meta.env.VITE_API_URL;
  
   async function obtenerProductos() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/products/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
  
    return await response.json();
  }
  
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
                {displayProducts.length} productos encontrados
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters - Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="font-semibold text-lg mb-4">Filtros</h2>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Rango de precios</h3>
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
                    <h3 className="font-medium mb-3">Disponibilidad</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="in-stock" 
                        checked={inStockOnly}
                        onCheckedChange={(checked) => setInStockOnly(checked as boolean)} 
                      />
                      <Label htmlFor="in-stock">En stock</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="lg:w-3/4">
                {/* Sort Options */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600 text-sm">
                  Mostrar {displayProducts.length} resultados
                  </p>
                  
                  <select 
                    className="border rounded-md p-2 text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Destacados</option>
                    <option value="price-asc">Precio: De menor a mayor</option>
                    <option value="price-desc">Precio: de mayor a menor</option>
                    <option value="rating">Mejor valorado</option>
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
                    <p className="text-gray-500">No se han encontrado productos que coincidan con sus criterios.</p>
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
