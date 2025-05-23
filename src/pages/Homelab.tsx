
import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cpu, HardDrive, Monitor, Cloud, Lock, ArrowRight } from "lucide-react";

const Homelab = () => {
  useEffect(() => {
    // Set document title
    document.title = "My Homelab | Johannes Nguyen";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-20 right-10 w-64 h-64 bg-tech-500/5 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-40 left-10 w-72 h-72 bg-tech-600/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary animate-fade-in">My Homelab: Exploring Three Proxmox Nodes</h1>
            
            <p className="text-xl text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              In the realm of home labs, the pursuit of building and experimenting with various server configurations is a passion shared by many enthusiasts. In this article, I'll take you through my personal homelab setup, comprising three Proxmox nodes, each serving a specific purpose within my network infrastructure.
            </p>
            
            <div className="grid grid-cols-1 gap-8 mb-16">
              <Card className="border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <CardHeader className="pb-2 bg-gradient-to-r from-tech-50/50 to-transparent">
                  <div className="flex items-center gap-3">
                    <Server className="h-8 w-8 text-tech-600 dark:text-tech-400" />
                    <CardTitle className="text-2xl">Node 1: N-Serv001</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-tech-700 dark:text-tech-500">Specifications:</h3>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3 group">
                          <Cpu className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Processor: Intel Core i7-3770s</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-500 group-hover:text-tech-600 transition-colors">
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
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">RAM: 16 GB</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <HardDrive className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Storage: 3 TB</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <Monitor className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">GPU Passthrough</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center">
                      <p className="text-muted-foreground leading-relaxed">
                        Node N-Serv001 serves as the backbone of my homelab infrastructure. Equipped with an Intel Core i7-3770s processor and 16 GB of RAM, this node handles general computing tasks efficiently. Its GPU passthrough capability enables me to utilize hardware acceleration for specific workloads, enhancing performance where needed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <CardHeader className="pb-2 bg-gradient-to-r from-tech-50/50 to-transparent">
                  <div className="flex items-center gap-3">
                    <Server className="h-8 w-8 text-tech-600 dark:text-tech-400" />
                    <CardTitle className="text-2xl">Node 2: N-Serv002</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-tech-700 dark:text-tech-500">Specifications:</h3>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3 group">
                          <Cpu className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Processor: 8 x Intel(R) Core(TM) i7-4770S CPU</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-500 group-hover:text-tech-600 transition-colors">
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
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">RAM: 32 GB</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <HardDrive className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Storage: 6 TB</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <Monitor className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Additional Features: Media Server (Jellyfish)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center">
                      <p className="text-muted-foreground leading-relaxed">
                        Node N-Serv002 is the powerhouse of my homelab, boasting an impressive 8 x Intel(R) Core(TM) i7-4770S CPU and 32 GB of RAM. This node primarily functions as a media server, hosting Jellyfish for streaming and managing multimedia content throughout my network. With its ample storage capacity of 6 TB, N-Serv002 ensures seamless access to my media library.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <CardHeader className="pb-2 bg-gradient-to-r from-tech-50/50 to-transparent">
                  <div className="flex items-center gap-3">
                    <Server className="h-8 w-8 text-tech-600 dark:text-tech-400" />
                    <CardTitle className="text-2xl">Node 3: N-Serv003</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-tech-700 dark:text-tech-500">Specifications:</h3>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3 group">
                          <Cpu className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Processor: Intel(R) Core(TM) i5-6260U CPU</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-500 group-hover:text-tech-600 transition-colors">
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
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">RAM: 8 GB</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                          <HardDrive className="h-5 w-5 text-tech-500 group-hover:text-tech-600 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Storage: 500 GB</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center">
                      <p className="text-muted-foreground leading-relaxed">
                        Node N-Serv003 rounds out my homelab setup with its compact yet capable configuration. Featuring an Intel Core i5-6260U CPU and 8 GB of RAM, this node efficiently handles lightweight workloads and also hosts websites like my monitoring and also this Homepage. It serves as a versatile addition to my network and efficiently handles monitoring tasks and serves web content without any hiccups. With 500 GB of storage, N-Serv003 provides ample space for hosting various applications and services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-gradient-primary animate-fade-up" style={{ animationDelay: "0.6s" }}>Common Features Across Nodes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.7s" }}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-8 w-8 text-tech-600 dark:text-tech-400" />
                    <CardTitle className="text-xl">Cloudflared</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    All three nodes in my homelab are equipped with Cloudflared, enabling secure and fast access to Cloudflare services. This integration enhances the performance and reliability of my network infrastructure while ensuring optimal security measures are in place.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.8s" }}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Lock className="h-8 w-8 text-tech-600 dark:text-tech-400" />
                    <CardTitle className="text-xl">Tailscale VPN</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Tailscale VPN serves as the backbone of my network connectivity, facilitating secure communication and access across all nodes. By deploying Tailscale as both a subnet router and exit nodes, I ensure seamless connectivity and privacy for all devices within my homelab environment.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 shadow-md mb-8 animate-fade-up" style={{ animationDelay: "0.9s" }}>
              <div className="space-y-4">
                <p className="italic text-muted-foreground leading-relaxed">
                  In conclusion, my homelab setup encompasses three Proxmox nodes, each tailored to fulfill specific roles within my network infrastructure. From general computing tasks to media streaming and lightweight workloads, these nodes collectively contribute to a dynamic and efficient homelab environment.
                </p>
                <p className="italic text-muted-foreground leading-relaxed">
                  Whether you're a seasoned enthusiast or just embarking on your homelab journey, the possibilities for exploration and experimentation are endless. With the right combination of hardware and software, you can create a homelab that meets your unique needs and fuels your passion for technology.
                </p>
                <div className="flex items-center gap-2 text-tech-600 dark:text-tech-400 mt-6 font-medium">
                  <ArrowRight className="h-5 w-5" />
                  <span>Note: Upptime is replaced by Grafana for monitoring capabilities.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homelab;
