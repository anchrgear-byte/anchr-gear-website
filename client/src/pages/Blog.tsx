import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock blog data - in a real app this would come from a CMS or API
const BLOG_POSTS = [
  {
    id: "how-i-lost-160-pounds",
    title: "How I Lost 160 Pounds: The Truth About Weight Loss Surgery",
    excerpt: "The raw, honest truth about my weight loss journey - including the surgery, the blood clot, and the daily struggle to keep the weight off.",
    date: "Jan 19, 2026",
    author: "Reggie",
    category: "Transformation",
    image: "/images/hero-bg-final-user.png"
  },
  {
    id: "battle-rope-workouts",
    title: "5 At-Home Workouts With Battle Ropes That Actually Work",
    excerpt: "No gym? No problem. These 5 battle rope workouts will torch calories, build strength, and get you shredded from home.",
    date: "Jan 18, 2026",
    author: "Reggie",
    category: "Workouts",
    image: "/images/pink-ropes.jpeg"
  },
  {
    id: "meal-prep-guide",
    title: "The Ultimate Guide to Meal Prepping for Weight Loss",
    excerpt: "Meal prep doesn't have to be complicated. This guide will show you how to prep a week's worth of healthy meals in under 2 hours.",
    date: "Jan 17, 2026",
    author: "Reggie",
    category: "Nutrition",
    image: "/images/bundle-meal-prep.jpg"
  },
  {
    id: "fitness-mistakes-after-40",
    title: "Are You Making These 5 Common Fitness Mistakes After 40?",
    excerpt: "Working out in your 40s is different. Avoid these 5 common mistakes and train smarter, not harder.",
    date: "Jan 16, 2026",
    author: "Reggie",
    category: "Training Tips",
    image: "/images/black-gloves-new.jpg"
  },
  {
    id: "hidden-sugars",
    title: "Why Your 'Healthy' Diet Isn't Working: The Truth About Hidden Sugars",
    excerpt: "You're eating 'healthy' but not losing weight. Here's why: hidden sugars are sabotaging your progress.",
    date: "Jan 15, 2026",
    author: "Reggie",
    category: "Nutrition",
    image: "/images/hero-bg-final-user.png"
  }
];

const CATEGORIES = ["All", "Transformation", "Workouts", "Nutrition", "Training Tips"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
            The <span className="text-primary">Grind</span> Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Real talk, workout tips, and stories from the trenches. 
            No excuses. Just results.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-border bg-card py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="uppercase font-bold tracking-widest"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
