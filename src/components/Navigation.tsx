import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

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
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-1 gap-2">
                    <NavigationMenuLink asChild>
                      <Link to="/formations/analyse-donnees" className="block p-2 hover:bg-red-600">
                        Traitement et Analyse de Données
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/machine-learning" className="block p-2 hover:bg-red-600">
                        Machine Learning & IA
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/big-data" className="block p-2 hover:bg-red-600">
                        Big Data & Data Engineering
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/data-viz" className="block p-2 hover:bg-red-600">
                        Data Visualisation & BI
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/statistiques" className="block p-2 hover:bg-red-600">
                        Statistiques Avancées
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/python-r" className="block p-2 hover:bg-red-600">
                        Programmation Python & R
                      </Link>
                    </NavigationMenuLink>
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