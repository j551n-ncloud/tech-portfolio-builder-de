
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-tech-50 to-background py-24 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-6 fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Johannes Nguyen
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            IT Technician & <span className="text-tech-600">System Administrator</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate about Linux, virtualization, and infrastructure as code. Currently working at the German Cancer Research Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-tech-600 hover:bg-tech-700">Contact Me</Button>
            <Button variant="outline" onClick={scrollToAbout}>
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-tech-200 to-transparent"></div>
      </div>
    </section>
  );
}
