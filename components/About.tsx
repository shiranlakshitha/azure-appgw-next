import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/images/about_guide.png" 
              alt="Tourist Guide" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">10+</p>
                  <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Local Expert in Sri Lanka
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ayubowan! I am a passionate, certified tourist guide dedicated to showing you the authentic beauty, rich history, and vibrant culture of Sri Lanka. My goal is to make your journey not just a vacation, but a lifelong memory.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-green-100 p-2 text-green-600 rounded-lg h-fit">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Personalized Experiences</h3>
                  <p className="text-gray-600 mt-2">Tailor-made itineraries that fit your dreams, whether it's adventure, relaxation, or culture.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-green-100 p-2 text-green-600 rounded-lg h-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Safe & Reliable Transport</h3>
                  <p className="text-gray-600 mt-2">Comfortable, air-conditioned vehicles with a professional driver to ensure your safety and comfort.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
