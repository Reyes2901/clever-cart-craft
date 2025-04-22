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
const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const BASE_URL = import.meta.env.VITE_API_URL;

const ProductListing = () => {
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
        <title>Productos | eCommerceIA</title>
        <meta name="description" content="Lista de productos" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Todos los productos</h1>

            {loading && <p className="text-gray-500">Cargando productos...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              !loading && !error && (
                <p className="text-center text-gray-500">No se encontraron productos.</p>
              )
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
  
  
};

export default ProductListing;
