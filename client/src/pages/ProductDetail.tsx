import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PRODUCTS, Product, ProductVariant } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ShoppingCart, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { SizeGuide } from "@/components/SizeGuide";
import { toast } from "sonner";
import NotFound from "@/pages/NotFound";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetail() {
  const [match, params] = useRoute("/shop/:id");
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addItem } = useCart();

  // Find product based on ID
  const product = PRODUCTS.find(p => p.id === params?.id);

  // Set default variant on load
  useEffect(() => {
    if (product && !selectedVariant) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product, selectedVariant]);

  if (!match || !product || !selectedVariant) {
    return <NotFound />;
  }

  // Logic for Related Products (Simple recommendation engine)
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 2);

  const addToCart = () => {
    if (product.type === 'glove' && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addItem(product, selectedVariant, selectedSize);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Breadcrumb / Back */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/shop">
          <a className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
          </a>
        </Link>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="relative aspect-square bg-white border border-border overflow-hidden group">
            <img 
              src={selectedVariant.image} 
              alt={`${product.name} - ${selectedVariant.name}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {selectedVariant.originalPrice && (
              <div className="absolute top-6 left-6 bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest">
                Sale
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4 leading-none">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-bold text-primary">${selectedVariant.price.toFixed(2)}</span>
              {selectedVariant.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${selectedVariant.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed border-l-4 border-primary pl-6">
              {product.id === 'ropes' ? "Engineered for the grind. These aren't toys. Built with industrial-grade steel springs and heavy-duty rubber, these ropes deliver the resistance of a 30ft battle rope in a compact, portable system. Crush your workout, not your living room." : product.description}
            </p>

            {/* Features List */}
            <div className="mb-10">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-border w-full mb-10" />

            {/* Selectors */}
            <div className="space-y-8 mb-10">
              {/* Color Selector (Skip for Digital) */}
              {product.type !== 'digital' && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                    Color: <span className="text-foreground">{selectedVariant.name}</span>
                  </span>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={cn(
                          "w-12 h-12 rounded-full border-2 transition-all relative",
                          selectedVariant.id === variant.id ? "border-primary scale-110" : "border-transparent hover:scale-105"
                        )}
                        style={{ backgroundColor: variant.color.replace('bg-', '').replace('-500', '') }}
                        title={variant.name}
                      >
                        {selectedVariant.id === variant.id && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <Check className={cn("w-5 h-5", variant.name.includes("White") || variant.name.includes("Pink") || variant.name.includes("Yellow") ? "text-black" : "text-white")} />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector (Gloves Only) */}
              {product.type === 'glove' && (
                <div>
                  <div className="flex justify-between items-center mb-3 max-w-md">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                      Size: <span className="text-foreground">{selectedSize || "Select Size"}</span>
                    </span>
                    <SizeGuide />
                  </div>
                  <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "w-12 h-12 border flex items-center justify-center text-base font-bold transition-colors",
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
            </div>

            <Button 
              size="lg" 
              className="w-full md:max-w-md rounded-none uppercase font-heading tracking-widest text-xl h-16"
              onClick={addToCart}
            >
              Add to Cart <ShoppingCart className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase">
              Complete Your Setup
            </h2>
            <Link href="/shop">
              <a className="hidden md:flex items-center text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">
                View All Gear <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/shop/${relatedProduct.id}`}>
                <a className="group block bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="aspect-square bg-white relative overflow-hidden">
                    <img 
                      src={relatedProduct.variants[0].image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <span className="text-lg font-bold text-primary">
                      ${relatedProduct.basePrice.toFixed(2)}
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
