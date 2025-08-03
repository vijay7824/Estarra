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
    <section id="about" className="py-24 bg-gradient-to-br from-purple-600 to-purple-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              15+ Years of Building Excellence
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              At Estarra, we don't just construct buildings; we craft dreams into reality. With over 15 years of expertise in civil engineering and construction, we have established ourselves as Lucknow's premier construction partner.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team working on a building site" 
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-purple-600 text-3xl font-black">500+</div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
