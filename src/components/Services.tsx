import React from 'react';
import { Heart, Brain, Eye, Stethoscope, Activity, Shield, Baby, Bone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care and cardiovascular treatments with state-of-the-art technology.",
      color: "red"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain and nervous system disorders.",
      color: "purple"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services including surgery and vision correction.",
      color: "blue"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services for all ages with preventive healthcare focus.",
      color: "green"
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response capabilities.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular health screenings and preventive treatments to maintain wellness.",
      color: "teal"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents.",
      color: "pink"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Comprehensive bone, joint, and muscle care including surgical treatments.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive healthcare services with cutting-edge technology and 
            compassionate care across multiple medical specialties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;