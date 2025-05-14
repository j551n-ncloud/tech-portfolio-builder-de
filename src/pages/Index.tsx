
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Career } from "@/components/home/Career";
import { Expertise } from "@/components/home/Expertise";
import { Services } from "@/components/home/Services";
import { FloatingContactButton } from "@/components/home/FloatingContactButton";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set document title
    document.title = "Homepage | Johannes Nguyen";
    
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center animate-pulse">
          <img 
            src="https://bookstack.j551n.com/uploads/images/system/2024-08/screenshot-2024-04-06-190141.png" 
            alt="Logo" 
            className="w-16 h-16 mx-auto mb-4 animate-bounce-in animate-pulse-glow"
          />
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 animate-fade-in">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className={`space-y-0 overflow-hidden ${isMobile ? 'pt-0' : ''}`}>
        <Hero />
        <div className="animate-float-up" style={{animationDelay: "0.3s"}}>
          <About />
        </div>
        <div className="animate-float-up" style={{animationDelay: "0.5s"}}>
          <Career />
        </div>
        <div className="animate-float-up" style={{animationDelay: "0.7s"}}>
          <Expertise />
        </div>
        <div className="animate-float-up" style={{animationDelay: "0.9s"}}>
          <Services />
        </div>
      </div>
      <FloatingContactButton />
    </Layout>
  );
};

export default Index;
