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
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text estarra-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successfully completed projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="estarra-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
