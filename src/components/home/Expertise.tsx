
import { 
  CheckCircle2,
  Terminal,
  Server,
  Database,
  Code,
  Settings,
  Laptop,
  Network,
  Globe,
  Cpu
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
      experience: "Creating, managing, and configuring VMs and LXC containers",
      additionalKnowledge: "GPU Passthrough",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "General Support",
      experience: "Comprehensive support for technical needs and issues",
      additionalKnowledge: "-",
      icon: <Settings className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Docker",
      experience: "Configuring Docker containers, managing, and troubleshooting",
      additionalKnowledge: "-",
      icon: <Database className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Linux",
      experience: "Managing services like Nextcloud, Docker, and NAS applications",
      additionalKnowledge: "cgroups/systemd resource control, CentOS, auditing users via auditd",
      icon: <Terminal className="h-5 w-5 text-tech-500" />
    },
    {
      area: "VMware",
      experience: "Creating, managing, and configuring VMs",
      additionalKnowledge: "Migration to Proxmox",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Mac",
      experience: "Basic support",
      additionalKnowledge: "-",
      icon: <Laptop className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Kubernetes",
      experience: "Container orchestration, deployment, and scaling",
      additionalKnowledge: "-",
      icon: <Globe className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Ansible",
      experience: "Automation and configuration management",
      additionalKnowledge: "-",
      icon: <Settings className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Networking",
      experience: "Configuring and troubleshooting network setups",
      additionalKnowledge: "LACP bonds",
      icon: <Network className="h-5 w-5 text-tech-500" />
    },
    {
      area: "CI/CD",
      experience: "Implementing and managing continuous integration and deployment pipelines",
      additionalKnowledge: "-",
      icon: <Code className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Bash Scripting",
      experience: "Writing and maintaining scripts for automation and system administration",
      additionalKnowledge: "-",
      icon: <Terminal className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Server Maintenance",
      experience: "Regular upkeep, monitoring, and troubleshooting of server systems",
      additionalKnowledge: "-",
      icon: <Server className="h-5 w-5 text-tech-500" />
    },
    {
      area: "RStudio Server",
      experience: "Installation, configuration, and maintenance",
      additionalKnowledge: "-",
      icon: <Cpu className="h-5 w-5 text-tech-500" />
    },
    {
      area: "AXW-Operator",
      experience: "4 years of experience working with AXW-Operator",
      additionalKnowledge: "-",
      icon: <Settings className="h-5 w-5 text-tech-500" />
    },
    {
      area: "Build & Compiling",
      experience: "Easy build and compiling of modules",
      additionalKnowledge: "-", 
      icon: <Code className="h-5 w-5 text-tech-500" />
    }
  ];

  const keySkills = [
    {
      skill: "Linux System Administration: Active Linux user for 4 years with a strong passion for open-source software. Experienced in using all major Linux server distributions like Debian, Ubuntu, CentOS, etc.",
      icon: <Terminal className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "VM Admin: Active hypervisor admin for VMware/Proxmox for 4 years.",
      icon: <Server className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "DevOps Tools: Experience with DevOps tools like Kubernetes, Ansible, and CI/CD pipelines.",
      icon: <Code className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Networking: Strong knowledge of networking concepts and technologies, including LACP bonds.",
      icon: <Network className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Security & Auditing: Experience in auditing users via auditd and enforcing system resource control via cgroups/systemd.",
      icon: <Globe className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Scripting & Automation: Proficient in Bash scripting for automation and system management.",
      icon: <Terminal className="h-6 w-6 flex-shrink-0 text-tech-500" />
    },
    {
      skill: "Build & Compiling: Experienced in easy build and compiling of modules.",
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
          <Accordion type="single" collapsible className="bg-card shadow-sm rounded-lg overflow-hidden animate-scale-in">
            <AccordionItem value="expertise-table">
              <AccordionTrigger className="p-4 border-b font-semibold">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-tech-500" />
                  <span>Technical Expertise Detail</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto p-2">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted">
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead className="w-[150px]">AREA</TableHead>
                        <TableHead>EXPERIENCE</TableHead>
                        <TableHead>ADDITIONAL KNOWLEDGE</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {expertiseData.map((item, index) => (
                        <TableRow key={index} className="staggered-item transition-all duration-300 hover:bg-muted/80">
                          <TableCell>{item.icon}</TableCell>
                          <TableCell className="font-medium text-tech-600 dark:text-tech-400">{item.area}</TableCell>
                          <TableCell>{item.experience}</TableCell>
                          <TableCell>{item.additionalKnowledge}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-tech-600 to-tech-400 text-transparent bg-clip-text animate-fade-in">Skills & Experience</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {keySkills.slice(0, 4).map((skill, index) => (
              <Card key={index} className="staggered-item card-hover border-tech-100 dark:border-tech-800/30 overflow-hidden">
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
              <Card key={index} className="staggered-item card-hover border-tech-100 dark:border-tech-800/30 overflow-hidden">
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
