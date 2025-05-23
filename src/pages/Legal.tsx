
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Shield } from "lucide-react";

const Legal = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Legal Documents</h1>
          <p className="text-muted-foreground mb-8">
            Important legal information about this portfolio website, compliant with German regulations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Privacy Statement</h2>
                <p className="text-muted-foreground mb-4">
                  Information on how your data is processed and your rights according to GDPR and German data protection laws.
                </p>
                <Button asChild>
                  <Link to="/legal/privacy">View Privacy Statement</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-600 mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Legal Notice (Impressum)</h2>
                <p className="text-muted-foreground mb-4">
                  Information about the website owner and legally required disclosures according to German law.
                </p>
                <Button asChild>
                  <Link to="/legal/notice">View Legal Notice</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
