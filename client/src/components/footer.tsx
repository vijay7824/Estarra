import { Facebook, Instagram, MessageSquare, Linkedin } from "lucide-react";
import estarraLogo from "@assets/Estarra Logo-01_1754243821976.jpg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-500 rounded-full blur-xl animate-float"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="w-12 h-12 estarra-gradient rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <div>
                <div className="text-3xl font-black text-gradient drop-shadow-sm">
                  ESTARRA
                </div>
                <div className="text-sm text-purple-300 font-medium -mt-1">Shine higher</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Building dreams with excellence for over 15 years. Your trusted partner for all construction and civil engineering needs in Lucknow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all border border-white/20 glow-effect hover:shadow-purple-500/50 group"
              >
                <Facebook className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all border border-white/20 glow-effect hover:shadow-pink-500/50 group"
              >
                <Instagram className="w-6 h-6 group-hover:text-pink-300 transition-colors" />
              </a>
              <a 
                href="https://wa.me/917392861099" 
                className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all border border-white/20 glow-effect hover:shadow-green-500/50 group"
              >
                <MessageSquare className="w-6 h-6 group-hover:text-green-300 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all border border-white/20 glow-effect hover:shadow-blue-500/50 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
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
