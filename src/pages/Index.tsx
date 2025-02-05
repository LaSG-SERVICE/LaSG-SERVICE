import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DataViz } from "@/components/DataViz";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Courses />
      <DataViz />
      <Contact />
    </div>
  );
};

export default Index;