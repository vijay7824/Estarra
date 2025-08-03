import { CardContent } from "@/components/ui/card";
import { ElegantCard } from "@/components/ui/elegant-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ExternalLink, Star, Award, Clock } from "lucide-react";

const projects = [
  {
    title: "Luxury Residential Complex",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Premium residential development featuring modern architecture and sustainable design principles.",
    features: ["Energy Efficient", "Smart Home Ready", "Premium Finishes"],
    duration: "18 months",
    rating: 5.0
  },
  {
    title: "Corporate Office Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600",
    description: "State-of-the-art commercial building with cutting-edge technology and sustainable features.",
    features: ["LEED Certified", "Smart Building", "Modern Design"],
    duration: "24 months",
    rating: 4.9
  },
  {
    title: "Heritage Home Restoration",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Complete restoration of a century-old heritage property while preserving its historical charm.",
    features: ["Heritage Preservation", "Modern Amenities", "Structural Upgrade"],
    duration: "12 months",
    rating: 5.0
  },
  {
    title: "Modern Villa Design",
    category: "Turnkey",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Contemporary villa with luxury interiors and landscaped gardens from concept to completion.",
    features: ["Luxury Interiors", "Landscaped Gardens", "Premium Quality"],
    duration: "15 months",
    rating: 4.8
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden">
      <FloatingElements variant="section" />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-600/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through innovative design and superior craftsmanship.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index}
              animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={index * 200}
            >
              <ElegantCard className="group overflow-hidden border-0 bg-white/5 backdrop-blur-md h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{project.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>Premium Quality</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group/btn">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1 ml-6"></div>
                  </div>
                </CardContent>
              </ElegantCard>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Statistics */}
        <AnimatedSection animation="fadeIn" delay={800}>
          <div className="glass-effect rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  150+
                </div>
                <div className="text-gray-400 font-semibold">Projects Completed</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  15+
                </div>
                <div className="text-gray-400 font-semibold">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  98%
                </div>
                <div className="text-gray-400 font-semibold">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  50+
                </div>
                <div className="text-gray-400 font-semibold">Expert Team</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}