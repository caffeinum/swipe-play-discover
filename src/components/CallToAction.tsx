import { Button } from "@/components/ui/button";
import { Play, Download, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-glow-gradient opacity-30 animate-pulse-glow"></div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-game-yellow rounded-full animate-float delay-75 opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full animate-float delay-150 opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-game-yellow rounded-full animate-float delay-300 opacity-60"></div>
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <Sparkles className="w-16 h-16 text-game-yellow mx-auto mb-8 animate-pulse-glow" />
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Transform
            <br />
            <span className="text-game-yellow">Game Discovery?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of gamers who've already discovered their next favorite game. 
            Because finding great games should be as fun as playing them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="glass" 
              size="lg" 
              className="text-xl px-12 py-8 bg-white/20 hover:bg-white/30 border-white/30"
              onClick={() => window.open('https://casual-game-flip.expo.app/', '_blank')}
            >
              <Play className="w-6 h-6" />
              Start Playing Now
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-xl px-12 py-8 bg-transparent hover:bg-white/10 border-white/30"
              onClick={() => window.open('https://expo.dev/preview/update?message=Make+game+submissions+instant+and+show+newest+games+first%0A%0A-+Games+now+added+directly+to+main+feed+without+review+process%0A-+User&updateRuntimeVersion=1.0.0&createdAt=2025-08-03T03%3A01%3A04.928Z&slug=exp&projectId=9ecffee8-084f-4291-b9ce-5da66fbc085a&group=1bbee07b-36ac-4adc-a775-4e0f6d12a7de', '_blank')}
            >
              <Download className="w-6 h-6" />
              Download App
            </Button>
          </div>
          
          <div className="text-white/70 text-sm">
            🎮 Free to play • 📱 Available on iOS & Android • ⚡ No ads, ever
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;