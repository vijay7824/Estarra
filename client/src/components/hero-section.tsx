import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ArrowRight, Play, Award, Users, Building } from "lucide-react";

export default function HeroSection() {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in Estarra's construction services. I'd like to discuss my project requirements.`;
    window.open(`https://wa.me/917392861099?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center">
      <FloatingElements variant="hero" />
      
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-gray-900/80 to-black/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black z-20"></div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-opacity='0.05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <AnimatedSection animation="slideLeft">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white font-semibold">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>15+ Years of Excellence</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-normal">
                Built on Dreams.
                <span className="block text-gradient animate-pulse-slow">
                  Designed to Shine Higher
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mt-6">
                Transform your vision into reality with Estarra's premium construction services. From residential homes to commercial complexes, we deliver excellence that lasts.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={600}>
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">150+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">Award Winning</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="estarra-gradient text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 glow-effect group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  WhatsApp Consultation
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={1000}>
              <div className="flex items-center gap-4 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white/20 flex items-center justify-center text-white font-bold text-sm">
                      {i === 1 ? '5' : i === 2 ? '★' : i === 3 ? '4.9' : '✓'}
                    </div>
                  ))}
                </div>
                <div className="text-white/80">
                  <div className="font-semibold">Trusted by 150+ clients</div>
                  <div className="text-sm text-gray-400">4.9/5 average rating</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Side - Visual Content */}
          <AnimatedSection animation="slideRight" delay={400} className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Modern Construction"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Stats Cards */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-black text-white">15+</div>
                  <div className="text-white/80 text-sm font-semibold">Years Experience</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-black text-white">150+</div>
                  <div className="text-white/80 text-sm font-semibold">Projects Completed</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Award className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-xl animate-pulse-slow">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <AnimatedSection animation="fadeIn" delay={1200} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
            <span className="text-sm font-semibold">Explore Our Work</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}