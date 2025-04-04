
import { Server, Terminal, Database, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
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
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I am a system administrator with a passion for Windows and Unix. Currently, I am working as an apprentice system integrator at the German Cancer Research Center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-600 mb-4">
                  <skill.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 text-muted-foreground">
                {skill.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">A passion for computer science</h3>
          <p className="text-muted-foreground mb-6">
            As an active Linux user for 4 years with a strong passion for open-source software, I have extensive experience working with all major Linux server distributions like Debian, Ubuntu, and CentOS. I combine this with my VM administration skills and DevOps tools expertise to provide comprehensive technical solutions.
          </p>
          <p className="text-muted-foreground mb-6">
            My experience spans across networking concepts, security auditing, and automation through Bash scripting. I pride myself on my ability to manage and troubleshoot complex systems efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
