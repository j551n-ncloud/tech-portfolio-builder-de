
import { 
  CheckCircle2
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export function Expertise() {
  const expertiseData = [
    {
      area: "Proxmox",
      experience: "Creating, managing, and configuring VMs and LXC containers",
      additionalKnowledge: "GPU Passthrough"
    },
    {
      area: "General Support",
      experience: "Comprehensive support for technical needs and issues",
      additionalKnowledge: "-"
    },
    {
      area: "Docker",
      experience: "Configuring Docker containers, managing, and troubleshooting",
      additionalKnowledge: "-"
    },
    {
      area: "Linux",
      experience: "Managing services like Nextcloud, Docker, and NAS applications",
      additionalKnowledge: "cgroups/systemd resource control, CentOS, auditing users via auditd"
    },
    {
      area: "VMware",
      experience: "Creating, managing, and configuring VMs",
      additionalKnowledge: "Migration to Proxmox"
    },
    {
      area: "Mac",
      experience: "Basic support",
      additionalKnowledge: "-"
    },
    {
      area: "Kubernetes",
      experience: "Container orchestration, deployment, and scaling",
      additionalKnowledge: "-"
    },
    {
      area: "Ansible",
      experience: "Automation and configuration management",
      additionalKnowledge: "-"
    },
    {
      area: "Networking",
      experience: "Configuring and troubleshooting network setups",
      additionalKnowledge: "LACP bonds"
    },
    {
      area: "CI/CD",
      experience: "Implementing and managing continuous integration and deployment pipelines",
      additionalKnowledge: "-"
    },
    {
      area: "Bash Scripting",
      experience: "Writing and maintaining scripts for automation and system administration",
      additionalKnowledge: "-"
    },
    {
      area: "Server Maintenance",
      experience: "Regular upkeep, monitoring, and troubleshooting of server systems",
      additionalKnowledge: "-"
    },
    {
      area: "RStudio Server",
      experience: "Installation, configuration, and maintenance",
      additionalKnowledge: "-"
    },
    {
      area: "AXW-Operator",
      experience: "4 years of experience working with AXW-Operator",
      additionalKnowledge: "-"
    },
    {
      area: "Build & Compiling",
      experience: "Easy build and compiling of modules",
      additionalKnowledge: "-"
    }
  ];

  const keySkills = [
    "Linux System Administration: Active Linux user for 4 years with a strong passion for open-source software. Experienced in using all major Linux server distributions like Debian, Ubuntu, CentOS, etc.",
    "VM Admin: Active hypervisor admin for VMware/Proxmox for 4 years.",
    "DevOps Tools: Experience with DevOps tools like Kubernetes, Ansible, and CI/CD pipelines.",
    "Networking: Strong knowledge of networking concepts and technologies, including LACP bonds.",
    "Security & Auditing: Experience in auditing users via auditd and enforcing system resource control via cgroups/systemd.",
    "Scripting & Automation: Proficient in Bash scripting for automation and system management.",
    "Build & Compiling: Experienced in easy build and compiling of modules."
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
          <p className="text-lg text-muted-foreground">
            A detailed breakdown of my technical skills and experience across various IT domains.
          </p>
        </div>

        <div className="bg-card shadow-sm rounded-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="w-[200px]">AREA</TableHead>
                  <TableHead>EXPERIENCE</TableHead>
                  <TableHead>ADDITIONAL KNOWLEDGE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expertiseData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.area}</TableCell>
                    <TableCell>{item.experience}</TableCell>
                    <TableCell>{item.additionalKnowledge}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Skills & Experience</h3>
          <ul className="space-y-4">
            {keySkills.map((skill, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-tech-500" />
                <span className="text-muted-foreground">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
