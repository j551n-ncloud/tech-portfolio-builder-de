
import { Link } from "react-router-dom";
import { Github, Mail, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Footer() {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-bold text-lg">Johannes Nguyen</h3>
            <p className="text-muted-foreground">
              System Administrator & IT Specialist with a passion for Linux and virtualization.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/j551n-ncloud" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-tech-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/johannesquangminh" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-tech-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:johannes.quangminh.nguyen@gmail.com" className="text-foreground hover:text-tech-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-lg">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/homelab" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Homelab
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
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
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <div className="grid grid-cols-2 gap-y-2">
              <div>
                <a href="https://anki.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Anki Cards</a>
              </div>
              <div>
                <a href="https://cloud.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Cloud</a>
              </div>
              <div>
                <a href="https://bookstack.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Bookstack</a>
              </div>
              <div>
                <a href="https://repo.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Repo</a>
              </div>
              <div>
                <a href="https://notes.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Notes</a>
              </div>
              <div>
                <a href="https://recipe.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Recipe</a>
              </div>
              <div>
                <a href="https://sign.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Docuseal</a>
              </div>
              <div>
                <a href="https://gitlab.j551n.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-tech-500 transition-colors">Gitlab</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Johannes Nguyen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
