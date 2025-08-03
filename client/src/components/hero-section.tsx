import { Button } from "@/components/ui/button";
import { Hammer, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(139, 63, 189, 0.9) 0%, rgba(217, 70, 239, 0.9) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="animate-float">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Build Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Dreams
                </span>{" "}
                Higher
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
              Professional civil engineering and construction services with 15+ years of excellence. 
              From residential homes to commercial complexes, we make your vision reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="estarra-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                <Hammer className="w-5 h-5 mr-3" />
                Start Your Project
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Visit
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black mb-2">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-black mb-2">100%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Modern construction site with workers and equipment" 
              className="rounded-3xl shadow-2xl w-full animate-float" 
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
