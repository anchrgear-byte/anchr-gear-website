import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Utensils, ShoppingCart, Clock, Flame, Leaf } from "lucide-react";

export default function MealPlan() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img 
            src="/images/hero-bg-final-user.png" 
            alt="Healthy Meal Prep Background" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-20" />
        </div>

        <div className="container relative z-30 px-4 text-center">
          <Link href="/">
            <Button variant="link" className="text-gray-400 hover:text-primary mb-8 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          
          <span className="inline-block py-1 px-3 border border-secondary text-secondary text-xs font-bold uppercase tracking-widest mb-6 bg-black/50 backdrop-blur-sm">
            Available Now
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tighter mb-6 text-white">
            Fuel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">The Grind</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-body max-w-3xl mx-auto mb-10 leading-relaxed">
            High-protein, macro-optimized meal plans designed to fuel your ANCHR battle rope workouts and rebuild your body. No bland diets. Just real food for real results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-heading uppercase tracking-widest rounded-none bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="https://anchrgear.com/products/fuel-the-grind-meal-plan">
                Start Now - $19.99
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold uppercase mb-6">Eat to Win. <br />Not to Starve.</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Most diets fail because they focus on deprivation. We focus on fueling. Your body is a machine, and it needs the right fuel to perform.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                This isn't about counting every calorie until you go crazy. It's about understanding macros, prioritizing protein to rebuild muscle broken down during your workouts, and prepping meals that actually taste good so you can stick to the plan long enough to see the change. This meal plan is specifically designed to provide the energy you need to crush your battle rope workouts and the nutrients you need to recover and build a stronger, leaner physique.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full"><Utensils className="h-6 w-6 text-secondary" /></div>
                  <span className="font-bold uppercase text-sm">Real Food</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full"><ShoppingCart className="h-6 w-6 text-secondary" /></div>
                  <span className="font-bold uppercase text-sm">Easy Prep</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full"><Flame className="h-6 w-6 text-secondary" /></div>
                  <span className="font-bold uppercase text-sm">Fat Burning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full"><Clock className="h-6 w-6 text-secondary" /></div>
                  <span className="font-bold uppercase text-sm">Time Saving</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] border border-border bg-black/5">
               {/* Placeholder for a meal prep visual or mockup */}
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-heading text-6xl font-bold uppercase -rotate-12">
                 Eat Clean
               </div>
               <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Plan Structure */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">What's Inside</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              More than just recipes. A complete system for nutritional success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="border border-border bg-card p-8 hover:border-secondary transition-colors group">
              <div className="text-6xl font-heading font-bold text-border/30 mb-4 group-hover:text-secondary/20 transition-colors">01</div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-2">Macro Mastery</h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-6">The Science</p>
              <p className="text-muted-foreground mb-6">
                Learn exactly how much protein, carbs, and fats you need to build muscle while shedding fat. No guesswork.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Personalized macro calculator
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Protein timing guide
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Carb cycling basics
                </li>
              </ul>
            </div>

            {/* Component 2 */}
            <div className="border border-border bg-card p-8 hover:border-secondary transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 uppercase">Most Popular</div>
              <div className="text-6xl font-heading font-bold text-border/30 mb-4 group-hover:text-secondary/20 transition-colors">02</div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-2">Weekly Prep</h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-6">The System</p>
              <p className="text-muted-foreground mb-6">
                Step-by-step guides to prepping a week's worth of healthy meals in under 2 hours. Save time, save money.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Shopping lists included
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Batch cooking secrets
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Storage & reheating tips
                </li>
              </ul>
            </div>

            {/* Component 3 */}
            <div className="border border-border bg-card p-8 hover:border-secondary transition-colors group">
              <div className="text-6xl font-heading font-bold text-border/30 mb-4 group-hover:text-secondary/20 transition-colors">03</div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-2">30+ Recipes</h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-6">The Food</p>
              <p className="text-muted-foreground mb-6">
                Delicious, high-protein recipes that don't taste like "diet food." From breakfast bowls to post-workout feasts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> 5-ingredient meals
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> High-protein snacks
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-secondary mt-1 shrink-0" /> Cheat meal alternatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-border bg-zinc-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">How do I receive the meal plan?</h3>
              <p className="text-gray-400 leading-relaxed">
                Immediately after purchase, you will receive an email with a secure download link. You can save the PDF to your phone, tablet, or computer for instant access anywhere.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">Are the recipes complicated?</h3>
              <p className="text-gray-400 leading-relaxed">
                Not at all. The "Fuel The Grind" philosophy is about efficiency. Most recipes use 5 ingredients or less and can be prepped in bulk to save you time during the week.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">Is this a physical book?</h3>
              <p className="text-gray-400 leading-relaxed">
                No, this is a digital PDF product. This allows you to carry the entire plan, including shopping lists and recipes, right on your phone while you're at the grocery store.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">Do I need to count calories?</h3>
              <p className="text-gray-400 leading-relaxed">
                We provide a "Macro Mastery" guide to help you understand your needs, but the plan also includes a simple "Hand Method" for portion control if you prefer not to weigh every gram of food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">Fuel Your Ambition</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Instant digital download. Get the full high-protein meal plan and start fueling your results today.
          </p>
          <div className="flex flex-col items-center max-w-md mx-auto gap-4">
            <Button asChild size="lg" className="w-full h-14 text-lg font-heading uppercase tracking-widest rounded-none bg-black text-white hover:bg-black/80 border-2 border-black">
              <a href="https://anchrgear.com/products/fuel-the-grind-meal-plan">
                Buy Meal Plan - $19.99
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
