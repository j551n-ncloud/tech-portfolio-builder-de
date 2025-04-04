
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">TechPortfolio</h3>
            <p className="text-muted-foreground">
              System Administrator & IT Specialist with a passion for Linux and virtualization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-tech-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-tech-500 transition-colors">
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
                <Link to="/#about" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/#expertise" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  My Expertise
                </Link>
              </li>
              <li>
                <Link to="/editor" className="text-muted-foreground hover:text-tech-500 transition-colors">
                  Markdown Editor
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
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} TechPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
