import { Card } from "@/components/ui/card";
import phoneMockup from "@/assets/phone-mockup.jpg";
import { ArrowDown, MousePointer2, Play, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MousePointer2,
      number: "01",
      title: "Browse Games",
      description: "Discover indie games in our curated marketplace. Each game shows pricing and developer info.",
      color: "text-game-coral"
    },
    {
      icon: Play,
      number: "02", 
      title: "Pay with Stellar",
      description: "Buy games instantly with Stellar (XLM) tokens. Fast, secure blockchain transactions.",
      color: "text-game-blue"
    },
    {
      icon: Heart,
      number: "03",
      title: "Support Developers",
      description: "Your purchase goes directly to creators. We take a small 5% platform fee to keep things running.",
      color: "text-game-yellow"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            How Our Marketplace Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Blockchain-powered game marketplace. Three simple steps to support indie developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <Card className="p-8 bg-card-gradient border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-card">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${step.color.split('-')[1]}-${step.color.split('-')[2]} to-${step.color.split('-')[1]}-${step.color.split('-')[2]}/50 flex items-center justify-center mb-4`}>
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-muted-foreground/30">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <ArrowDown className="w-6 h-6 text-muted-foreground/50 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-card border border-white/10 bg-card-gradient">
                <img 
                  src={phoneMockup} 
                  alt="App interface mockup" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating indicators */}
              <div className="absolute -top-6 -right-6 bg-game-coral/20 backdrop-blur-sm border border-game-coral/30 rounded-full w-24 h-24 flex items-center justify-center animate-pulse-glow">
                <MousePointer2 className="w-8 h-8 text-game-coral" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-game-blue/20 backdrop-blur-sm border border-game-blue/30 rounded-full w-20 h-20 flex items-center justify-center animate-float">
                <Play className="w-6 h-6 text-game-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;