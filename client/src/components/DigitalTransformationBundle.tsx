import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Zap, Flame, ArrowRight } from "lucide-react";

export function DigitalTransformationBundle() {
  return (
    <section className="py-24 border-b border-border bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Accent Gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: The Offer */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/50 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" />
              <span>Limited Time Offer</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-none">
              Total <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformation</span> <br />
              Bundle
            </h2>
            
            <p className="text-xl text-gray-400 font-body max-w-md">
              Get the complete blueprint. Combine the 12-Week Strength Program with the Fuel The Grind Meal Plan and save 20%.
            </p>

            <div className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-sm">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-sm">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading font-bold uppercase">12-Week Strength Program</span>
                </div>
                <span className="text-gray-400 line-through">$29.99</span>
              </div>
              
              <div className="flex justify-between items-center pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-sm">
                    <Flame className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-heading font-bold uppercase">Fuel The Grind Meal Plan</span>
                </div>
                <span className="text-gray-400 line-through">$29.99</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-bold text-white">$47.99</span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Save $12.00 Instantly</span>
              </div>
              <Button asChild size="lg" className="h-16 px-10 text-xl font-heading uppercase tracking-widest rounded-none bg-white text-black hover:bg-primary hover:text-white transition-all w-full sm:w-auto">
                <a href="https://anchrgear.com/products/full-body-bundle">
                  Get The Bundle <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side: The Visual */}
          <div className="relative">
            <div className="relative z-10 bg-zinc-900 border border-white/10 p-8 md:p-12 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              {/* Product Covers */}
              <div className="flex justify-center gap-4 mb-8 -mt-4">
                <div className="relative w-32 aspect-[2/3] shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/images/strength_program_cover_v2_2.webp" 
                    alt="Strength Program Cover" 
                    className="w-full h-full object-cover rounded-sm border border-white/10"
                  />
                </div>
                <div className="relative w-32 aspect-[2/3] shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
                  <img 
                    src="/images/meal_plan_cover_1.webp" 
                    alt="Meal Plan Cover" 
                    className="w-full h-full object-cover rounded-sm border border-white/10"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-heading font-bold uppercase mb-8 text-center">What's Inside</h3>
              
              <ul className="space-y-6">
                {[
                  "12-Week Day-by-Day Workout Schedule",

                  "3-Phase Progression (Foundation -> Power)",
                  "30+ High-Protein Recipes",
                  "Weekly Shopping Lists & Prep Guide",
                  "Macro Cheat Sheet for Your Body Type"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-green-500/20 rounded-full">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-lg font-body text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-widest">Instant Digital Download • PDF Format</p>
                <p className="text-xs text-primary font-bold mt-2 uppercase tracking-widest">Delivered via email immediately after purchase</p>
              </div>
            </div>
            
            {/* Decorative Elements behind card */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-white/5 -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-stripes-white opacity-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
