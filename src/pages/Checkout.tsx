
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle order submission
    
    // Simulate order success
    setIsOrdered(true);
    clearCart();
  };
  
  if (isOrdered) {
    return (
      <>
        <Helmet>
          <title>Order Confirmation | eCommerceIA</title>
        </Helmet>
        
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow container mx-auto px-4 py-12">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your order has been received and is being processed.
              </p>
              
              <Button className="w-full bg-shop-blue hover:bg-shop-lightBlue" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Checkout | eCommerceIA</title>
        <meta name="description" content="Complete your purchase securely" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Checkout Form */}
              <div className="lg:w-2/3">
                <form onSubmit={handleSubmitOrder}>
                  {/* Shipping Information */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required className="mt-1" />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required className="mt-1" />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123 Main St" required className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" required className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                        <Input id="zipCode" placeholder="10001" required className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="state">State / Province</Label>
                        <Input id="state" placeholder="NY" required className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="United States" required className="mt-1" />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(123) 456-7890" required className="mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Information */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" required className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="4242 4242 4242 4242" required className="mt-1" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required className="mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required className="mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-shop-blue hover:bg-shop-lightBlue h-12 text-base"
                  >
                    Place Order
                  </Button>
                </form>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  
                  {/* Items */}
                  <div className="space-y-4 mb-4">
                    {cart.items.map(item => (
                      <div key={item.productId} className="flex items-start">
                        <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3 flex-grow">
                          <h4 className="text-sm font-medium text-gray-800">{item.product.name}</h4>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                            <span className="text-sm">
                              ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>Free</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${(cartTotal * 0.1).toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${(cartTotal + cartTotal * 0.1).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
