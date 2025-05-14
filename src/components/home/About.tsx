
import { Server, Terminal, Database, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function About() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const skills = [
    {
      icon: Server,
      title: "System Administration",
      description: "Linux & Windows server management with 4+ years of experience.",
    },
    {
      icon: Terminal,
      title: "DevOps",
      description: "Experience with Docker, Kubernetes, Ansible, and CI/CD pipelines.",
    },
    {
      icon: Database,
      title: "Virtualization",
      description: "Expert in VMware and Proxmox for creating and managing VMs.",
    },
    {
      icon: Cpu,
      title: "Infrastructure",
      description: "Network configuration, server maintenance, and security auditing.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 animate-float-up">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              I am a system administrator with a passion for Windows and Unix. Currently, I am working as an apprentice system integrator at the German Cancer Research Center.
            </p>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
              As an active Linux user for 4 years with a strong passion for open-source software, I have extensive experience working with all major Linux server distributions like Debian, Ubuntu, and CentOS.
            </p>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
              I combine this with my VM administration skills and DevOps tools expertise to provide comprehensive technical solutions.
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className={`bg-card border-2 rounded-none transition-all duration-500 staggered-item animate-fade-up ${
                    hoverIndex === index 
                      ? "border-blue-500 scale-105 shadow-lg shadow-blue-500/20" 
                      : "border-border hover:border-blue-500 hover-lift"
                  }`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{animationDelay: `${0.3 + index * 0.1}s`}}
                >
                  <CardHeader className="p-6">
                    <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                      hoverIndex === index 
                        ? "bg-blue-500 text-white" 
                        : "bg-blue-50 text-blue-600"
                    }`}>
                      <skill.icon className={`h-6 w-6 transition-transform duration-300 ${
                        hoverIndex === index ? "scale-110" : ""
                      }`} />
                    </div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 text-muted-foreground">
                    {skill.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
