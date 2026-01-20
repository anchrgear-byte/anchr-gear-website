import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Shield, Flame } from "lucide-react";
import { PowerBundle } from "@/components/PowerBundle";
import { DigitalTransformationBundle } from "@/components/DigitalTransformationBundle";
import { cn } from "@/lib/utils";

const FEATURED_ROPES = [
  { id: "rope-pink", name: "Pink", color: "bg-pink-500", img: "/images/pink-ropes.jpeg" },
  { id: "rope-grey", name: "Grey", color: "bg-gray-500", img: "/images/grey-ropes.jpeg" },
  { id: "rope-black", name: "Black", color: "bg-black", img: "/images/black-ropes.jpeg" },
];

export default function Home() {
  const [selectedFeaturedRope, setSelectedFeaturedRope] = useState(FEATURED_ROPES[0]);
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg-final-user.webp" 
            alt="Black Woman Cordless Battle Ropes Workout" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-6 text-white drop-shadow-lg">
              STRENGTH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WITHOUT</span> <br />
              THE CHAOS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mb-10 border-l-4 border-primary pl-6">
              Engineered for the grind. Heavy-duty cordless battle ropes built for real strength, not just cardio. 
              No gym. No crowds. No excuses.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-heading uppercase tracking-widest rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all">
                <Link href="/shop">
                  Shop Gear <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-xl font-heading uppercase tracking-widest rounded-none border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                <Link href="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Brutalist Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
        <div className="p-12 border-b md:border-b-0 md:border-r border-border bg-card hover:bg-accent/5 transition-colors group">
          <Zap className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-3xl font-heading font-bold uppercase mb-4">Space Saver</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            Traditional ropes need 20+ feet of space. ANCHR ropes need just enough room for you to stand. Perfect for apartments.
          </p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-border bg-card hover:bg-accent/5 transition-colors group">
          <Shield className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-3xl font-heading font-bold uppercase mb-4">No Anchor Point</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            Forget drilling into walls or wrapping around heavy poles. Our weighted inertia system creates resistance internally.
          </p>
        </div>
        <div className="p-12 bg-card hover:bg-accent/5 transition-colors group">
          <Flame className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-3xl font-heading font-bold uppercase mb-4">Silent & Safe</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            No loud slapping on the floor. Soft rubber tips protect your floors and keep your neighbors happy.
          </p>
        </div>
      </section>

      {/* Featured Product - Split Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
          <img 
            src={selectedFeaturedRope.img} 
            alt={`${selectedFeaturedRope.name} Battle Ropes`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-background">
          <span className="text-primary font-bold tracking-widest uppercase mb-4">Best Seller</span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 leading-none">
            Wireless <br /> Battle Ropes
          </h2>
          <p className="text-xl text-muted-foreground font-body mb-6 max-w-md">
            Experience the freedom of cordless resistance. Compact design fits in any bag.
          </p>
          
          {/* Color Selection */}
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Select Color: {selectedFeaturedRope.name}</span>
            <div className="flex gap-4">
              {FEATURED_ROPES.map((rope) => (
                <button
                  key={rope.id}
                  onClick={() => setSelectedFeaturedRope(rope)}
                  className={cn(
                    "w-10 h-10 rounded-full border-2 transition-all",
                    selectedFeaturedRope.id === rope.id ? "border-primary scale-110" : "border-transparent hover:scale-105"
                  )}
                  style={{ backgroundColor: rope.name.toLowerCase() === 'grey' ? 'grey' : rope.name.toLowerCase() }}
                  aria-label={`Select ${rope.name} rope`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex flex-col">
              <span className="text-4xl font-heading font-bold text-white">$89.99</span>
              <span className="text-xl font-heading font-bold text-muted-foreground line-through decoration-destructive decoration-2">$119.00</span>
            </div>
            <Button size="lg" className="h-14 px-8 text-lg font-heading uppercase tracking-widest rounded-none bg-white text-black hover:bg-primary hover:text-white transition-colors">
              Add to Cart
            </Button>
          </div>
        </div>
      </section>

      {/* Power Bundle Section */}
      <PowerBundle />

      {/* Digital Transformation Bundle */}
      <DigitalTransformationBundle />

      {/* Digital Plans Teaser - Coming Soon */}
      <section className="py-24 border-b border-border bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 border border-primary text-primary text-xs font-bold uppercase tracking-widest mb-6">Available Now</span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-6">
            Train Like <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">The Grind</span>
          </h2>
          <p className="text-xl text-gray-400 font-body max-w-2xl mx-auto mb-10">
            Comprehensive 12-week strength programs and high-protein meal plans designed specifically for rebuilding your body after weight loss.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Link href="/strength-program">
              <div className="bg-white/5 border border-white/10 p-8 text-left hover:border-primary/50 transition-colors cursor-pointer h-full group">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold uppercase mb-2 text-white group-hover:text-primary transition-colors">Rebuild Strength</h3>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-gray-400 text-sm mb-4">12-Week Home Program</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><Zap className="w-4 h-4 text-primary mr-2" /> Low Impact, High Intensity</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-primary mr-2" /> Minimal Equipment Needed</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-primary mr-2" /> Focus on Toning & Definition</li>
                </ul>
              </div>
            </Link>
            <Link href="/meal-plan">
              <div className="bg-white/5 border border-white/10 p-8 text-left hover:border-secondary/50 transition-colors cursor-pointer h-full group">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-heading font-bold uppercase mb-2 text-white group-hover:text-secondary transition-colors">Fuel The Grind</h3>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-secondary transition-colors" />
                </div>
                <p className="text-gray-400 text-sm mb-4">High-Protein Meal Guide</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><Flame className="w-4 h-4 text-secondary mr-2" /> 30+ Simple Recipes</li>
                  <li className="flex items-center"><Flame className="w-4 h-4 text-secondary mr-2" /> Weekly Shopping Lists</li>
                  <li className="flex items-center"><Flame className="w-4 h-4 text-secondary mr-2" /> Macro-Friendly Prep</li>
                </ul>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Start your transformation today</p>
            <Button asChild size="lg" className="h-14 px-10 text-lg font-heading uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              <Link href="/shop">
                Shop Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gloves Showcase - Marquee Style */}
      <section className="py-24 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">
            Get a Grip
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Premium fitness gloves designed for protection and performance.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[
            { img: "/images/black-gloves-new.jpg", name: "Stealth Black", price: "$34.99" },
            { img: "/images/pink-gloves-new.jpg", name: "Electric Pink", price: "$34.99" },
            { img: "/images/blue-gloves-new.jpg", name: "Cyan Blue", price: "$34.99" },
            { img: "/images/grey-gloves-new.jpg", name: "Concrete Grey", price: "$34.99" },
          ].map((product, i) => (
            <div key={i} className="group relative w-full sm:w-[300px] aspect-square bg-card border border-border overflow-hidden">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-heading font-bold uppercase text-white mb-2">{product.name}</h3>
                <p className="text-primary font-bold text-xl mb-6">{product.price}</p>
                <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">Simple By Design</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Battle rope training shouldn't require a gym, an anchor point, or 30 feet of space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Grip & Go", desc: "Pick up your pair of cordless battle ropes. No anchors, no setup, no wasted time. Just grab and start." },
              { step: "02", title: "Wave, Slam, Strengthen", desc: "Create waves, slams, and rotations with precision steel spring resistance. Feel the resistance build strength without strain." },
              { step: "03", title: "Train Anywhere", desc: "Your living room, backyard, hotel room, or office. No gym membership required. Your workout goes where you go." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 border border-border bg-card">
                <span className="absolute -top-6 left-8 text-6xl font-heading font-bold text-border/50">{item.step}</span>
                <h3 className="text-2xl font-heading font-bold uppercase mb-4 mt-4 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground font-body relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Routine Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <span className="font-bold tracking-widest uppercase opacity-80">Free Workout</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mt-2">10-Minute Routine</h2>
            </div>
            <div className="flex gap-8 mt-8 md:mt-0 text-center">
              <div>
                <span className="block text-4xl font-heading font-bold">10</span>
                <span className="text-sm uppercase tracking-widest opacity-80">Minutes</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-bold">150+</span>
                <span className="text-sm uppercase tracking-widest opacity-80">Calories</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-bold">6</span>
                <span className="text-sm uppercase tracking-widest opacity-80">Exercises</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Alternating Waves", time: "30 sec", desc: "Create alternating waves with each arm in a fluid motion" },
              { name: "Double Waves", time: "30 sec", desc: "Slam both ropes down simultaneously for power" },
              { name: "Lateral Whips", time: "30 sec", desc: "Whip ropes side to side engaging your core" },
              { name: "Jumping Slams", time: "30 sec", desc: "Jump while slamming ropes for full-body activation" },
              { name: "Snake Waves", time: "30 sec", desc: "Create snake-like waves along the ground" },
              { name: "Power Slams", time: "30 sec", desc: "Explosive overhead slams with maximum force" }
            ].map((exercise, i) => (
              <div key={i} className="bg-black/20 p-6 border border-white/10 hover:bg-black/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-heading font-bold text-xl uppercase">{i + 1}. {exercise.name}</span>
                  <span className="bg-white text-primary px-2 py-1 text-xs font-bold rounded-sm">{exercise.time}</span>
                </div>
                <p className="text-white/80 text-sm">{exercise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
