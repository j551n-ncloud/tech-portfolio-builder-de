
import { 
  Terminal,
  Server,
  Database,
  Code,
  Settings,
  Laptop,
  Network,
  Globe,
  Cpu,
  Github
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Expertise() {
  const expertiseData = [
    {
      area: "Proxmox",
      experience: "VM & LXC container management",
      additionalKnowledge: "GPU Passthrough, Ceph, Clustering",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "General Support",
      experience: "Technical troubleshooting & solutions",
      additionalKnowledge: "User training, Mac/Windows/Linux support",
      icon: <Settings className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Docker",
      experience: "Container deployment & orchestration",
      additionalKnowledge: "Docker Compose, Dockerfile optimization",
      icon: <Database className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Linux",
      experience: "Server administration & service management",
      additionalKnowledge: "cgroups/systemd, RHEL, auditd",
      icon: <Terminal className="h-5 w-5 text-tech-500" />
    },
    {
      area: "VMware",
      experience: "Enterprise virtualization",
      additionalKnowledge: "Migration to Proxmox",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Fullstack Development",
      experience: "Web application development",
      additionalKnowledge: "TypeScript, Supabase, JavaScript, Vite, Express",
      icon: <Laptop className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Kubernetes",
      experience: "Container orchestration & scaling",
      additionalKnowledge: "Helm charts, K3S deployment, custom operators",
      icon: <Globe className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Ansible",
      experience: "Infrastructure automation",
      additionalKnowledge: "Playbook development, AWX integration",
      icon: <Settings className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Networking",
      experience: "Network configuration & troubleshooting",
      additionalKnowledge: "LACP bonds, VLANs, routing, IPAM, Netbox",
      icon: <Network className="h-5 w-5 text-tech-500" />
    },
    {
      area: "CI/CD",
      experience: "Pipeline implementation & management",
      additionalKnowledge: "GitHub Actions, Jenkins, GitLab CI/CD",
      icon: <Code className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Bash Scripting",
      experience: "Automation scripting",
      additionalKnowledge: "Shell utilities, performance optimization",
      icon: <Terminal className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Server Maintenance",
      experience: "Proactive monitoring & troubleshooting",
      additionalKnowledge: "Performance tuning, Grafana",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "RStudio Server",
      experience: "Installation & configuration",
      additionalKnowledge: "License management",
      icon: <Cpu className="h-5 w-5 text-tech-500" />
    },
    {
      area: "AXW-Operator",
      experience: "1.5 years operational experience",
      additionalKnowledge: "Troubleshooting, customization",
      icon: <Settings className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Build & Compile",
      experience: "Module building & compilation",
      additionalKnowledge: "Cross-platform compatibility, optimization", 
      icon: <Code className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Cluster Management",
      experience: "High-availability infrastructure",
      additionalKnowledge: "Failover configuration, LSF knowledge",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Homelab",
      experience: "Personal infrastructure management",
      additionalKnowledge: "Virtualization, self-hosted services, Tailscale",
      icon: <Network className="h-5 w-5 text-tech-500" />
    },
    {
      area: "GitHub",
      experience: "Version control & collaboration",
      additionalKnowledge: "PR workflow, project management",
      icon: <Github className="h-5 w-5 text-tech-500" />
    }
  ];

  const keySkills = [
    {
      skill: "Linux: 4+ years with server distributions (Debian, Ubuntu, CentOS) and open-source focus",
      icon: <Terminal className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Virtualization: 4+ years managing VMware/Proxmox hypervisors and environments",
      icon: <Server className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "DevOps: Kubernetes, Ansible, CI/CD pipelines and infrastructure as code",
      icon: <Code className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Networking: LACP bonds, VLANs, routing protocols and network management",
      icon: <Network className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Security: User auditing (auditd) and system resource control (cgroups/systemd)",
      icon: <Globe className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Automation: Bash scripting for system management and workflow optimization",
      icon: <Terminal className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Software Engineering: Module building and cross-platform development",
      icon: <Cpu className="h-6 w-6 flex-shrink-0 text-tech-500" />
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-tech-700 to-tech-500 text-transparent bg-clip-text">My Expertise</h2>
          <p className="text-lg text-muted-foreground">
            A detailed breakdown of my technical skills and experience across various IT domains.
          </p>
        </div>

        <div className="mb-12">
          <Accordion type="single" collapsible defaultValue="expertise-card-view" className="bg-card shadow-sm rounded-lg overflow-hidden animate-scale-in">
            <AccordionItem value="expertise-card-view">
              <AccordionTrigger className="p-4 border-b font-semibold">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-tech-500" />
                  <span>Technical Expertise Detail</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {expertiseData.map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          {item.icon}
                          <h3 className="font-medium text-tech-600 dark:text-tech-400">{item.area}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{item.experience}</p>
                        <p className="text-xs text-muted-foreground/80 italic">
                          <span className="font-medium">Knowledge:</span> {item.additionalKnowledge}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-tech-600 to-tech-400 text-transparent bg-clip-text animate-fade-in">Skills & Experience</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {keySkills.slice(0, 4).map((skill, index) => (
              <Card key={index} className="card-hover border-tech-100 dark:border-tech-800/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    {skill.icon}
                    <span className="text-muted-foreground">{skill.skill}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {keySkills.slice(4).map((skill, index) => (
              <Card key={index} className="card-hover border-tech-100 dark:border-tech-800/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    {skill.icon}
                    <span className="text-muted-foreground">{skill.skill}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
