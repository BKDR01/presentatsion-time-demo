import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      condition: "Cardiac Surgery Patient",
      rating: 5,
      text: "The cardiac team at MediCare Plus saved my life. Dr. Rodriguez and her team were exceptional, providing not just excellent medical care but also emotional support throughout my recovery.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Robert Thompson",
      condition: "Orthopedic Patient",
      rating: 5,
      text: "After my knee replacement surgery with Dr. Wilson, I'm back to playing tennis! The minimally invasive technique and excellent post-op care made all the difference.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Silva",
      condition: "Pediatric Care",
      rating: 5,
      text: "Dr. Johnson has been caring for my children for years. Her gentle approach and expertise give me complete confidence in my kids' healthcare.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="text-blue-600 mr-2" size={24} />
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;