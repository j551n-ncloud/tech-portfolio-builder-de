
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-tech-50 to-background py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://j551n.com/content/images/2024/06/Screenshot-2024-04-06-190141.png')] bg-no-repeat bg-center opacity-5 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block mb-2 animate-bounce-in">
            <img 
              src="https://j551n.com/content/images/2024/06/Screenshot-2024-04-06-190141.png" 
              alt="Logo" 
              className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-tech-200 shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Johannes Nguyen
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold animate-fade-up" style={{ animationDelay: "0.2s" }}>
            IT Technician, <span className="text-tech-600">System Administrator</span>, Intern & Homelab Enthusiast
          </h2>
          
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Passionate about Linux, virtualization, and infrastructure as code. 
            Currently working at the German Cancer Research Center.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button className="bg-tech-600 hover:bg-tech-700 btn-hover">
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToAbout}
              className="btn-hover group"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-tech-200 to-transparent"></div>
      </div>
      
      {/* Animated elements */}
      <div className="hidden lg:block">
        <div className="absolute top-20 left-10 w-12 h-12 rounded-full bg-tech-500/20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-tech-600/20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 right-20 w-8 h-8 rounded-full bg-tech-400/20 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </section>
  );
}
