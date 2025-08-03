import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, Star, Target } from "lucide-react";
import estarraLogo from "@assets/Estarra Logo-01_1754243821976.jpg";
import teamImage from "@assets/WhatsApp Image 2025-08-03 at 2.49.47 PM_1754243821976.jpeg";

const achievements = [
  { icon: Award, title: "Award-Winning", description: "Multiple industry recognitions" },
  { icon: Users, title: "Expert Team", description: "50+ skilled professionals" },
  { icon: Clock, title: "15+ Years", description: "Proven track record" },
  { icon: CheckCircle, title: "Quality First", description: "Uncompromising standards" }
];

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring the highest quality standards in all our projects."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing cutting-edge technology and sustainable practices to deliver future-ready solutions."
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your vision is our mission. We work closely with clients to exceed expectations every time."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-gray-50 relative overflow-hidden">
      <FloatingElements variant="minimal" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.05'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
              About Estarra
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Building <span className="text-gradient">Dreams</span> Since 2008
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of excellence in construction and engineering, we transform visions into reality.
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left Side - Content */}
          <AnimatedSection animation="slideLeft">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={estarraLogo} 
                  alt="Estarra Logo" 
                  className="w-16 h-16 rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Estarra Group</h3>
                  <p className="text-purple-600 font-semibold">Powered by Ishtika Engineers</p>
                </div>
              </div>
              
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Estarra stands as a beacon of excellence in the construction industry, combining traditional craftsmanship with modern innovation. Based in Lucknow, we've been transforming the architectural landscape with our comprehensive range of services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our commitment to quality, sustainability, and client satisfaction has made us the preferred choice for residential, commercial, and industrial projects across the region.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-purple-100 leading-relaxed">
                  "To create exceptional spaces that enhance lives and communities through innovative design, sustainable practices, and uncompromising quality."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-16 h-1 bg-white/30 rounded-full">
                    <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                  </div>
                  <span className="text-yellow-400 font-bold text-lg">Shine Higher</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Image & Stats */}
          <AnimatedSection animation="slideRight">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={teamImage}
                  alt="Estarra Team"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h4 className="text-white font-bold text-xl mb-2">Expert Team</h4>
                    <p className="text-white/80">Dedicated professionals committed to excellence</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-purple-100">
                <div className="text-3xl font-black text-purple-600">150+</div>
                <div className="text-sm text-gray-600 font-semibold">Projects Done</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-purple-100">
                <div className="text-3xl font-black text-purple-600">98%</div>
                <div className="text-sm text-gray-600 font-semibold">Happy Clients</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Achievements Grid */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} 
                className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-purple-100/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 estarra-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection animation="slideUp" delay={600}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and shape every project we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} 
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white via-purple-50/30 to-white border border-purple-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create something extraordinary together. Our team is ready to bring your dreams to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-900 font-bold px-8 py-4 rounded-full"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}