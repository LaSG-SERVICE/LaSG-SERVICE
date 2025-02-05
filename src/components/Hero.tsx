import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] relative flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
          alt="Data Analysis Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/0e2d439e-e5b1-47f7-8d24-89ccea39077a.png"
              alt="SG-SERVICE Logo"
              className="mx-auto h-32 md:h-40"
            />
          </div>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light italic">
            Notre seul but, faire parler la donnée
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Centre d'excellence en traitement et analyse des données
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Découvrir nos services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};