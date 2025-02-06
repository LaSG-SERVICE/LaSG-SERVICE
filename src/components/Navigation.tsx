import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Navigation = () => {
  return (
    <div className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/" className="text-white hover:text-red-500 transition-colors">
                Accueil
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-red-500 bg-transparent">
                Formation
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[600px]">
                  <div className="grid grid-cols-1 gap-4">
                    <NavigationMenuLink asChild>
                      <Link to="/formations/analyse-donnees" className="block p-4 hover:bg-red-600 space-y-2 rounded-lg">
                        <h3 className="font-bold">Traitement et Analyse de Données</h3>
                        <p className="text-sm text-gray-200">Introduction aux techniques d'analyse de données par SG-SERVICE. Découvrez les fondamentaux de l'analyse exploratoire et du nettoyage des données.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/machine-learning" className="block p-4 hover:bg-red-600 space-y-2 rounded-lg">
                        <h3 className="font-bold">Machine Learning & IA</h3>
                        <p className="text-sm text-gray-200">Formation complète en ML et IA par SG-SERVICE. Des algorithmes de base aux modèles avancés de deep learning.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/big-data" className="block p-4 hover:bg-red-600 space-y-2 rounded-lg">
                        <h3 className="font-bold">Big Data & Data Engineering</h3>
                        <p className="text-sm text-gray-200">Maîtrisez les outils Big Data avec SG-SERVICE. De Hadoop à Spark, en passant par les pipelines de données.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/data-viz" className="block p-4 hover:bg-red-600 space-y-2 rounded-lg">
                        <h3 className="font-bold">Data Visualisation & BI</h3>
                        <p className="text-sm text-gray-200">Créez des visualisations impactantes avec SG-SERVICE. Tableau, Power BI et d'autres outils de BI.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/statistiques" className="block p-4 hover:bg-red-600 space-y-2 rounded-lg">
                        <h3 className="font-bold">Statistiques Avancées</h3>
                        <p className="text-sm text-gray-200">Approfondissez vos connaissances en statistiques avec SG-SERVICE. De l'inférence aux séries temporelles.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/python-r" className="block p-4 hover:bg-red-600 space-y-2 rounded-lg">
                        <h3 className="font-bold">Programmation Python & R</h3>
                        <p className="text-sm text-gray-200">Développez vos compétences en programmation data avec SG-SERVICE. Python, R et leurs bibliothèques essentielles.</p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                      <h4 className="font-semibold mb-2">Contactez-nous pour plus d'informations :</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>+226 72 63 78 75 / +33 (0) 7 49 57 06 75</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>sgservicesarl@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/cours" className="text-white hover:text-red-500 transition-colors">
                Réseaux Sociaux
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/disciplines" className="text-white hover:text-red-500 transition-colors">
                Nos Disciplines
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/rejoindre" className="text-white hover:text-red-500 transition-colors">
                Nous Rejoindre
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="text-white hover:text-red-500 transition-colors">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navigation;