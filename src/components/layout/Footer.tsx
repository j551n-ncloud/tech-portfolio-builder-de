
import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Footer() {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Johannes Nguyen</h3>
            <p className="text-muted-foreground">
              System Administrator & IT Specialist with a passion for Linux and virtualization.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/j551n-ncloud" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:johannes.quangminh.nguyen@gmail.com" className="text-muted-foreground hover:text-tech-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/adhd-story" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  ADHD Story
                </Link>
              </li>
              <li>
                <Link to="/homelab" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Homelab
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/privacy" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Privacy Statement
                </Link>
              </li>
              <li>
                <Link to="/legal/notice" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Legal Notice
                </Link>
              </li>
            </ul>
            
            <h3 className="font-bold text-lg mt-6">Services</h3>
            <div className={isMobile ? "grid grid-cols-2 gap-2" : "space-y-2"}>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://anki.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Anki Cards</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://cloud.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Cloud</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://bookstack.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Bookstack</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://repo.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Repo</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://notes.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Notes</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://recipe.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Recipe</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://sign.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Docuseal</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://gitlab.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Gitlab</a>
              </div>
              <div className={isMobile ? "" : "mb-2"}>
                <a href="https://tools.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">IT Tools</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Johannes Nguyen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
