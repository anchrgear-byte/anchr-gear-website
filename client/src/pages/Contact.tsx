import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    toast.success("Message sent! We'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Questions about your order? Need workout advice? We're here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-heading font-bold uppercase mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are a small, passionate team dedicated to helping you reach your fitness goals. 
                Whether you have a question about our gear or just want to share your transformation story, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase mb-1">Email Us</h3>
                    <p className="text-muted-foreground">anchrgear@gmail.com</p>
                    <p className="text-xs text-muted-foreground mt-1">We usually reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase mb-1">Support Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday</p>
                    <p className="text-muted-foreground">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase mb-1">Location</h3>
                    <p className="text-muted-foreground">Based in the USA</p>
                    <p className="text-muted-foreground">Shipping Nationwide</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-10">
            <h2 className="text-2xl font-heading font-bold uppercase mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">Name</label>
                  <Input id="name" placeholder="Your name" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest">Subject</label>
                <Input id="subject" placeholder="How can we help?" required className="bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us what's on your mind..." 
                  className="min-h-[150px] bg-background resize-none" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full h-12 uppercase font-heading font-bold tracking-widest text-lg">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
