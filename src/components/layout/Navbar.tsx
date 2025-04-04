
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Base navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "ADHD Story", path: "/adhd-story" },
    { name: "Homelab", path: "/homelab" },
    { name: "Legal", path: "/legal" }
  ];

  // Popular services
  const popularServices = [
    { name: "Cloud", url: "cloud.j551n.com" },
    { name: "BookStack", url: "bookstack.j551n.com" },
    { name: "Repo", url: "repo.j551n.com" },
    { name: "Notes", url: "notes.j551n.com" },
    { name: "Recipe", url: "recipe.j551n.com" },
    { name: "Docuseal", url: "sign.j551n.com" },
    { name: "GitLab", url: "gitlab.j551n.com" },
    { name: "IT Tools", url: "tools.j551n.com" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm border-b border-border"
    }`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <img src="https://j551n.com/content/images/2024/06/Screenshot-2024-04-06-190141.png" alt="J551N" className="h-8 w-8" />
          <span className="font-bold text-lg text-tech-700 dark:text-tech-400">Johannes Nguyen</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "text-foreground/80 hover:text-tech-600 dark:hover:text-tech-400 transition-colors py-2 px-3 rounded-md",
                      location.pathname === item.path && "text-tech-600 dark:text-tech-400 font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-tech-600 dark:hover:text-tech-400">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                    {popularServices.map((service) => (
                      <a
                        key={service.name}
                        href={`https://${service.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex p-2 hover:bg-muted rounded-md transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">{service.name}</div>
                      </a>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            onClick={toggleMenu}
            size="icon"
            className="transition-transform hover:scale-110"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-slide-in-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-foreground/80 hover:text-tech-600 dark:hover:text-tech-400 transition-colors py-2 animate-fade-up",
                  location.pathname === item.path && "text-tech-600 dark:text-tech-400 font-medium"
                )}
                onClick={toggleMenu}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2 border-t border-border mt-2 pt-4">
              <p className="text-sm font-medium mb-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>Popular Services:</p>
              <div className="grid grid-cols-2 gap-2">
                {popularServices.map((service, index) => (
                  <a
                    key={service.name}
                    href={`https://${service.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 hover:text-tech-600 dark:hover:text-tech-400 transition-colors animate-fade-up"
                    style={{ animationDelay: `${0.25 + index * 0.05}s` }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
