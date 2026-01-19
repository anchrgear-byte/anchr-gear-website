
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const ROPES = [
  { id: "rope-black", name: "Black", color: "bg-black", img: "/images/black-ropes.jpeg" },
  { id: "rope-grey", name: "Grey", color: "bg-gray-500", img: "/images/grey-ropes.jpeg" },
  { id: "rope-pink", name: "Pink", color: "bg-pink-500", img: "/images/pink-ropes.jpeg" },
];

const GLOVES = [
  { id: "glove-black", name: "Black", color: "bg-black", img: "/images/black-gloves-new.jpg" },
  { id: "glove-grey", name: "Grey", color: "bg-gray-500", img: "/images/grey-gloves-new.jpg" },
  { id: "glove-blue", name: "Blue", color: "bg-blue-500", img: "/images/blue-gloves-new.jpg" },
  { id: "glove-pink", name: "Pink", color: "bg-pink-500", img: "/images/pink-gloves-new.jpg" },
];

const SIZES = ["S", "M", "L", "XL"];

export function PowerBundle() {
  const [selectedRope, setSelectedRope] = useState(ROPES[0]);
  const [selectedGlove, setSelectedGlove] = useState(GLOVES[0]);
  const [selectedSize, setSelectedSize] = useState("M");

  const bundlePrice = 109.99; // Discounted from $89.99 + $34.99 = $124.98
  const savings = 124.98 - bundlePrice;

  return (
    <section id="power-bundle" className="py-24 border-b border-border bg-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Buy Together & Save</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">Power Bundle</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Get the complete setup. Pair your wireless battle ropes with premium gloves for maximum performance and protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Visualizer */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-card border border-border p-8 flex items-center justify-center gap-4 md:gap-8">
            <div className="relative w-1/2 aspect-[3/4]">
              <img 
                src={selectedRope.img} 
                alt="Battle Ropes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase">
                {selectedRope.name} Ropes
              </div>
            </div>
            <Plus className="w-8 h-8 text-primary shrink-0" />
            <div className="relative w-1/2 aspect-[3/4]">
              <img 
                src={selectedGlove.img} 
                alt="Gloves" 
                className="w-full h-full object-contain bg-white p-4"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase">
                {selectedGlove.name} Gloves
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-8">
            {/* Rope Selection */}
            <div>
              <h3 className="text-lg font-heading font-bold uppercase mb-4">1. Choose Rope Color</h3>
              <div className="flex gap-4">
                {ROPES.map((rope) => (
                  <button
                    key={rope.id}
                    onClick={() => setSelectedRope(rope)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                      selectedRope.id === rope.id ? "border-primary scale-110" : "border-transparent hover:scale-105"
                    )}
                    style={{ backgroundColor: rope.name.toLowerCase() === 'grey' ? 'grey' : rope.name.toLowerCase() }}
                    aria-label={`Select ${rope.name} rope`}
                  >
                    {selectedRope.id === rope.id && <Check className="w-6 h-6 text-white mix-blend-difference" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Glove Selection */}
            <div>
              <h3 className="text-lg font-heading font-bold uppercase mb-4">2. Choose Glove Color</h3>
              <div className="flex gap-4">
                {GLOVES.map((glove) => (
                  <button
                    key={glove.id}
                    onClick={() => setSelectedGlove(glove)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                      selectedGlove.id === glove.id ? "border-primary scale-110" : "border-transparent hover:scale-105"
                    )}
                    style={{ backgroundColor: glove.color.replace('bg-', '').replace('-500', '') }}
                    aria-label={`Select ${glove.name} glove`}
                  >
                    {selectedGlove.id === glove.id && <Check className="w-6 h-6 text-white mix-blend-difference" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-heading font-bold uppercase mb-4">3. Choose Glove Size</h3>
              <div className="flex gap-4">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 border border-border flex items-center justify-center font-heading font-bold transition-all hover:bg-accent",
                      selectedSize === size ? "bg-primary text-primary-foreground border-primary" : "bg-card"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary & CTA */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-end gap-4 mb-6">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Bundle Price</span>
                  <span className="text-5xl font-heading font-bold text-primary">${bundlePrice}</span>
                </div>
                <div className="flex flex-col pb-2">
                  <span className="text-xl text-muted-foreground line-through decoration-destructive">$124.98</span>
                  <span className="text-sm text-green-500 font-bold uppercase animate-pulse">Save ${savings.toFixed(2)}</span>
                </div>
              </div>
              <Button size="lg" className="w-full h-16 text-xl font-heading uppercase tracking-widest rounded-none">
                Add Bundle to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
