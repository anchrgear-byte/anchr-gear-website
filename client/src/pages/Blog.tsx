import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock blog data - in a real app this would come from a CMS or API
const BLOG_POSTS = [
  {
    id: "rebuilding-strength-after-weight-loss",
    title: "Rebuilding Strength After Losing 160lbs",
    excerpt: "The journey doesn't end when the weight is gone. In fact, that's when the real work begins. Here's how to build muscle and confidence with loose skin.",
    date: "Jan 10, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/hero-bg-final-user.png"
  },
  {
    id: "why-cordless-ropes",
    title: "Why Cordless Ropes Are a Game Changer",
    excerpt: "No space? No problem. Discover why wireless battle ropes are the ultimate tool for high-intensity interval training at home.",
    date: "Jan 05, 2026",
    author: "Team ANCHR",
    category: "Gear Guide",
    image: "/images/pink-ropes.jpeg"
  },
  {
    id: "5-min-arm-blaster",
    title: "5-Minute Arm Blaster for Busy Days",
    excerpt: "You don't need an hour at the gym to get a killer arm workout. Grab your gloves and ropes for this quick, intense circuit.",
    date: "Dec 28, 2025",
    author: "Team ANCHR",
    category: "Workouts",
    image: "/images/black-gloves-new.jpg"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
            The <span className="text-primary">Grind</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Real talk, workout tips, and stories from the trenches. 
            No excuses. Just results.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group flex flex-col h-full border border-border bg-card hover:border-primary transition-colors duration-300">
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4 uppercase tracking-wider font-bold">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold uppercase mb-3 leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full uppercase font-bold tracking-widest group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA */}
      <div className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold uppercase mb-4">
            Don't Miss a Beat
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our community to get the latest workouts, gear drops, and motivation delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-grow h-12 px-4 bg-background border border-border focus:border-primary focus:outline-none uppercase placeholder:text-muted-foreground/50"
            />
            <Button className="h-12 px-8 uppercase font-bold tracking-widest">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
