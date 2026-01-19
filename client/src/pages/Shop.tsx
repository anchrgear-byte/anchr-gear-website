import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Product, ProductVariant, PRODUCTS as MOCK_PRODUCTS } from "@/lib/products";
import { getProducts } from "@/lib/shopify";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";
import { ShoppingCart, Filter, Check, Package, Plus } from "lucide-react";
import { Link, useSearch } from "wouter";
import { SizeGuide } from "@/components/SizeGuide";
import { toast } from "sonner";

export default function Shop() {
  const search = useSearch();
  const queryParams = new URLSearchParams(search);
  const initialFilter = (queryParams.get("filter") as "all" | "rope" | "glove" | "digital") || "all";
  
  const [filter, setFilter] = useState<"all" | "rope" | "glove" | "digital">(initialFilter);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  // Fetch products from Shopify
  useEffect(() => {
    async function loadProducts() {
      try {
        const shopifyProducts = await getProducts();
        if (shopifyProducts.length > 0) {
          setProducts(shopifyProducts);
        } else {
          // Fallback to mock data if store is empty
          setProducts(MOCK_PRODUCTS);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts(MOCK_PRODUCTS); // Fallback on error
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Update filter when URL changes
  useEffect(() => {
    if (initialFilter === "rope" || initialFilter === "glove" || initialFilter === "digital" || initialFilter === "all") {
      setFilter(initialFilter);
    }
  }, [initialFilter]);
  
  // State to track selected variant for each product
  const [selections, setSelections] = useState<Record<string, ProductVariant>>({});

  // Initialize selections when products load
  useEffect(() => {
    if (products.length > 0) {
      const initial: Record<string, ProductVariant> = {};
      products.forEach(p => {
        initial[p.id] = p.variants[0];
      });
      setSelections(initial);
    }
  }, [products]);

  // State to track selected size for gloves
  const [sizeSelections, setSizeSelections] = useState<Record<string, string>>({});

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.type === filter);

  const handleVariantChange = (productId: string, variant: ProductVariant) => {
    setSelections(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  const handleSizeChange = (productId: string, size: string) => {
    setSizeSelections(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const addToCart = (product: Product) => {
    const variant = selections[product.id];
    const size = product.type === 'glove' ? sizeSelections[product.id] : undefined;

    if (product.type === 'glove' && !size) {
      toast.error("Please select a size");
      return;
    }

    addItem(product, variant, size);
  };

  // Helper function to check if product is a bundle
  const isBundle = (product: Product) => {
    return product.name.toLowerCase().includes('bundle');
  };

  // Helper function to get bundle component images
  const getBundleImages = (productName: string) => {
    const name = productName.toLowerCase();
    if (name.includes('full body home gym')) {
      return ['/images/black-ropes.jpeg', '/images/black-gloves-new.jpg'];
    }
    if (name.includes('complete body transformation')) {
      return ['/images/pink-ropes.jpeg', '/images/pink-gloves-new.jpg'];
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-4">Shop Gear</h1>
          <p className="text-muted-foreground font-body max-w-xl">
            Equip yourself with the tools to build strength anywhere. 
            Simple, effective, and built to last.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center gap-4 overflow-x-auto">
          <Filter className="w-5 h-5 text-muted-foreground shrink-0" />
          <div className="flex gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Gear
            </Button>
            <Button 
              variant={filter === "rope" ? "default" : "outline"} 
              onClick={() => setFilter("rope")}
              className="rounded-full"
            >
              Battle Ropes
            </Button>
            <Button 
              variant={filter === "glove" ? "default" : "outline"} 
              onClick={() => setFilter("glove")}
              className="rounded-full"
            >
              Gloves
            </Button>
            <Button 
              variant={filter === "digital" ? "default" : "outline"} 
              onClick={() => setFilter("digital")}
              className="rounded-full"
            >
              Digital Plans
            </Button>

          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div id="shop-products" className="container mx-auto px-4 py-12 flex-grow scroll-mt-24">
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading gear...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const selectedVariant = selections[product.id];
              const selectedSize = sizeSelections[product.id];
              const bundle = isBundle(product);
              const bundleImages = bundle ? getBundleImages(product.name) : [];

              if (!selectedVariant) return null; // Skip if variant not yet initialized

              return (
                <div key={product.id} className="group flex flex-col bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden">
                  {/* Image Area */}
                  <Link href={`/shop/${product.id}`}>
                    <a className="block relative aspect-square bg-white overflow-hidden">
                      {bundle && bundleImages.length > 0 ? (
                        // Bundle: Overlapping images with + sign
                        <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* First product image - left */}
                            <div className="absolute left-0 w-[45%] h-[70%] rounded-lg overflow-hidden shadow-2xl transform -rotate-6 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-12 z-10">
                              <img 
                                src={bundleImages[0]} 
                                alt="Bundle item 1"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            {/* Plus sign in middle */}
                            <div className="absolute z-20 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
                              <Plus className="w-8 h-8 font-bold" strokeWidth={3} />
                            </div>
                            
                            {/* Second product image - right */}
                            <div className="absolute right-0 w-[45%] h-[70%] rounded-lg overflow-hidden shadow-2xl transform rotate-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 z-10">
                              <img 
                                src={bundleImages[1]} 
                                alt="Bundle item 2"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Regular product: single image
                        <img 
                          src={selectedVariant.image} 
                          alt={`${product.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      
                      {selectedVariant.originalPrice && (
                        <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
                          Sale
                        </div>
                      )}
                      {bundle && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          Bundle
                        </div>
                      )}
                    </a>
                  </Link>

                  {/* Details Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={`/shop/${product.id}`}>
                      <a>
                        <h3 className="text-2xl font-heading font-bold uppercase mb-2 hover:text-primary transition-colors">{product.name}</h3>
                      </a>
                    </Link>
                    
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-2xl font-bold text-primary">${selectedVariant.price.toFixed(2)}</span>
                      {selectedVariant.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">${selectedVariant.originalPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Digital Delivery Notice */}
                    {product.type === 'digital' && (
                      <div className="mb-6 p-3 bg-primary/10 border border-primary/20 rounded-sm">
                        <p className="text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                          <Check className="w-3 h-3" />
                          Instant Digital Download
                        </p>
                      </div>
                    )}

                    {/* Color Selection - HIDE for bundles and digital products */}
                    {!bundle && product.type !== 'digital' && (
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                          Color: <span className="text-foreground">{selectedVariant.name.split('/')[0].trim()}</span>
                        </span>
                        <div className="flex gap-2">
                          {Array.from(new Set(product.variants.map(v => v.name.split('/')[0].trim()))).map((colorName) => {
                            // Find the first variant that matches this color to use for the button
                            const variant = product.variants.find(v => v.name.includes(colorName));
                            if (!variant) return null;
                            
                            const isSelected = selectedVariant.name.includes(colorName);
                            
                            return (
                              <button
                                key={colorName}
                                onClick={() => {
                                  // When switching color, try to keep the same size if possible, otherwise default to first size
                                  const targetSize = selectedSize || 'M';
                                  const newVariant = product.variants.find(v => 
                                    v.name.includes(colorName) && (product.type === 'glove' ? v.name.includes(targetSize) : true)
                                  ) || variant;
                                  
                                  handleVariantChange(product.id, newVariant);
                                }}
                                className={cn(
                                  "w-8 h-8 rounded-full border-2 transition-all relative",
                                  isSelected ? "border-primary scale-110" : "border-transparent hover:scale-105"
                                )}
                                style={{ backgroundColor: variant.color.replace('bg-', '').replace('-500', '') }}
                                title={colorName}
                              >
                                {isSelected && (
                                  <span className="absolute inset-0 flex items-center justify-center">
                                    <Check className={cn("w-4 h-4", colorName.includes("White") || colorName.includes("Pink") || colorName.includes("Yellow") ? "text-black" : "text-white")} />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Size Selection (Gloves Only) - HIDE for bundles */}
                    {!bundle && product.type === 'glove' && (
                      <div className="mb-6">
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
                              onClick={() => {
                                handleSizeChange(product.id, size);
                                // Also update the variant to match the new size
                                const colorName = selectedVariant.name.split('/')[0].trim();
                                const newVariant = product.variants.find(v => 
                                  v.name.includes(colorName) && v.name.includes(size)
                                );
                                if (newVariant) {
                                  handleVariantChange(product.id, newVariant);
                                }
                              }}
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

                    <div className="mt-auto">
                      <Button 
                        size="lg" 
                        className="w-full rounded-none uppercase font-heading tracking-widest text-base h-14"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart <ShoppingCart className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
