import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';

const Team = () => {
  const doctors = [
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Chief of Cardiology",
      experience: "15+ Years",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      description: "Specialized in interventional cardiology and heart surgery with extensive experience in complex cardiac procedures."
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurosurgeon",
      experience: "12+ Years",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      description: "Expert in minimally invasive neurosurgical techniques and treatment of brain and spinal disorders."
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Pediatrician",
      experience: "18+ Years",
      image: "https://images.pexels.com/photos/4154946/pexels-photo-4154946.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      description: "Dedicated to providing comprehensive healthcare for children from infancy through adolescence."
    },
    {
      name: "Dr. David Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "20+ Years",
      image: "https://images.pexels.com/photos/4989123/pexels-photo-4989123.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      description: "Specializes in joint replacement surgery and sports medicine with a focus on minimally invasive techniques."
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our board-certified physicians are leaders in their fields, committed to providing 
            exceptional patient care with the latest medical advances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-gray-500 mb-3">{doctor.experience}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{doctor.description}</p>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Profile
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;