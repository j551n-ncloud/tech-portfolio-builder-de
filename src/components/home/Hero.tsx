
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:Johannes.quangminh.nguyen@gmail.com";
  };

  return (
    <section className="relative bg-background py-32 overflow-hidden border-b border-border">
      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 lg:col-start-3">
          <div className="space-y-8">
            <div className="flex items-center justify-center lg:justify-start">
              <img 
                src="https://bookstack.j551n.com/uploads/images/system/2024-08/screenshot-2024-04-06-190141.png" 
                alt="Logo" 
                className="w-16 h-16 rounded-sm border border-border animate-rotate-in animate-pulse-glow"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-float-up">
                Johannes Nguyen
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-normal animate-slide-in-left" style={{animationDelay: "0.2s"}}>
                IT Technician, <span className="text-blue-500">System Administrator</span>, <br className="hidden md:block" />
                Apprentice & Homelab Enthusiast
              </h2>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: "0.4s"}}>
                Passionate about Linux, virtualization, and infrastructure as code. <br className="hidden md:block" />
                Currently working at the German Cancer Research Center.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up" style={{animationDelay: "0.6s"}}>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 rounded-none hover-glow"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToAbout}
                className="rounded-none group border-2 hover:bg-muted hover-lift"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-2">
          <div className="aspect-square bg-blue-500 animate-pulse-glow"></div>
        </div>
      </div>
      
      {/* Swiss design grid elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 grid grid-cols-12 pointer-events-none">
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
        <div className="col-span-1 border-r border-border h-full"></div>
      </div>
    </section>
  );
}
