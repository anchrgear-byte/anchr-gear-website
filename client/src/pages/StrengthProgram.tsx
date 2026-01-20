import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check, Dumbbell, Calendar, Target, Zap } from "lucide-react";

export default function StrengthProgram() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img 
            src="/images/hero-bg-final-user.webp" 
            alt="Strength Training Background" 
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
          
          <span className="inline-block py-1 px-3 border border-primary text-primary text-xs font-bold uppercase tracking-widest mb-6 bg-black/50 backdrop-blur-sm">
            Available Now
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tighter mb-6 text-white">
            Rebuild <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Strength</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-body max-w-3xl mx-auto mb-10 leading-relaxed">
            The definitive 12-week home transformation program designed to build real muscle, burn fat, and forge mental toughness using your ANCHR battle ropes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-heading uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://anchrgear.com/products/12-week-strength-program">
                Start Now - $29.99
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
              <h2 className="text-4xl font-heading font-bold uppercase mb-6">No Gym. <br />No Excuses.</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                You don't need fancy machines or a $100/month membership to change your body. You need gravity, intensity, and a plan.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                This program is built on the principles of progressive overload using your ANCHR battle ropes, dumbbells, and your own bodyweight. It's designed for those who are ready to grind in silence and let their results make the noise. Each phase is specifically designed to leverage the unique resistance of your cordless battle ropes to build explosive power and cardiovascular endurance simultaneously.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full"><Dumbbell className="h-6 w-6 text-primary" /></div>
                  <span className="font-bold uppercase text-sm">Minimal Gear</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full"><Calendar className="h-6 w-6 text-primary" /></div>
                  <span className="font-bold uppercase text-sm">12 Weeks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full"><Target className="h-6 w-6 text-primary" /></div>
                  <span className="font-bold uppercase text-sm">Goal Focused</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full"><Zap className="h-6 w-6 text-primary" /></div>
                  <span className="font-bold uppercase text-sm">High Intensity</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] border border-border bg-black/5">
               {/* Placeholder for a program visual or mockup */}
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-heading text-6xl font-bold uppercase rotate-12">
                 The Grind
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Curriculum */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">The Curriculum</h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Three phases. Four weeks each. One goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="border border-border bg-card p-8 hover:border-primary transition-colors group">
              <div className="text-6xl font-heading font-bold text-border/30 mb-4 group-hover:text-primary/20 transition-colors">01</div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-2">Foundation</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">Weeks 1-4</p>
              <p className="text-muted-foreground mb-6">
                Master the movements. Build core stability. Establish the mind-muscle connection necessary for growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Form correction & posture
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Core activation drills
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Endurance baselines
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="border border-border bg-card p-8 hover:border-primary transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase">Most Critical</div>
              <div className="text-6xl font-heading font-bold text-border/30 mb-4 group-hover:text-primary/20 transition-colors">02</div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-2">Hypertrophy</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">Weeks 5-8</p>
              <p className="text-muted-foreground mb-6">
                Increase the volume. Time under tension. This is where the muscle is built and the metabolism ignites.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> High-volume sets
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Progressive overload
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Compound movements
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="border border-border bg-card p-8 hover:border-primary transition-colors group">
              <div className="text-6xl font-heading font-bold text-border/30 mb-4 group-hover:text-primary/20 transition-colors">03</div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-2">Power & Shred</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">Weeks 9-12</p>
              <p className="text-muted-foreground mb-6">
                Explosive power. High-intensity conditioning. Strip away the fat to reveal the work you've put in.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Plyometrics & Battle Ropes
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Metabolic conditioning
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> Peak performance testing
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
              <h3 className="text-xl font-bold text-white mb-3">How do I receive the program?</h3>
              <p className="text-gray-400 leading-relaxed">
                Immediately after purchase, you will receive an email with a secure download link. You can save the PDF to your phone, tablet, or computer for instant access anywhere.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">Do I need a gym membership?</h3>
              <p className="text-gray-400 leading-relaxed">
                No. This program is specifically designed for home workouts using minimal equipment (dumbbells, battle ropes, and bodyweight). No crowded gyms required.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">Is this a physical book?</h3>
              <p className="text-gray-400 leading-relaxed">
                No, this is a digital PDF product. This allows us to include clickable video links and keeps the cost down so you can start training immediately without waiting for shipping.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold text-white mb-3">What if I'm a beginner?</h3>
              <p className="text-gray-400 leading-relaxed">
                The program includes a "Foundation Phase" (Weeks 1-4) specifically designed to build your stability and form before increasing the intensity. It is suitable for all fitness levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">Ready to Rebuild?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Instant digital download. Get the full 12-week program and start your transformation today.
          </p>
          <div className="flex flex-col items-center max-w-md mx-auto gap-4">
            <Button asChild size="lg" className="w-full h-14 text-lg font-heading uppercase tracking-widest rounded-none bg-black text-white hover:bg-black/80 border-2 border-black">
              <a href="https://anchrgear.com/products/12-week-strength-program">
                Buy Program - $29.99
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
