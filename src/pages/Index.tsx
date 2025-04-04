
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Expertise } from "@/components/home/Expertise";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Expertise />
    </Layout>
  );
};

export default Index;
