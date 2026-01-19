import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/shop", label: "SHOP" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "THE GRIND" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-bold tracking-widest uppercase">
        FREE SHIPPING ON ALL ORDERS | STRENGTH WITHOUT THE CHAOS
      </div>

      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/images/anchr_gear_logo_branded.png" 
              alt="ANCHR GEAR" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:text-primary hover:bg-transparent"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-none">
                  {cartCount}
                </span>
              )}
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:text-primary hover:bg-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background absolute w-full left-0 top-20 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-lg font-heading font-bold tracking-widest hover:text-primary transition-colors uppercase py-2 border-b border-border/50",
                  location === item.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">
              ANCHR<span className="text-primary">.</span>GEAR
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Portable fitness equipment for real life. 
              No anchor. No limits. Just sweat.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="h-10 w-10 bg-border hover:bg-primary transition-colors cursor-pointer flex items-center justify-center">IG</div>
              <div className="h-10 w-10 bg-border hover:bg-primary transition-colors cursor-pointer flex items-center justify-center">FB</div>
              <div className="h-10 w-10 bg-border hover:bg-primary transition-colors cursor-pointer flex items-center justify-center">TT</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold uppercase mb-4 text-lg">Shop</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/shop?filter=rope#shop-products" className="hover:text-primary transition-colors">Battle Ropes</a></li>
              <li><a href="/shop?filter=glove#shop-products" className="hover:text-primary transition-colors">Gloves</a></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><a href="/#power-bundle" className="hover:text-primary transition-colors">Bundles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="/faq#shipping" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="/faq#returns" className="hover:text-primary transition-colors">Returns</a></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">The Grind (Blog)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} ANCHR GEAR. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
