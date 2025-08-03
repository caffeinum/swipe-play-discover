import { Button } from "@/components/ui/button";
import { Play, Smartphone, Zap } from "lucide-react";
import heroGames from "@/assets/hero-games.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-glow-gradient opacity-30 animate-pulse-glow"></div>
      
      {/* Floating game elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-game-coral rounded-xl animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-game-blue rounded-full animate-float delay-75 opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-game-yellow rounded-lg animate-float delay-150 opacity-20"></div>
      <div className="absolute bottom-20 right-16 w-14 h-14 bg-game-purple rounded-xl animate-float delay-300 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent leading-tight">
              Discover Great Games, Fast
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Swipe through instant-play games in seconds. No downloads, no ads, no friction. 
              Just pure gameplay in a TikTok-style feed designed for gamers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://rork-casual-game-flip.vercel.app/', '_blank')}
              >
                <Play className="w-5 h-5" />
                Start Playing Now
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Smartphone className="w-5 h-5" />
                Get the App
              </Button>
            </div>

            {/* Features quick list */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-game-yellow" />
                <span>Instant Play</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-game-coral" />
                <span>No Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-game-blue" />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-slide-up delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img 
                src={heroGames} 
                alt="Gaming interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
              {/* Game controller icon overlay */}
              <img 
                src="/icon.png" 
                alt="Game controller" 
                className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32 opacity-90 drop-shadow-2xl animate-float"
              />
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-4 -right-4 bg-card-gradient p-4 rounded-2xl shadow-glow border border-white/10 backdrop-blur-sm animate-float">
              <div className="text-2xl font-bold text-game-coral">5sec</div>
              <div className="text-xs text-muted-foreground">to fun</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card-gradient p-4 rounded-2xl shadow-blue-glow border border-white/10 backdrop-blur-sm animate-float delay-150">
              <div className="text-2xl font-bold text-game-blue">1000+</div>
              <div className="text-xs text-muted-foreground">games</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;