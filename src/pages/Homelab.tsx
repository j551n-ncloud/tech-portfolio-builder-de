
import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cpu, HardDrive, Monitor, Cloud, Lock } from "lucide-react";

const Homelab = () => {
  useEffect(() => {
    // Set document title
    document.title = "My Homelab | Johannes Nguyen";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">My Homelab: Exploring Three Proxmox Nodes</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            In the realm of home labs, the pursuit of building and experimenting with various server configurations is a passion shared by many enthusiasts. In this article, I'll take you through my personal homelab setup, comprising three Proxmox nodes, each serving a specific purpose within my network infrastructure.
          </p>
          
          <div className="grid grid-cols-1 gap-8 mb-12">
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Server className="h-6 w-6 text-tech-600 dark:text-tech-400" />
                  <CardTitle>Node 1: N-Serv001</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Specifications:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <span>Processor: Intel Core i7-3770s</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <path d="M6 19v-3"></path>
                      <path d="M10 19v-3"></path>
                      <path d="M14 19v-3"></path>
                      <path d="M18 19v-3"></path>
                      <path d="M8 11V9"></path>
                      <path d="M16 11V9"></path>
                      <path d="M12 11V9"></path>
                      <path d="M2 15h20"></path>
                      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"></path>
                    </svg>
                    <span>RAM: 16 GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <span>Storage: 3 TB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-muted-foreground" />
                    <span>GPU Passthrough</span>
                  </li>
                </ul>
                
                <p>
                  Node N-Serv001 serves as the backbone of my homelab infrastructure. Equipped with an Intel Core i7-3770s processor and 16 GB of RAM, this node handles general computing tasks efficiently. Its GPU passthrough capability enables me to utilize hardware acceleration for specific workloads, enhancing performance where needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Server className="h-6 w-6 text-tech-600 dark:text-tech-400" />
                  <CardTitle>Node 2: N-Serv002</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Specifications:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <span>Processor: 8 x Intel(R) Core(TM) i7-4770S CPU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <path d="M6 19v-3"></path>
                      <path d="M10 19v-3"></path>
                      <path d="M14 19v-3"></path>
                      <path d="M18 19v-3"></path>
                      <path d="M8 11V9"></path>
                      <path d="M16 11V9"></path>
                      <path d="M12 11V9"></path>
                      <path d="M2 15h20"></path>
                      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"></path>
                    </svg>
                    <span>RAM: 32 GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <span>Storage: 6 TB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-muted-foreground" />
                    <span>Additional Features: Media Server (Jellyfish)</span>
                  </li>
                </ul>
                
                <p>
                  Node N-Serv002 is the powerhouse of my homelab, boasting an impressive 8 x Intel(R) Core(TM) i7-4770S CPU and 32 GB of RAM. This node primarily functions as a media server, hosting Jellyfish for streaming and managing multimedia content throughout my network. With its ample storage capacity of 6 TB, N-Serv002 ensures seamless access to my media library.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Server className="h-6 w-6 text-tech-600 dark:text-tech-400" />
                  <CardTitle>Node 3: N-Serv003</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Specifications:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <span>Processor: Intel(R) Core(TM) i5-6260U CPU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <path d="M6 19v-3"></path>
                      <path d="M10 19v-3"></path>
                      <path d="M14 19v-3"></path>
                      <path d="M18 19v-3"></path>
                      <path d="M8 11V9"></path>
                      <path d="M16 11V9"></path>
                      <path d="M12 11V9"></path>
                      <path d="M2 15h20"></path>
                      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"></path>
                    </svg>
                    <span>RAM: 8 GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <span>Storage: 500 GB</span>
                  </li>
                </ul>
                
                <p>
                  Node N-Serv003 rounds out my homelab setup with its compact yet capable configuration. Featuring an Intel Core i5-6260U CPU and 8 GB of RAM, this node efficiently handles lightweight workloads and also hosts websites like my monitoring and also this Homepage. It serves as a versatile addition to my network and efficiently handles monitoring tasks and serves web content without any hiccups. With 500 GB of storage, N-Serv003 provides ample space for hosting various applications and services.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Common Features Across Nodes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-tech-600 dark:text-tech-400" />
                  <CardTitle>Cloudflared</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  All three nodes in my homelab are equipped with Cloudflared, enabling secure and fast access to Cloudflare services. This integration enhances the performance and reliability of my network infrastructure while ensuring optimal security measures are in place.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-tech-600 dark:text-tech-400" />
                  <CardTitle>Tailscale VPN</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Tailscale VPN serves as the backbone of my network connectivity, facilitating secure communication and access across all nodes. By deploying Tailscale as both a subnet router and exit nodes, I ensure seamless connectivity and privacy for all devices within my homelab environment.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="italic">
              In conclusion, my homelab setup encompasses three Proxmox nodes, each tailored to fulfill specific roles within my network infrastructure. From general computing tasks to media streaming and lightweight workloads, these nodes collectively contribute to a dynamic and efficient homelab environment.
            </p>
            <p className="mt-4 italic">
              Whether you're a seasoned enthusiast or just embarking on your homelab journey, the possibilities for exploration and experimentation are endless. With the right combination of hardware and software, you can create a homelab that meets your unique needs and fuels your passion for technology.
            </p>
            <p className="mt-4 font-semibold">
              Note: Upptime is replaced by Grafana for monitoring capabilities.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homelab;
