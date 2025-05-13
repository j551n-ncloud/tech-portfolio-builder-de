
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
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
      scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
    } border-b border-border`}>
      <nav className="container mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src="https://bookstack.j551n.com/uploads/images/system/2024-08/screenshot-2024-04-06-190141.png" alt="J551N" className="h-8 w-8" />
          <span className="font-medium text-lg">Johannes Nguyen</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "text-foreground hover:text-tech-600 transition-colors py-2",
                      location.pathname === item.path && "text-tech-600 font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-tech-600 bg-transparent hover:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-2 p-4 w-[400px] rounded-none border-2 border-border">
                    {popularServices.map((service) => (
                      <a
                        key={service.name}
                        href={`https://${service.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex p-2 hover:bg-muted rounded-none transition-colors"
                      >
                        <div className="text-sm font-medium">{service.name}</div>
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
            className="rounded-none"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-8 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-foreground hover:text-tech-600 transition-colors py-2",
                  location.pathname === item.path && "text-tech-600 font-medium"
                )}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2 border-t border-border mt-2 pt-4">
              <p className="text-sm font-medium mb-2">Popular Services:</p>
              <div className="grid grid-cols-2 gap-2">
                {popularServices.map((service) => (
                  <a
                    key={service.name}
                    href={`https://${service.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 hover:text-tech-600 transition-colors"
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
