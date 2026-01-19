import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

// Mock data - same as listing page for now
const BLOG_POSTS = {
  "rebuilding-strength-after-weight-loss": {
    title: "Rebuilding Strength After Losing 160lbs",
    date: "Jan 10, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/hero-bg-final-user.png",
    content: `
      <p class="lead">Losing 160 pounds changed my life. But looking in the mirror afterwards was a different kind of shock. The loose skin, the loss of muscle mass—it wasn't the "perfect body" I had imagined. It was a new canvas.</p>
      
      <h3>The Reality of "After"</h3>
      <p>We see the before and after photos on Instagram, but we rarely talk about the "during." The phase where you're figuring out who you are in this new body. For me, that meant dealing with loose skin and realizing that skinny doesn't equal strong.</p>
      
      <p>I didn't want to just be smaller. I wanted to be powerful. I wanted to fill out my skin with muscle, not fat. That's where the real grind started.</p>

      <h3>Why Home Workouts Saved Me</h3>
      <p>Going to the gym can be intimidating, especially when you're self-conscious about your body. I needed a way to work out that was private, effective, and didn't require a ton of equipment. That's when I discovered the power of battle ropes and weighted resistance.</p>

      <p>Battle ropes are brutal. They don't care how much you weigh or what you're wearing. They just demand effort. And in return, they give you arms that look sculpted and a core that feels like steel.</p>

      <h3>No Excuses</h3>
      <p>I created ANCHR Gear because I wanted to give people like me—people who are fighting for their health, dealing with body image issues, or just trying to get stronger—the tools to do it on their own terms.</p>
      
      <p>You don't need a gym membership. You don't need perfect skin. You just need to show up. Every single day.</p>
    `
  },
  "why-cordless-ropes": {
    title: "Why Cordless Ropes Are a Game Changer",
    date: "Jan 05, 2026",
    author: "Team ANCHR",
    category: "Gear Guide",
    image: "/images/pink-ropes.jpeg",
    content: `
      <p class="lead">Traditional battle ropes are awesome. But let's be real—who has 50 feet of empty space in their living room? Enter the cordless battle rope.</p>

      <h3>All the Burn, None of the Bulk</h3>
      <p>Cordless ropes give you the same high-intensity interval training (HIIT) benefits as traditional ropes without the footprint. By using weighted ends, they simulate the resistance of a long rope, forcing your muscles to stabilize and drive through the movement.</p>

      <h3>Perfect for Small Spaces</h3>
      <p>Whether you're in a studio apartment, a dorm room, or just have a crowded garage, cordless ropes let you get a full-body workout in a 4x4 foot space. No anchors to drill into the wall. No tripping hazards.</p>

      <h3>Silent but Deadly</h3>
      <p>One of the biggest complaints about home workouts is the noise. Jumping jacks shake the floor. Treadmills hum. Cordless ropes are virtually silent. You can get a killer workout in while the baby sleeps or while watching TV.</p>
    `
  },
  "5-min-arm-blaster": {
    title: "5-Minute Arm Blaster for Busy Days",
    date: "Dec 28, 2025",
    author: "Team ANCHR",
    category: "Workouts",
    image: "/images/black-gloves-new.jpg",
    content: `
      <p class="lead">Short on time? That's an excuse, not a reason. You can torch your arms and shoulders in just 5 minutes with this high-intensity circuit.</p>

      <h3>The Setup</h3>
      <p>Grab your ANCHR Cordless Ropes and strap on your Gloves for Weights. Set a timer for 5 minutes. We're doing 45 seconds of work, 15 seconds of rest.</p>

      <h3>The Circuit</h3>
      <ol>
        <li><strong>Alternating Waves:</strong> Keep your elbows tucked and drive the movement from your shoulders. Fast and furious.</li>
        <li><strong>Double Slams:</strong> Raise both hands high and slam them down (without hitting the floor). Engage your core.</li>
        <li><strong>Outward Circles:</strong> Rotate your arms outwards. This hits the rear delts and upper back.</li>
        <li><strong>Inward Circles:</strong> Switch directions. Feel the burn in your chest and front delts.</li>
        <li><strong>Power Jacks:</strong> Jumping jacks with the ropes. Coordinate your arms and legs for a full-body finisher.</li>
      </ol>

      <p>Repeat this circuit twice if you have 10 minutes. Otherwise, go all out for one round and get on with your day.</p>
    `
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id;
  const post = postId ? BLOG_POSTS[postId as keyof typeof BLOG_POSTS] : null;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="h-[40vh] md:h-[50vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-12 bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto">
            <span className="bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 tracking-widest mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-4 max-w-4xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-300 space-x-6 uppercase tracking-wider font-bold">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 font-bold uppercase text-sm tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to The Grind
          </Link>
          
          <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-heading prose-headings:uppercase prose-headings:font-bold 
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground prose-strong:font-bold
              prose-li:text-muted-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center">
              <Share2 className="w-4 h-4 mr-2" /> Share this post
            </h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          {/* About Widget */}
          <div className="bg-card border border-border p-8">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">About The Author</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Regina is the founder of ANCHR Gear. After losing 160lbs, she's on a mission to help others build strength and confidence from the comfort of their own homes.
            </p>
            <Link href="/about">
              <Button variant="link" className="p-0 h-auto font-bold uppercase tracking-widest text-primary hover:no-underline">
                Read Full Story &rarr;
              </Button>
            </Link>
          </div>

          {/* Shop Widget */}
          <div className="bg-primary/10 border border-primary/20 p-8 text-center">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">Ready to Grind?</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Get the gear used in this workout. No excuses.
            </p>
            <Link href="/shop">
              <Button className="w-full uppercase font-bold tracking-widest">
                Shop Gear
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
