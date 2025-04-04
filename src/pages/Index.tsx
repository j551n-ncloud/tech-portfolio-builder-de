
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Career } from "@/components/home/Career";
import { Expertise } from "@/components/home/Expertise";
import { Services } from "@/components/home/Services";
import { Articles } from "@/components/home/Articles";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Career />
      <Expertise />
      <Services />
      <Articles />
    </Layout>
  );
};

export default Index;
