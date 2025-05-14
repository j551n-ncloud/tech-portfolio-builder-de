
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Delay the appearance for a better entry effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    // Track scroll position to add effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300 && !isVisible) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const handleContactClick = () => {
    window.location.href = "mailto:Johannes.quangminh.nguyen@gmail.com";
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <Button 
        className={`bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg transition-all duration-300 ${
          isHovered ? "shadow-blue-400/50 scale-110" : ""
        }`}
        onClick={handleContactClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Mail className={`mr-2 h-5 w-5 transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`} />
        <span className={`transition-all duration-300 ${isHovered ? "animate-pulse" : ""}`}>Contact</span>
      </Button>
    </div>
  );
}
