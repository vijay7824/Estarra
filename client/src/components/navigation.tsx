import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import estarraLogo from "@assets/Estarra Logo-01_1754243821976.jpg";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  return (
    <nav className="fixed w-full top-0 z-50 glass-effect backdrop-blur-xl border-b border-purple-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center group">
            <img 
              src={estarraLogo} 
              alt="Estarra Logo" 
              className="w-10 h-10 rounded-lg mr-3 shadow-md transition-transform group-hover:scale-110 object-cover"
            />
            <div>
              <div className="text-2xl font-black text-gradient drop-shadow-sm">
                ESTARRA
              </div>
              <div className="text-xs text-purple-600 font-medium -mt-1">Shine higher</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:7392861099" 
              className="hidden sm:flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              7392861099
            </a>
            <Button 
              onClick={handleGetQuote}
              className="estarra-gradient text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all glow-effect hover:shadow-purple-500/50 shadow-lg"
            >
              Get Quote
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors w-full text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors w-full text-left"
              >
                Contact
              </button>
              <a 
                href="tel:7392861099" 
                className="flex items-center px-3 py-2 text-purple-600 font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                7392861099
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
