import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Your privacy is important. Here's how we protect your data.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">1. Information We Collect</h3>
          <p className="text-muted-foreground mb-8">
            When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as "Order Information."
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">2. How We Use Your Information</h3>
          <p className="text-muted-foreground mb-8">
            We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">3. Sharing Your Personal Information</h3>
          <p className="text-muted-foreground mb-8">
            We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store. We also use Google Analytics to help us understand how our customers use the Site.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">4. Data Retention</h3>
          <p className="text-muted-foreground mb-8">
            When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">5. Changes</h3>
          <p className="text-muted-foreground mb-8">
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
          </p>

          <h3 className="text-2xl font-heading font-bold uppercase text-foreground mb-4">6. Contact Us</h3>
          <p className="text-muted-foreground mb-8">
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:anchrgear@gmail.com" className="text-primary hover:underline">anchrgear@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
