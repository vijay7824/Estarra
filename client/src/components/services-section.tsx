import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Key, Wrench, Paintbrush, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes designed and built to your exact specifications with premium materials and craftsmanship.",
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Professional commercial and institutional construction projects with modern design and functionality.",
  },
  {
    icon: Key,
    title: "Turnkey Projects",
    description: "Complete project solutions from design to delivery, handling every aspect of your construction needs.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with innovative renovation and remodeling solutions that add value.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Complete interior design and execution services to create beautiful, functional living spaces.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Professional project management and consulting services to ensure timely and quality delivery.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text estarra-gradient">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to bring your vision to life with unmatched quality and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-gray-200 hover:border-purple-200"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 estarra-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  <span>Learn More</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
