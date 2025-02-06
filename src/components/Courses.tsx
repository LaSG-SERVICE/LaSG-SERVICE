import { motion } from "framer-motion";
import { Users, Eye, UserPlus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    title: "Les cours sur les analyses de données sur Youtube",
    description: "Maîtrisez les techniques d'analyse de données modernes",
    subscribers: "1.2K",
    views: "15K",
    visitors: "8K",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070",
    link: "https://www.youtube.com/channel/UCRfCp9SSZ2PKmTNknhziUVQ"
  },
  {
    title: "Les postes sur les methodes de traitement et d'analyse des données sur linkedin",
    description: "Introduction aux concepts clés du machine learning",
    subscribers: "850",
    views: "12K",
    visitors: "5K",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    link: "https://www.linkedin.com/company/102166985/admin/dashboard/"
  },
  {
    title: "Postes sur Facebook",
    description: "Créez des visualisations de données percutantes",
    subscribers: "950",
    views: "10K",
    visitors: "6K",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070",
    link: "https://www.facebook.com/profile.php?id=100088854925502"
  }
];

export const Courses = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Nos Réseaux Sociaux</h2>
          <p className="text-xl text-gray-600">
            Suivez-nous sur les réseaux sociaux pour plus de contenu sur l'analyse de données
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <UserPlus className="w-4 h-4" />
                      <span>{course.subscribers} abonnés</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{course.views} vues</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.visitors} visiteurs</span>
                    </div>
                  </div>
                  <a 
                    href={course.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 block text-center"
                  >
                    Accéder au cours
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};