
import { Layout } from "@/components/layout/Layout";

const LegalNotice = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Legal Notice (Impressum)</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information according to § 5 TMG</h2>
            <p>
              Johannes Nguyen<br />
              Heinrich-böll-straße 28<br />
              68723 Oftersheim<br />
              Germany
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Email: johannes.quangminh.nguyen@gmail.com
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Responsible for Content according to § 55 Abs. 2 RStV</h2>
            <p>
              Johannes Nguyen<br />
              Heinrich-böll-straße 28<br />
              68723 Oftersheim<br />
              Germany
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            
            <h3 className="text-xl font-medium mb-2">Liability for Content</h3>
            <p className="mb-4">
              The content of this website has been created with the greatest possible care. However, I cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with § 7 paragraph 1 TMG under general law. According to §§ 8 to 10 TMG, however, I am not obligated as a service provider to monitor transmitted or stored foreign information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a specific legal violation. If I become aware of any such legal violations, I will remove the content immediately.
            </p>
            
            <h3 className="text-xl font-medium mb-2">Liability for Links</h3>
            <p className="mb-4">
              My website contains links to external third-party websites over whose content I have no control. Therefore, I cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. No illegal content was discernible at the time of linking. However, continuous monitoring of the content of the linked pages is not reasonable without concrete indication of a legal violation. If I become aware of any legal violations, I will remove such links immediately.
            </p>
            
            <h3 className="text-xl font-medium mb-2">Copyright</h3>
            <p>
              The content and works created by the site operator on these pages are subject to German copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform me accordingly. If I become aware of any infringements, I will remove such content immediately.
            </p>
          </section>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Last updated: April 2025</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalNotice;
