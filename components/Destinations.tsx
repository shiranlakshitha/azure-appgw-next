import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, Mountain, Camera, Sunrise } from 'lucide-react';

const destinations = [
  {
    name: 'Sigiriya',
    image: '/images/dest_sigiriya.png',
    description: 'The ancient rock fortress and palace ruin.',
  },
  {
    name: 'Ella',
    image: '/images/dest_ella.png',
    description: 'Breathtaking views, tea plantations, and waterfalls.',
  },
  {
    name: 'Yala National Park',
    image: '/images/dest_yala.png',
    description: 'Home to the highest density of leopards in the world.',
  },
  {
    name: 'Mirissa',
    image: '/images/dest_mirissa.png',
    description: 'Stunning beaches and world-class whale watching.',
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Popular Destinations
          </motion.h2>
          <p className="text-lg text-gray-600">
            Explore the diverse landscapes, vibrant culture, and historical wonders that make Sri Lanka a true paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
