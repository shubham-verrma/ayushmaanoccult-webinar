import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-900/95 via-amber-900/95 to-orange-900/95 text-cream backdrop-blur-sm py-4 fixed w-full top-0 z-50 border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-orange-900 animate-pulse" />
            </div>
            <Moon className="w-4 h-4 text-gold absolute -top-1 -right-1 animate-bounce" />
            <Sun className="w-3 h-3 text-copper absolute -bottom-1 -left-1 animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold text-gold">Ayushmaan Occult Sciences</h1>
            <p className="text-sm text-copper font-light">Ancient Wisdom, Modern Understanding</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#workshop" className="hover:text-gold transition-colors font-medium relative group">
            Workshop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </a>
          <a href="#coach" className="hover:text-gold transition-colors font-medium relative group">
            Coach
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </a>
          <a href="#schedule" className="hover:text-gold transition-colors font-medium relative group">
            Schedule
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="hover:text-gold transition-colors font-medium relative group">
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </a>
        </nav>
        
        <a 
          href="https://ayushmaanoccult.exlyapp.com/checkout/e0947fd7-6c01-447c-9fb1-4b6abcbff549"
          className="bg-gradient-to-r from-gold to-copper text-orange-900 px-4 sm:px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/25 hover:scale-105 transition-all duration-300 border border-gold/30 text-sm sm:text-base"
        >
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Header;