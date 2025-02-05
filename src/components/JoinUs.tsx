import { motion } from "framer-motion";
import { Award, BookOpen, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Award className="w-12 h-12 text-red-600" />,
    title: "Excellence",
    description: "Rejoignez une équipe d'experts passionnés"
  },
  {
    icon: <BookOpen className="w-12 h-12 text-red-600" />,
    title: "Formation Continue",
    description: "Développez vos compétences avec nos programmes de formation"
  },
  {
    icon: <Users className="w-12 h-12 text-red-600" />,
    title: "Environnement Collaboratif",
    description: "Travaillez dans une ambiance dynamique et stimulante"
  },
  {
    icon: <Zap className="w-12 h-12 text-red-600" />,
    title: "Innovation",
    description: "Participez à des projets innovants et challengeants"
  }
];

export const JoinUs = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nous Rejoindre</h2>
          <p className="text-xl text-gray-600 mb-8">
            Construisez votre carrière dans l'analyse de données avec nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Postuler Maintenant
          </button>
        </motion.div>
      </div>
    </div>
  );
};