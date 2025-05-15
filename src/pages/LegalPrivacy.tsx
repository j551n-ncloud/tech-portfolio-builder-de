
import { Layout } from "@/components/layout/Layout";

const LegalPrivacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Statement</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Responsible Party</h2>
            <p className="mb-4">
              Name: Johannes Nguyen<br />
              Address: Heinrich-böll-straße 28, 68723 Oftersheim, Germany<br />
              Email: Johannes.quangminh.nguyen@gmail.com<br />
            </p>
            <p>
              As the operator of this website, I take the protection of your personal data very seriously. I collect and process personal data in compliance with the applicable data protection regulations, in particular the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Collection and Processing of Personal Data</h2>
            <p className="mb-4">
              When you visit my website, certain information is automatically collected and stored in server log files. This information includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser type and version</li>
              <li>Operating system used</li>
              <li>Referrer URL (the previously visited page)</li>
              <li>IP address (anonymized)</li>
              <li>Date and time of the server request</li>
            </ul>
            <p>
              This data cannot be attributed to specific individuals. I do not merge this data with other data sources. The data is collected to ensure the proper functioning of the website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
            <p className="mb-4">
              My website uses cookies. Cookies are small text files that are stored on your device and that allow an analysis of your use of the website. The cookies I use are "session cookies" that are automatically deleted after your visit.
            </p>
            <p>
              You can prevent the storage of cookies by setting your browser accordingly. However, please note that if you do this, you may not be able to use all the features of this website to their full extent.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
            <p>
              If you wish to exercise any of these rights, please contact me using the contact information provided above.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              I implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. Despite these measures, I cannot guarantee that unauthorized third parties will not gain access to your data.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to this Privacy Statement</h2>
            <p>
              I reserve the right to amend this privacy statement at any time in compliance with the applicable data protection regulations. The current version is available on this website.
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

export default LegalPrivacy;
