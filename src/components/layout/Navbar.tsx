
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Myself", path: "/#about" },
    { name: "Career History", path: "/#career" },
    { name: "Expertise", path: "/#expertise" },
    { name: "Services", path: "/#services" },
    { name: "Articles", path: "/#articles" },
    { name: "Editor", path: "/editor" },
    { name: "Legal", path: "/legal" }
  ];

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://j551n.com/content/images/2024/06/Screenshot-2024-04-06-190141.png" alt="J551N" className="h-8 w-8" />
          <span className="font-bold text-lg text-tech-700">Johannes Nguyen</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-foreground/80 hover:text-tech-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
          size="icon"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground/80 hover:text-tech-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
