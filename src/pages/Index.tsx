
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Career } from "@/components/home/Career";
import { Expertise } from "@/components/home/Expertise";
import { Services } from "@/components/home/Services";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set document title
    document.title = "Homepage | Johannes Nguyen";
    
    // Simulate page loading with a shorter timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    // Log for debugging
    console.log("Index page mounted");
    
    return () => {
      console.log("Index page unmounted");
      clearTimeout(timer);
    };
  }, []);

  // Add fallback content if still loading after too long
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.log("Forcing load complete due to timeout");
        setIsLoading(false);
      }
    }, 2000);
    
    return () => clearTimeout(fallbackTimer);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <img 
            src="https://j551n.com/content/images/2024/06/Screenshot-2024-04-06-190141.png" 
            alt="Logo" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="text-2xl font-bold text-tech-600 dark:text-tech-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className={`space-y-0 overflow-hidden ${isMobile ? 'pt-0' : ''}`}>
        <Hero />
        <About />
        <Career />
        <Expertise />
        <Services />
      </div>
    </Layout>
  );
};

export default Index;
