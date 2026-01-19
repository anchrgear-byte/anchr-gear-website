import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            The rules of the grind. Please read carefully before using our site or products.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">1. Acceptance of Terms</h3>
          <p className="text-muted-foreground mb-8">
            By accessing and using this website (anchrgear.com) and purchasing our products, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">2. Fitness Disclaimer</h3>
          <p className="text-muted-foreground mb-8">
            ANCHR GEAR products are designed for high-intensity exercise. By using our equipment, you acknowledge that exercise carries inherent risks of physical injury. You should consult with a physician before beginning any new exercise program. ANCHR GEAR is not liable for any injuries or damages resulting from the use or misuse of our products.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">3. Product Use & Safety</h3>
          <p className="text-muted-foreground mb-8">
            Our gear is built tough, but it must be used correctly. Inspect your equipment before every use. Do not use if you see signs of wear, damage, or defect. Keep children and pets away from equipment during use.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">4. Orders & Payments</h3>
          <p className="text-muted-foreground mb-8">
            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. Prices for our products are subject to change without notice.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">5. Intellectual Property</h3>
          <p className="text-muted-foreground mb-8">
            All content on this site, including text, graphics, logos, images, and software, is the property of ANCHR GEAR and is protected by copyright laws. You may not use our content without express written permission.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">6. Governing Law</h3>
          <p className="text-muted-foreground mb-8">
            These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">7. Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            Questions about the Terms of Service should be sent to us at <a href="mailto:anchrgear@gmail.com" className="text-primary hover:underline">anchrgear@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
