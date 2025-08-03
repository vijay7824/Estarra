import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Luxury Villa Project",
    description: "Premium residential construction in Lucknow",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Corporate Office Complex",
    description: "Commercial building construction",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Residential Complex",
    description: "Multi-story residential development",
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Interior Design Project",
    description: "Contemporary home interior",
  },
  {
    image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Industrial Facility",
    description: "Institutional construction project",
  },
  {
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Kitchen Renovation",
    description: "Complete home remodeling",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-200/20 rounded-full blur-lg animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 animate-slide-up">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our portfolio of successfully completed projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="glass-effect rounded-full p-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold">Completed</span>
                  </div>
                </div>
              </div>
              
              {/* Project info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button className="estarra-gradient text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all glow-effect shadow-xl hover:shadow-purple-500/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">View All Projects</span>
            </Button>
            <div className="text-sm text-gray-500 font-medium">
              500+ Projects Completed Successfully
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
