import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          {/* Abstract geometric shapes for brutalist feel */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform origin-top-right" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Our Mission</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-[0.9] mb-8 text-white">
              REBUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">THE FOUNDATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed border-l-4 border-primary pl-6">
              It’s not just about losing weight. It’s about what comes after. 
              Reclaiming your space, your time, and your body.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey / The Why */}
      <section className="py-24 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8">The Reality of <br/>Transformation</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-body">
                <p>
                  Losing 160 pounds is a battle. But the war doesn't end when the scale drops. 
                  After the weight is gone, you're left with a new challenge: rebuilding.
                </p>
                <p>
                  <strong className="text-white">We know the struggle of loose skin.</strong> We know the frustration of wanting to tone specific areas—especially the arms—without feeling self-conscious in a crowded gym.
                </p>
                <p>
                  ANCHR Gear wasn't born in a boardroom. It was born from the need to find a way to work out comfortably, effectively, and privately.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-black/20 border-2 border-white/10 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <Target className="w-24 h-24 text-primary mb-6 relative z-10" />
                <h3 className="text-3xl font-heading font-bold uppercase mb-2 relative z-10">Targeted Results</h3>
                <p className="text-muted-foreground relative z-10">Focus on problem areas like arms and core with precision resistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
        <div className="p-12 border-b md:border-b-0 md:border-r border-border bg-background hover:bg-accent/5 transition-colors">
          <h3 className="text-2xl font-heading font-bold uppercase mb-4 text-white">No Excuses</h3>
          <p className="text-muted-foreground font-body">
            "I don't have time." "The gym is too far." "I don't have space." 
            We removed every barrier. If you have room to stand, you have room to train.
          </p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-border bg-background hover:bg-accent/5 transition-colors">
          <h3 className="text-2xl font-heading font-bold uppercase mb-4 text-white">Comfort of Home</h3>
          <p className="text-muted-foreground font-body">
            Fitness is personal. It can be vulnerable. You deserve a space where you can focus on your movement, not on who's watching.
          </p>
        </div>
        <div className="p-12 bg-background hover:bg-accent/5 transition-colors">
          <h3 className="text-2xl font-heading font-bold uppercase mb-4 text-white">Simple & Effective</h3>
          <p className="text-muted-foreground font-body">
            We don't sell magic pills. We sell tools. Simple, durable gear designed to help you sweat, tone, and build.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="container relative z-10 px-4">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8">
            Start Your Rebuild
          </h2>
          <p className="text-xl md:text-2xl font-body max-w-2xl mx-auto mb-12 opacity-90">
            Join the movement. Grab your gear. Get to work.
          </p>
          <Button asChild size="lg" className="h-16 px-12 text-xl font-heading uppercase tracking-widest rounded-none bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all">
            <Link href="/shop">
              Shop The Collection <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
