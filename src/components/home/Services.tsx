import { Server, Cloud, Book, Utensils, Activity, StickyNote, Package, Shield, GitBranch, Wrench, FileSignature, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export function Services() {
  const isMobile = useIsMobile();
  
  const services = [
    {
      icon: BrainCircuit,
      title: "Anki Card Creator",
      url: "anki.j551n.com",
      description: "Create Anki cards quickly and easily using AI to enhance your learning experience."
    },
    {
      icon: Server,
      title: "Minecraft Server Management",
      url: "mc.j551n.com",
      description: "High-performance servers with customization, security, and support for Minecraft enthusiasts."
    },
    {
      icon: Cloud,
      title: "Nextcloud Hosting",
      url: "cloud.j551n.com",
      description: "Secure cloud storage with collaboration tools, anywhere access, and GDPR compliance."
    },
    {
      icon: Book,
      title: "BookStack Documentation",
      url: "bookstack.j551n.com",
      description: "Easy organization and management of documents with team collaboration and powerful search."
    },
    {
      icon: Utensils,
      title: "Mealie Recipe Management",
      url: "recipe.j551n.com",
      description: "Store recipes, plan meals, create shopping lists, and share your favorite recipes with others."
    },
    {
      icon: Activity,
      title: "Grafana Monitoring",
      url: "monitor.j551n.com",
      description: "Real-time monitoring with interactive dashboards, custom metrics, and alerts for critical issues."
    },
    {
      icon: StickyNote,
      title: "SiYuan Notes",
      url: "notes.j551n.com",
      description: "Easily create and manage notes with rich text editing, organization, and synchronization."
    },
    {
      icon: Package,
      title: "Docker Registry",
      url: "repo.j551n.com",
      description: "Securely store and manage Docker images, with easy access for your CI/CD pipelines."
    },
    {
      icon: Shield,
      title: "Vaultwarden",
      url: "vault.j551n.com",
      description: "Safely store and manage passwords with full encryption and access from any device."
    },
    {
      icon: GitBranch,
      title: "GitLab",
      url: "gitlab.j551n.com",
      description: "Manage code repositories, collaborate with your team, and automate workflows with CI/CD tools."
    },
    {
      icon: Wrench,
      title: "IT Tools",
      url: "tools.j551n.com",
      description: "Access a variety of IT utilities to support your workflows and streamline processes."
    },
    {
      icon: FileSignature,
      title: "Docuseal",
      url: "sign.j551n.com",
      description: "Easily sign documents digitally with security and compliance with industry standards."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-gradient">My Services</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to J551N Services. I'm excited to present a comprehensive range of digital services tailored to meet your diverse needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-4 pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'}`}>{service.title}</CardTitle>
                <p className="text-sm text-tech-600 mt-1">
                  {service.url}
                </p>
              </CardHeader>
              <CardContent className="p-4 text-muted-foreground">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
