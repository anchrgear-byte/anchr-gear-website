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
    author: "Regina",
    category: "Transformation",
    image: "/images/regina_transformation.jpg"
  },
  {
    id: "battle-rope-workouts",
    title: "5 At-Home Workouts With Battle Ropes That Actually Work",
    excerpt: "No gym? No problem. These 5 battle rope workouts will torch calories, build strength, and get you shredded from home.",
    date: "Jan 18, 2026",
    author: "Regina",
    category: "Workouts",
    image: "/images/pink-ropes.jpeg"
  },
  {
    id: "meal-prep-guide",
    title: "The Ultimate Guide to Meal Prepping for Weight Loss",
    excerpt: "Meal prep doesn't have to be complicated. This guide will show you how to prep a week's worth of healthy meals in under 2 hours.",
    date: "Jan 17, 2026",
    author: "Regina",
    category: "Nutrition",
    image: "/images/meal_plan_cover_1.jpg"
  },
  {
    id: "fitness-mistakes-after-40",
    title: "Are You Making These 5 Common Fitness Mistakes After 40?",
    excerpt: "Working out in your 40s is different. Avoid these 5 common mistakes and train smarter, not harder.",
    date: "Jan 16, 2026",
    author: "Regina",
    category: "Training Tips",
    image: "/images/fitness_mistakes_5.jpg"
  },
  {
    id: "hidden-sugars",
    title: "Why Your 'Healthy' Diet Isn't Working: The Truth About Hidden Sugars",
    excerpt: "You're eating 'healthy' but not losing weight. Here's why: hidden sugars are sabotaging your progress.",
    date: "Jan 15, 2026",
    author: "Regina",
    category: "Nutrition",
    image: "/images/hidden_sugars.jpg"
  },
  {
    id: "loose-skin-truth",
    title: "The Dirty Secret Nobody Tells You About Losing 160 Pounds",
    excerpt: "Loose skin. It's the elephant in the room that nobody wants to talk about. Here's my truth about what happens after massive weight loss.",
    date: "Jan 14, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/TiZNVjdIakX6.jpg"
  },
  {
    id: "911-dispatcher-burnout",
    title: "How 20 Years as a 911 Dispatcher Nearly Killed Me",
    excerpt: "The job that was supposed to save lives almost cost me mine. Here's how I escaped the burnout and found myself again.",
    date: "Jan 13, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/dispatcher_cartoon.jpg"
  },
  {
    id: "mental-weight-loss",
    title: "The Head Game: Why Losing Weight is More Mental Than Physical",
    excerpt: "Losing 160 pounds wasn't a physical challenge. It was a war fought in my mind, every single day.",
    date: "Jan 12, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/LmVZYqlbL13k.jpg"
  },
  {
    id: "rock-bottom-redemption",
    title: "From Rock Bottom to Redemption: My Plan to Build a New Life",
    excerpt: "At 48, I'm starting over from scratch. Here's my plan to build a laptop lifestyle and take control of my destiny.",
    date: "Jan 11, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/rock_bottom_blueprint.jpg"
  },
  {
    id: "fashion-after-weight-loss",
    title: "From Hiding to High Fashion: Finding My Style After 160 Pounds",
    excerpt: "For most of my life, fashion was a four-letter word. Losing 160 pounds changed everything about how I dress and see myself.",
    date: "Jan 10, 2026",
    author: "Regina",
    category: "Transformation",
    image: "/images/regina_fashion_transformation.jpg"
  },
  {
    id: "no-equipment-workout",
    title: "No Gym, No Problem: The Ultimate At-Home Bodyweight Workout",
    excerpt: "You don't need a gym membership or fancy equipment. All you need is your own body and the will to work.",
    date: "Jan 9, 2026",
    author: "Regina",
    category: "Workouts",
    image: "/images/qxiHDvLvXZFT.png"
  },
  {
    id: "resistance-band-workout",
    title: "The $10 Gym That Fits in Your Pocket: A Full-Body Resistance Band Workout",
    excerpt: "Resistance bands are the most underrated tool in fitness. Here's how to get a killer full-body workout for less than a pizza.",
    date: "Jan 8, 2026",
    author: "Regina",
    category: "Workouts",
    image: "/images/te5SztHLdokU.jpg"
  },
  {
    id: "outdoor-workouts",
    title: "Ditch the Gym, Find Your Playground: The Power of Outdoor Workouts",
    excerpt: "There's something about being outside that changes the game. The world is your gym - here's how to use it.",
    date: "Jan 7, 2026",
    author: "Regina",
    category: "Workouts",
    image: "/images/hero-bg-cordless-final.png"
  },
  {
    id: "hiit-workout",
    title: "20 Minutes to a New You: The Power of HIIT",
    excerpt: "You have 20 minutes. Everyone has 20 minutes. Here's how to use those 20 minutes to get a workout that's more effective than an hour on the treadmill.",
    date: "Jan 6, 2026",
    author: "Regina",
    category: "Workouts",
    image: "/images/blue-gloves-new.jpg"
  },
  {
    id: "recovery-workout",
    title: "The Most Important Workout You're Not Doing: The Art of Recovery",
    excerpt: "The magic doesn't happen in the gym. It happens when you're resting. Here's why recovery is the most important part of your training.",
    date: "Jan 5, 2026",
    author: "Regina",
    category: "Workouts",
    image: "/images/grey-gloves-new.jpg"
  },
  {
    id: "emotional-eating",
    title: "Are You Eating Your Feelings? How to Break Up with Emotional Eating",
    excerpt: "Sometimes that pint of ice cream isn't just ice cream. It's a therapist, a friend, a warm hug. Here's how to break the cycle.",
    date: "Jan 4, 2026",
    author: "Regina",
    category: "Nutrition",
    image: "/images/5eAlUIZNuAao.jpg"
  },
  {
    id: "protein-power",
    title: "The Unsung Hero of Weight Loss: Why Protein is Your Secret Weapon",
    excerpt: "If you want to lose weight, you need to make protein the star of your plate. Here's why it's the most powerful tool in your arsenal.",
    date: "Jan 3, 2026",
    author: "Regina",
    category: "Nutrition",
    image: "/images/strength_program_cover_1.jpg"
  },
  {
    id: "healthy-fats",
    title: "The Fat Fallacy: Why You Need to Eat Fat to Lose Fat",
    excerpt: "For decades we were told fat was the enemy. It was all a lie. Here's why you need to eat fat to lose fat.",
    date: "Jan 2, 2026",
    author: "Regina",
    category: "Nutrition",
    image: "/images/strength_program_cover_2.jpg"
  },
  {
    id: "hydration-hack",
    title: "The Easiest Weight Loss Hack You're Not Using",
    excerpt: "It's free, it's easy, and it's available to you right now. Water is one of the most effective and overlooked tools in your weight loss arsenal.",
    date: "Jan 1, 2026",
    author: "Regina",
    category: "Nutrition",
    image: "/images/strength_program_cover_v2_1.jpg"
  },
  {
    id: "mind-muscle-connection",
    title: "Stop Wasting Your Time in the Gym: The Mind-Muscle Connection",
    excerpt: "Are you actually training, or just going through the motions? The mind-muscle connection is the secret that separates amateurs from pros.",
    date: "Dec 31, 2025",
    author: "Regina",
    category: "Training Tips",
    image: "/images/strength_program_cover_v2_2.jpg"
  },
  {
    id: "progressive-overload",
    title: "The Secret to Getting Stronger (It's Not What You Think)",
    excerpt: "The secret to building muscle and breaking through plateaus is simple: progressive overload. Here's how to apply it to your training.",
    date: "Dec 30, 2025",
    author: "Regina",
    category: "Training Tips",
    image: "/images/strength_program_cover_v2_3.jpg"
  },
  {
    id: "consistency-over-intensity",
    title: "The Unsexy Secret to Jaw-Dropping Results",
    excerpt: "Everyone wants the magic bullet, the quick fix. But the real secret to success is boring, unsexy, and often overlooked: consistency.",
    date: "Dec 29, 2025",
    author: "Regina",
    category: "Training Tips",
    image: "/images/Black Gloves.jpg"
  },
  {
    id: "warmup-cooldown",
    title: "The Most Neglected Parts of Your Workout (That Are Also the Most Important)",
    excerpt: "You're probably skipping the two most important parts of your workout: the warm-up and the cool-down. Here's why they matter.",
    date: "Dec 28, 2025",
    author: "Regina",
    category: "Training Tips",
    image: "/images/Blue Gloves.jpg"
  },
  {
    id: "motivation-myth",
    title: "Motivation is a Myth: How to Show Up When You Don't Want To",
    excerpt: "Motivation is fleeting and unreliable. If you're waiting for it to strike, you'll be waiting forever. Here's what actually works.",
    date: "Dec 27, 2025",
    author: "Regina",
    category: "Training Tips",
    image: "/images/Grey Gloves.jpg"
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
