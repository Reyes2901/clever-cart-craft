
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { getProductById, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        
        // Get related products from the same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== productId)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Product Not Found</h2>
            <p className="mt-4 text-gray-600">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/products" className="mt-6 inline-block text-shop-blue hover:underline">
              Browse all products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  
  return (
    <>
      <Helmet>
        <title>{product.name} | eCommerceIA</title>
        <meta name="description" content={product.description.substring(0, 160)} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6">
              <ol className="flex">
                <li>
                  <Link to="/" className="text-gray-500 hover:text-shop-blue">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <Link to="/products" className="text-gray-500 hover:text-shop-blue">Products</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-900 font-medium">{product.name}</li>
              </ol>
            </nav>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Images */}
              <div className="md:w-1/2">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={selectedImage} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`w-20 h-20 border rounded-md overflow-hidden flex-shrink-0 
                        ${image === selectedImage ? 'border-shop-blue ring-2 ring-shop-blue/20' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
                
                <div className="flex items-center mt-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`text-sm ${index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{product.rating} stars</span>
                </div>
                
                <div className="mt-4">
                  {hasDiscount ? (
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-shop-accent">${product.discountPrice?.toFixed(2)}</span>
                      <span className="ml-2 text-gray-500 line-through">${product.price.toFixed(2)}</span>
                      <Badge variant="sale" className="ml-2">
                        Sale
                      </Badge>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="border-t border-b border-gray-200 my-6 py-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  {/* Stock Status */}
                  <div className="mt-4 mb-6">
                    <span className={`inline-flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-600' : 'bg-red-600'}`}></span>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <div className="flex items-center">
                      <button
                        className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center"
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="w-16 h-10 border-t border-b border-gray-300 text-center"
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      />
                      <button
                        className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center"
                        onClick={incrementQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Button 
                    className="flex-1 h-12 bg-shop-blue hover:bg-shop-lightBlue"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    className="flex-1 h-12"
                    onClick={() => {}}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                </div>
                
                {/* Product Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-shop-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Free Shipping</h4>
                      <p className="text-sm text-gray-500">On orders over $50</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <RotateCcw className="w-5 h-5 text-shop-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Easy Returns</h4>
                      <p className="text-sm text-gray-500">30-day return policy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-shop-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Secure Checkout</h4>
                      <p className="text-sm text-gray-500">100% protected payments</p>
                    </div>
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8 flex items-center">
                  <span className="text-gray-600 mr-4">Share:</span>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-shop-blue hover:text-white transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="section-heading">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {relatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
