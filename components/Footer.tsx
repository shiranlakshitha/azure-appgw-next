import React from 'react';
import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white mb-6">
              <MapPin className="w-8 h-8 text-green-500" />
              CeylonGuide
            </a>
            <p className="text-gray-400 max-w-sm">
              Your trusted partner for memorable and authentic travel experiences in the pearl of the Indian Ocean.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Me</a></li>
              <li><a href="#destinations" className="hover:text-green-400 transition-colors">Destinations</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Follow Me</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CeylonGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
