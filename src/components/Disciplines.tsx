import { motion } from "framer-motion";
import { Brain, Database, LineChart, Network } from "lucide-react";

const disciplines = [
  {
    icon: <Database className="w-16 h-16 text-red-600" />,
    title: "Traitement de Données",
    description: "Nettoyage, transformation et préparation des données pour l'analyse"
  },
  {
    icon: <LineChart className="w-16 h-16 text-red-600" />,
    title: "Analyse Statistique",
    description: "Analyses descriptives et inférentielles pour des insights précis"
  },
  {
    icon: <Brain className="w-16 h-16 text-red-600" />,
    title: "Intelligence Artificielle",
    description: "Solutions avancées basées sur le machine learning et le deep learning"
  },
  {
    icon: <Network className="w-16 h-16 text-red-600" />,
    title: "Big Data",
    description: "Gestion et analyse de grands volumes de données"
  }
];

export const Disciplines = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nos Disciplines</h2>
          <p className="text-xl text-gray-600">
            Expertise complète en analyse et traitement des données
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{discipline.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{discipline.title}</h3>
              <p className="text-gray-600">{discipline.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};