import React from 'react';
import { Star, Moon, Sun, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream py-20 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="footer-mystical" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M100,20 L180,100 L100,180 L20,100 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-mystical)" className="text-gold"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-orange-900" />
                </div>
                <Moon className="w-4 h-4 text-gold absolute -top-1 -right-1" />
                <Sun className="w-3 h-3 text-copper absolute -bottom-1 -left-1" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-gold">Ayushmaan Occult Sciences</h3>
                <p className="text-copper font-medium">Ancient Wisdom, Modern Understanding</p>
              </div>
            </div>
            <p className="text-cream/90 mb-8 leading-relaxed text-lg">
              Empowering souls through the profound wisdom of Vedic astrology and ancient mystical sciences. 
              Join thousands of enlightened students who have transformed their lives through cosmic understanding and sacred knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-gold/20 to-copper/20 p-4 rounded-full hover:bg-gold/30 transition-colors border border-gold/30 hover:scale-110 transform duration-300">
                <Facebook className="w-6 h-6 text-gold" />
              </a>
              <a href="https://www.instagram.com/shweetaoberoiofficial/" className="bg-gradient-to-r from-gold/20 to-copper/20 p-4 rounded-full hover:bg-gold/30 transition-colors border border-gold/30 hover:scale-110 transform duration-300">
                <Instagram className="w-6 h-6 text-gold" />
              </a>
              <a href="#" className="bg-gradient-to-r from-gold/20 to-copper/20 p-4 rounded-full hover:bg-gold/30 transition-colors border border-gold/30 hover:scale-110 transform duration-300">
                <Youtube className="w-6 h-6 text-gold" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-8 text-gold">Sacred Links</h4>
            <ul className="space-y-4">
              <li><a href="#workshop" className="text-cream/90 hover:text-gold transition-colors font-medium flex items-center group">
                <span className="w-2 h-2 bg-copper rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                Workshop Details
              </a></li>
              <li><a href="#coach" className="text-cream/90 hover:text-gold transition-colors font-medium flex items-center group">
                <span className="w-2 h-2 bg-copper rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                Meet Shweeta
              </a></li>
              <li><a href="#schedule" className="text-cream/90 hover:text-gold transition-colors font-medium flex items-center group">
                <span className="w-2 h-2 bg-copper rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                Sacred Schedule
              </a></li>
              <li><a href="#testimonials" className="text-cream/90 hover:text-gold transition-colors font-medium flex items-center group">
                <span className="w-2 h-2 bg-copper rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                Testimonials
              </a></li>
              <li><a href="#" className="text-cream/90 hover:text-gold transition-colors font-medium flex items-center group">
                <span className="w-2 h-2 bg-copper rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                Mystical Blog
              </a></li>
              <li><a href="#" className="text-cream/90 hover:text-gold transition-colors font-medium flex items-center group">
                <span className="w-2 h-2 bg-copper rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                Sacred Resources
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-8 text-gold">Sacred Contact</h4>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-gold to-copper p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-orange-900" />
                </div>
                <span className="text-cream/90 font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-gold to-copper p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-orange-900" />
                </div>
                <span className="text-cream/90 font-medium">info@ayushmaanoccult.com</span>
              </div>
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-gold to-copper p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-orange-900" />
                </div>
                <span className="text-cream/90 font-medium">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/30 mt-16 pt-12 text-center">
          <div className="mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-copper mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-cream/90 mb-4 text-lg font-medium">
            © 2024 Ayushmaan Occult Sciences. All sacred rights reserved.
          </p>
          <p className="text-sm text-copper font-medium">
            Designed with cosmic energy, ancient wisdom, and modern mystical technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;