import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Licensed & Certified Engineers",
  "Quality Materials & Craftsmanship",
  "On-Time Project Delivery",
  "24/7 Customer Support",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-yellow-300/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-300/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-block mb-6">
              <span className="glass-effect text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                About Estarra
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 animate-slide-up drop-shadow-lg">
              15+ Years of Building <span className="text-yellow-300">Excellence</span>
            </h2>
            <p className="text-xl mb-10 opacity-95 leading-relaxed animate-fade-in drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
              At Estarra, we don't just construct buildings; we craft dreams into reality. With over 15 years of expertise in civil engineering and construction, we have established ourselves as Lucknow's premier construction partner.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center group animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform border border-white/30">
                    <Check className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <span className="text-lg font-medium drop-shadow-sm group-hover:text-yellow-200 transition-colors">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:scale-105 transition-all shadow-xl hover:shadow-white/30 glow-effect animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative animate-float">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-yellow-300/20 rounded-3xl blur-2xl transform rotate-3"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team working on a building site" 
              className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500 border-4 border-white/20"
            />
            
            {/* Stats cards */}
            <div className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 shadow-2xl border border-white/30 hover:scale-105 transition-transform">
              <div className="text-yellow-300 text-3xl font-black drop-shadow-lg">500+</div>
              <div className="text-white/90 font-semibold">Happy Clients</div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/30 hover:scale-105 transition-transform">
              <div className="text-yellow-300 text-2xl font-black drop-shadow-lg">15+</div>
              <div className="text-white/90 font-semibold text-sm">Years</div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-yellow-300/30 rounded-full blur-sm animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-white/30 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
