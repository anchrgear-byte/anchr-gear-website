import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, ExternalLink, CheckCircle, Zap, DollarSign, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Showcase() {
  const triggerPopup = () => {
    // Clear storage to force popup to show
    localStorage.removeItem('anchr_exit_intent_seen');
    localStorage.removeItem('anchr_exit_intent_timestamp');
    
    // Dispatch event to trigger popup
    window.dispatchEvent(new Event('mouseout'));
    alert('Popup trigger reset! Move your mouse out of the window (or switch tabs) to see it.');
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="container max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Project <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A summary of the latest updates, features, and strategic improvements for ANCHR Gear.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" />
                New Pages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link href="/blog">
                  <a className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-accent transition-colors group">
                    <span className="font-medium">The Grind (Blog)</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Link>
                <Link href="/faq">
                  <a className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-accent transition-colors group">
                    <span className="font-medium">FAQ & Support</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-accent transition-colors group">
                    <span className="font-medium">Contact Us</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Interactive Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-background border border-border/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Exit-Intent Popup</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Triggers when user leaves. Shows "10% Off" or "Cart Abandonment" message.
                </p>
                <Button onClick={triggerPopup} size="sm" className="w-full">
                  Reset & Test Popup
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Power Bundle</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Enhanced</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  High-visibility section on homepage with direct footer link.
                </p>
                <Link href="/#power-bundle">
                  <Button variant="outline" size="sm" className="w-full">
                    View Bundle
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Strategy Wins
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-bold">Pricing Validated</p>
                    <p className="text-sm text-muted-foreground">
                      $34.99 confirmed as "Premium Essential" sweet spot.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-bold">Terminology Fixed</p>
                    <p className="text-sm text-muted-foreground">
                      "Gloves for Weights" standardized across site.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-bold">Author Identity</p>
                    <p className="text-sm text-muted-foreground">
                      Updated to "Regina" with correct bio/photos.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-primary pl-4">
            Recent Updates Log
          </h2>
          <div className="grid gap-4">
            {[
              {
                title: "Blog Section Launch",
                desc: "Created 'The Grind' with transformation stories and workout tips. Fixed nested link errors.",
                date: "Today"
              },
              {
                title: "FAQ Expansion",
                desc: "Added detailed Shipping & Returns policies. Fixed navigation issues.",
                date: "Today"
              },
              {
                title: "Cart Abandonment Logic",
                desc: "Upgraded popup to detect cart items and prioritize saving the sale over lead gen.",
                date: "Today"
              },
              {
                title: "Shopify Integration Plan",
                desc: "Identified API blocker. Strategy set to create fresh store for full control.",
                date: "Pending Tomorrow"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/50">
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-accent px-2 py-1 rounded">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
