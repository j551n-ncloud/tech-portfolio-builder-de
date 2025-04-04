
import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Log when the layout mounts to help with debugging
    console.log("Layout component mounted");
    
    // Add a class to the document to indicate the app is mounted
    document.documentElement.classList.add('app-loaded');
    
    return () => {
      console.log("Layout component unmounted");
      document.documentElement.classList.remove('app-loaded');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
