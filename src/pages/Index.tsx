import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DataViz } from "@/components/DataViz";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";
import { Disciplines } from "@/components/Disciplines";
import { JoinUs } from "@/components/JoinUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Courses />
      <Disciplines />
      <DataViz />
      <JoinUs />
      <Contact />
    </div>
  );
};

export default Index;