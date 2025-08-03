import { Card } from "@/components/ui/card";
import { Zap, Heart, Brain, Timer, Gamepad2, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Gratification",
      description: "Games that spark joy in 5 seconds or less. No tutorials, no waiting, just pure fun.",
      color: "text-game-yellow",
      gradient: "from-game-yellow/20 to-transparent"
    },
    {
      icon: Heart,
      title: "Vibe-Coded Curation",
      description: "AI-curated games that respect your time and intelligence. No pay-to-win, no energy systems.",
      color: "text-game-coral",
      gradient: "from-game-coral/20 to-transparent"
    },
    {
      icon: Brain,
      title: "Smart Algorithm",
      description: "AI that learns your gaming mood. Whether you want zen puzzles or adrenaline rushes.",
      color: "text-game-purple",
      gradient: "from-game-purple/20 to-transparent"
    },
    {
      icon: Timer,
      title: "Context Aware",
      description: "Waiting for the bus? Here's a 2-minute brain teaser. Lunch break? Try this chill puzzle.",
      color: "text-game-blue",
      gradient: "from-game-blue/20 to-transparent"
    },
    {
      icon: Gamepad2,
      title: "Mobile Optimized",
      description: "Every game is crafted for mobile play. Touch controls that feel natural and responsive.",
      color: "text-game-coral-light",
      gradient: "from-game-coral-light/20 to-transparent"
    },
    {
      icon: Sparkles,
      title: "Hidden Gems",
      description: "Discover indie experiments and classic games reimagined. Your personal game sommelier.",
      color: "text-game-yellow",
      gradient: "from-game-yellow/20 to-transparent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Why Casual Game Flip?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another game platform. We're revolutionizing how you discover and play games, 
            making every swipe a delightful surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative p-8 bg-card-gradient border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-card group overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;