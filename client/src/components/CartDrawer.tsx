import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { createCheckout } from "@/lib/shopify";
import { toast } from "sonner";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  const handleCheckout = async () => {
    try {
      toast.loading("Redirecting to checkout...");
      // For now, we just checkout with the first item's variant ID as a simple implementation
      // In a real app, we'd need to create a checkout with line items for all cart items
      // But Shopify Storefront API createCheckout takes lineItems array
      
      const lineItems = items.map(item => ({
        variantId: item.variant.id,
        quantity: item.quantity
      }));

      if (items.length > 0) {
        const checkoutUrl = await createCheckout(lineItems);
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to start checkout. Please try again.");
      console.error(error);
    }
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background border-l border-border p-0">
        <SheetHeader className="px-6 py-4 border-b border-border">
          <SheetTitle className="text-xl font-heading font-bold uppercase flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any gear yet.</p>
            <Button 
              onClick={() => setIsCartOpen(false)} 
              className="uppercase font-bold tracking-widest"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="py-6 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-white border border-border flex-shrink-0">
                      <img 
                        src={item.variant.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold uppercase text-sm pr-4">{item.product.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.variant.name} {item.size && `• Size: ${item.size}`}
                        </p>
                      </div>
                      <div className="flex justify-between items-end mt-2">
                        <div className="flex items-center border border-border">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-accent/10"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-accent/10"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-primary">
                          ${(item.variant.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border p-6 bg-card/30">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-bold text-primary">FREE</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold uppercase mb-6 pt-4 border-t border-border">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full h-14 text-lg uppercase font-heading tracking-widest rounded-none"
                onClick={handleCheckout}
              >
                Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Shipping & taxes calculated at checkout.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
