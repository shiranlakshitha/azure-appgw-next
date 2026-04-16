import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Car, Camera, Map } from 'lucide-react';

const services = [
  {
    icon: <Compass className="w-10 h-10" />,
    title: 'Custom Itineraries',
    description: 'Fully personalized travel plans designed around your interests, pace, and budget.',
  },
  {
    icon: <Car className="w-10 h-10" />,
    title: 'Transport & Transfers',
    description: 'Safe, comfortable, and reliable airport pick-ups and round-trip transport across the island.',
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: 'Wildlife Safaris',
    description: 'Expert-guided jeep safaris in top national parks to spot leopards, elephants, and exotic birds.',
  },
  {
    icon: <Map className="w-10 h-10" />,
    title: 'Cultural Heritage Tours',
    description: 'Deep dive into ancient cities, temples, and UNESCO World Heritage sites with profound historical insights.',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            My Services
          </motion.h2>
          <p className="text-lg text-gray-600">
            Comprehensive travel solutions to ensure your Sri Lankan holiday is smooth, safe, and entirely unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-green-600 mb-6 bg-green-50 w-fit p-4 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
