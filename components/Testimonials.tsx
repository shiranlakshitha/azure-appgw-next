import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & John',
    country: 'United Kingdom',
    text: 'Our 10-day trip was flawlessly planned. The local insights and incredible wildlife spotting made this our best holiday ever!',
    rating: 5,
  },
  {
    name: 'Michael T.',
    country: 'Australia',
    text: 'Very professional, incredibly knowledgeable, and super friendly. Felt safe and well taken care of throughout the entire journey.',
    rating: 5,
  },
  {
    name: 'Emma Lin',
    country: 'Singapore',
    text: 'From the cultural triangle to the southern beaches, everything was perfect. The vehicle was spotless and the driving was very safe.',
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-green-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Happy Travelers
          </motion.h2>
          <p className="text-lg text-green-100">
            Read what previous guests have to say about their experiences exploring Sri Lanka with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-white mb-6 italic">"{test.text}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{test.name}</h4>
                <p className="text-green-200 text-sm">{test.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
