import { BarChart3, Database, LineChart, Brain } from "lucide-react";

const services = [
  {
    icon: <Database className="w-12 h-12 text-red-600" />,
    title: "Data Processing",
    description: "Advanced data processing solutions for your business needs"
  },
  {
    icon: <LineChart className="w-12 h-12 text-red-600" />,
    title: "Statistical Analysis",
    description: "Comprehensive statistical analysis and interpretation"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-red-600" />,
    title: "Data Visualization",
    description: "Clear and insightful data visualization solutions"
  },
  {
    icon: <Brain className="w-12 h-12 text-red-600" />,
    title: "Machine Learning",
    description: "Cutting-edge machine learning implementations"
  }
];

export const Services = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};