import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SG-SERVICE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Excellence in Data Analysis & Processing
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Discover Our Services
          </button>
        </motion.div>
      </div>
    </div>
  );
};