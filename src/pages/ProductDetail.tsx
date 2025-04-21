import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ProductListing = () => {
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  useEffect(() => {
    // Función para obtener los productos desde la API
    const fetchProducts = async () => {
      const BASE_URL = import.meta.env.VITE_API_URL; // Obtén la URL de la API desde la variable de entorno
      const url = `${BASE_URL}/products/`; // Solo se obtienen todos los productos, sin categoría

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setDisplayProducts(data); // Asigna los productos obtenidos al estado
        } else {
          console.error("Error fetching products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Llamada a la función cuando el componente se monta

  }, []); // Se ejecutará una sola vez al cargar el componente

  useEffect(() => {
    let filteredProducts = [...displayProducts];

    // Aplicar filtros
    if (inStockOnly) {
      filteredProducts = filteredProducts.filter((product) => product.inStock);
    }

    // Aplicar filtro de precio
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Aplicar ordenación
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
        // Featured - mantener el orden de los productos o ordenarlos por el flag de destacado
        filteredProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    setDisplayProducts(filteredProducts); // Actualiza los productos filtrados

  }, [priceRange, sortOption, inStockOnly, displayProducts]); // Se ejecutará cada vez que cambie el filtro o los productos

  return (
    <>
      <Helmet>
        <title>Productos | eCommerceIA</title>
        <meta name="description" content="Compra nuestra colección de productos" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <div className="bg-gray-50 py-6">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-gray-900">Todos los Productos</h1>
              <p className="text-gray-600 mt-2">
                {displayProducts.length} productos encontrados
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filtros - Barra lateral */}
              <div className="lg:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="font-semibold text-lg mb-4">Filtros</h2>

                  {/* Rango de precio */}
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

                  {/* Disponibilidad */}
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

              {/* Cuadrícula de productos */}
              <div className="lg:w-3/4">
                {/* Opciones de orden */}
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
                    {displayProducts.map((product) => (
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
