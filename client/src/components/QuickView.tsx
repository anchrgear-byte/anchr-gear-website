import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product, ProductVariant } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ShoppingCart, Check, Eye, ArrowRight } from "lucide-react";
import { SizeGuide } from "@/components/SizeGuide";
import { toast } from "sonner";
import { Link } from "wouter";
import { useCart } from "@/contexts/CartContext";

interface QuickViewProps {
  product: Product;
  trigger?: React.ReactNode;
}

export function QuickView({ product, trigger }: QuickViewProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const { addItem } = useCart();

  const addToCart = () => {
    if (product.type === 'glove' && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addItem(product, selectedVariant, selectedSize);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-none uppercase font-heading tracking-widest text-lg h-14 px-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            title="Quick View"
          >
            <Eye className="w-6 h-6 mr-2" /> Quick View
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 gap-0 bg-background border-border overflow-hidden flex flex-col md:flex-row">
        <DialogTitle className="sr-only">{product.name} Quick View</DialogTitle>
        <DialogDescription className="sr-only">
          Quick view details for {product.name}. Select options and add to cart.
        </DialogDescription>
        {/* Image Section */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-white relative">
          <img 
            src={selectedVariant.image} 
            alt={`${product.name} - ${selectedVariant.name}`}
            className="w-full h-full object-cover"
          />
          {selectedVariant.originalPrice && (
            <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Sale
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col max-h-[90vh] overflow-y-auto">
          <h2 className="text-3xl font-heading font-bold uppercase mb-2">{product.name}</h2>
          
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-bold text-primary">${selectedVariant.price.toFixed(2)}</span>
            {selectedVariant.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${selectedVariant.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection (Skip for Digital) */}
          {product.type !== 'digital' && (
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                Color: <span className="text-foreground">{selectedVariant.name}</span>
              </span>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all relative",
                      selectedVariant.id === variant.id ? "border-primary scale-110" : "border-transparent hover:scale-105"
                    )}
                    style={{ backgroundColor: variant.color.replace('bg-', '').replace('-500', '') }}
                    title={variant.name}
                  >
                    {selectedVariant.id === variant.id && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check className={cn("w-4 h-4", variant.name.includes("White") || variant.name.includes("Pink") || variant.name.includes("Yellow") ? "text-black" : "text-white")} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection (Gloves Only) */}
          {product.type === 'glove' && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                  Size: <span className="text-foreground">{selectedSize || "Select Size"}</span>
                </span>
                <SizeGuide />
              </div>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-10 h-10 border flex items-center justify-center text-sm font-bold transition-colors",
                      selectedSize === size 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "bg-transparent border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto space-y-3">
            <Button 
              size="lg" 
              className="w-full rounded-none uppercase font-heading tracking-widest text-lg h-14"
              onClick={addToCart}
            >
              Add to Cart <ShoppingCart className="ml-2 w-5 h-5" />
            </Button>
            
            <Link href={`/shop/${product.id}`}>
              <Button 
                variant="link" 
                className="w-full text-muted-foreground hover:text-primary uppercase tracking-widest text-xs font-bold"
              >
                View Full Details <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
