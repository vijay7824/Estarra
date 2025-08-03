import { Facebook, Instagram, MessageSquare, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-black text-transparent bg-clip-text estarra-gradient">
                ESTARRA
              </div>
              <div className="ml-2 text-sm text-purple-400 font-medium">Shine higher</div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building dreams with excellence for over 15 years. Your trusted partner for all construction and civil engineering needs in Lucknow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 estarra-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 estarra-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/917392861099" 
                className="w-10 h-10 estarra-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 estarra-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:7392861099" className="hover:text-white transition-colors">
                  7392861099
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:estarragroup@gmail.com" className="hover:text-white transition-colors">
                  estarragroup@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>Plot No. 115, Banshi Bihar<br />Azad Nagar, Lucknow</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Estarra – Shine Higher
          </div>
          <div className="text-gray-400 mb-4 md:mb-0">
            Powered by Ishtika Engineers
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
