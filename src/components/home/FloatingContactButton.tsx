
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContactButton() {
  const handleContactClick = () => {
    window.location.href = "mailto:Johannes.quangminh.nguyen@gmail.com";
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in" style={{animationDelay: "1s"}}>
      <Button 
        className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg hover-glow group"
        onClick={handleContactClick}
      >
        <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
        <span className="group-hover:animate-pulse">Contact</span>
      </Button>
    </div>
  );
}
