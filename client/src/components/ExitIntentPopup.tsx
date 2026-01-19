import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Zap, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "wouter";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const { cartCount, setIsCartOpen } = useCart();
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check local storage for previous dismissal
    const lastShown = localStorage.getItem("anchr_exit_popup_shown");
    if (lastShown) {
      const daysSinceShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
      if (daysSinceShown < 30) {
        setHasShown(true);
        return;
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        // Save current timestamp to local storage
        localStorage.setItem("anchr_exit_popup_shown", Date.now().toString());
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    toast.success("Welcome to the team! Use code ANCHR10 at checkout.");
    setIsVisible(false);
    // Ensure we don't show it again after successful signup
    localStorage.setItem("anchr_exit_popup_shown", Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-card border-2 border-primary p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
            {cartCount > 0 ? (
              <ShoppingBag className="w-8 h-8 text-primary animate-bounce" />
            ) : (
              <Zap className="w-8 h-8 text-primary animate-pulse" />
            )}
          </div>
          
          {cartCount > 0 ? (
            <>
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase leading-none mb-4">
                  Don't Lose <br />
                  <span className="text-primary">Your Gear</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg">
                  Your items are waiting. Complete your order now before they sell out.
                </p>
              </div>
              <div className="pt-4 space-y-4">
                <Button 
                  onClick={() => {
                    setIsVisible(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full h-14 text-xl font-heading uppercase tracking-widest rounded-none"
                >
                  Complete My Order
                </Button>
                <p className="text-xs text-muted-foreground uppercase tracking-widest cursor-pointer hover:text-foreground transition-colors" onClick={handleClose}>
                  I'll come back later
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase leading-none mb-4">
                  Wait! Don't Go <br />
                  <span className="text-primary">Empty Handed</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg">
                  Join the movement today and get <span className="text-foreground font-bold">10% OFF</span> your first order.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <Input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL" 
                  className="h-12 text-center font-bold uppercase tracking-widest border-2 border-border focus-visible:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full h-14 text-xl font-heading uppercase tracking-widest rounded-none">
                  Unlock My 10% Off
                </Button>
              </form>

              <p className="text-xs text-muted-foreground uppercase tracking-widest cursor-pointer hover:text-foreground transition-colors" onClick={handleClose}>
                No thanks, I prefer paying full price
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
