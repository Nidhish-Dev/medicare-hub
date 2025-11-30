import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, updateQty, removeFromCart, clearCart, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate order placement
    const orderId = `ORD${Date.now()}`;
    toast.success(`Order ${orderId} placed successfully! (Demo)`);
    clearCart();
    setShowCheckout(false);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-display font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground">Add some items to get started</p>
          <Link to="/services">
            <Button>Browse Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      ₹{item.price} each
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 border rounded-lg">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.qty}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">₹{item.price * item.qty}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-primary">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">₹{cartTotal}</span>
                </div>
              </div>

              {!showCheckout ? (
                <div className="mt-6 space-y-3">
                  <Button className="w-full" size="lg" onClick={() => setShowCheckout(true)}>
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleCheckout} className="mt-6 space-y-4">
                  <div>
                    <Label>Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="razorpay" id="razorpay" />
                        <Label htmlFor="razorpay" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-4 w-4" />
                          Razorpay (Demo)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Smartphone className="h-4 w-4" />
                          UPI (Demo)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Wallet className="h-4 w-4" />
                          Cash on Delivery
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input id="address" name="address" placeholder="Enter your address" required className="mt-1" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" name="pincode" required className="mt-1" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Button type="submit" className="w-full" size="lg">
                      Place Order
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => setShowCheckout(false)}
                    >
                      Back
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
