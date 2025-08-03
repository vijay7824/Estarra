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
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(139, 63, 189, 0.85) 0%, rgba(217, 70, 239, 0.85) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                Build Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse-slow">
                  Dreams
                </span>{" "}
                Higher
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.3s' }}>
              Professional civil engineering and construction services with 15+ years of excellence. 
              From residential homes to commercial complexes, we make your vision reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="estarra-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all glow-effect hover:shadow-white/30 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Hammer className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Start Your Project</span>
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm hover:scale-110 hover:shadow-white/30 shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Visit
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="glass-effect rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-4xl font-black mb-2 text-yellow-300 drop-shadow-lg">15+</div>
                <div className="text-sm opacity-90 font-semibold">Years Experience</div>
              </div>
              <div className="glass-effect rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-4xl font-black mb-2 text-yellow-300 drop-shadow-lg">500+</div>
                <div className="text-sm opacity-90 font-semibold">Projects Completed</div>
              </div>
              <div className="glass-effect rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-4xl font-black mb-2 text-yellow-300 drop-shadow-lg">100%</div>
                <div className="text-sm opacity-90 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl transform rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Modern construction site with workers and equipment" 
              className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500 border-4 border-white/20" 
              style={{ animationDelay: '1s' }}
            />
            <div className="absolute -bottom-6 -right-6 glass-effect rounded-2xl p-6 shadow-2xl border border-white/30">
              <div className="text-purple-300 text-2xl font-black">₹5L+</div>
              <div className="text-white/80 font-semibold text-sm">Projects Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
