import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
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
                        Analyse de Données
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/formations/machine-learning" className="block p-2 hover:bg-red-600">
                        Machine Learning
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/cours" className="text-white hover:text-red-500 transition-colors">
                Cours
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