import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "Orders & Shipping",
      items: [
        {
          question: "How long does shipping take?",
          answer: "We process orders within 24-48 hours. Standard shipping typically takes 3-5 business days within the US. You'll receive a tracking number via email as soon as your gear ships so you can follow its journey."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we ship primarily within the United States. We are working on expanding our shipping capabilities to bring ANCHR GEAR to the rest of the world soon."
        },
        {
          question: "What is your return policy?",
          answer: "We stand by our gear. If you're not satisfied, you can return unused items in their original packaging within 30 days of delivery. To initiate a return, simply contact our support team with your order number, and we'll guide you through the process."
        },
        {
          question: "What if my item arrives damaged?",
          answer: "If your gear arrives damaged or defective, please contact us immediately at anchrgear@gmail.com with photos of the issue. We will replace it at no cost to you."
        },
        {
          question: "Can I exchange for a different size?",
          answer: "Yes! If your gloves don't fit perfectly, we offer free exchanges for a different size within 30 days of purchase, provided the item is in unused condition."
        }
      ]
    },
    {
      category: "Product & Fit",
      items: [
        {
          question: "How do I choose the right size gloves?",
          answer: "Check out our Size Guide on the product page! We recommend measuring the circumference of your palm just below your knuckles. If you are between sizes, we generally suggest sizing up for a more comfortable fit."
        },
        {
          question: "Are the battle ropes adjustable?",
          answer: "Our Cordless Battle Ropes are designed with a fixed weight and length for optimal balance and ease of use. They are perfect for small spaces where traditional 50ft ropes just won't fit."
        },
        {
          question: "Can I wash the gloves?",
          answer: "Yes! We recommend hand washing your gloves with mild soap and cold water, then laying them flat to air dry. Do not put them in the dryer as high heat can damage the materials."
        }
      ]
    },
    {
      category: "Digital Downloads",
      items: [
        {
          question: "How do I access my digital products?",
          answer: "Your digital files (Strength Program or Meal Plan) are delivered automatically via email immediately after purchase. Look for an email with the subject line 'Your downloads are ready' or similar. Click the link inside to download your PDF files directly to your device."
        },
        {
          question: "I didn't receive my download email. What should I do?",
          answer: "First, please check your spam or promotions folder, as automated emails sometimes end up there. If you still can't find it after 10-15 minutes, please contact us at anchrgear@gmail.com with your order number, and we will manually resend your files immediately."
        },
        {
          question: "Do the download links expire?",
          answer: "For security reasons, download links may have a limit on the number of attempts. We recommend downloading your files and saving them to your device (phone, tablet, or computer) as soon as you receive them so you have permanent access."
        }
      ]
    },
    {
      category: "Workouts",
      items: [
        {
          question: "Do I need a lot of space to use the ropes?",
          answer: "Not at all. That's the beauty of our Cordless Battle Ropes. You only need enough room to stand and extend your arms. No anchors, no wall mounts, no 20-foot clearance required."
        },
        {
          question: "Is this gear suitable for beginners?",
          answer: "Absolutely. Whether you are just starting your journey or are a seasoned athlete, our gear is designed to scale with your intensity. You control the pace and the power."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Everything you need to know about our gear, shipping, and getting started.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-12">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 
                id={section.category === "Orders & Shipping" ? "shipping" : section.category === "Product & Fit" ? "returns" : undefined}
                className="text-2xl font-heading font-bold uppercase mb-6 border-l-4 border-primary pl-4 scroll-mt-24"
              >
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {section.items.map((faq, faqIdx) => (
                  <AccordionItem 
                    key={faqIdx} 
                    value={`${idx}-${faqIdx}`}
                    className="border border-border bg-card/30 px-6"
                  >
                    <AccordionTrigger className="text-left font-bold uppercase tracking-wide hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-24 p-8 md:p-12 bg-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-heading font-bold uppercase mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Can't find the answer you're looking for? Our team is here to help you get moving.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
            Contact Support <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
