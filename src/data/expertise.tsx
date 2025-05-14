
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
import { ReactNode } from "react";

export interface ExpertiseItem {
  area: string;
  experience: string;
  additionalKnowledge: string;
  icon: ReactNode;
}

export interface SkillItem {
  skill: string;
  icon: ReactNode;
}

export const expertiseData: ExpertiseItem[] = [
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

export const keySkills: SkillItem[] = [
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
