import { BarChart3, Database, LineChart, Brain } from "lucide-react";

const services = [
  {
    icon: <Database className="w-12 h-12 text-red-600" />,
    title: "Data Processing",
    description: "Advanced data processing solutions for your business needs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    icon: <LineChart className="w-12 h-12 text-red-600" />,
    title: "Statistical Analysis",
    description: "Comprehensive statistical analysis and interpretation",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-red-600" />,
    title: "Data Visualization",
    description: "Clear and insightful data visualization solutions",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
  },
  {
    icon: <Brain className="w-12 h-12 text-red-600" />,
    title: "Machine Learning",
    description: "Cutting-edge machine learning implementations",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
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
              className="group relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};