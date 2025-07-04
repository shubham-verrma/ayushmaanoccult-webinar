import React from 'react';
import { Stars, Calendar, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-900 via-amber-800 to-orange-800 text-cream overflow-hidden">
      {/* Mystical background patterns */}
      <div className="absolute inset-0">
        {/* Sacred geometry overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="sacred-geometry" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                <polygon points="100,20 180,180 20,180" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sacred-geometry)" className="text-gold"/>
          </svg>
        </div>
        
        {/* Floating mystical symbols */}
        <div className="mystical-symbols">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-gold/20 text-2xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'][i]}
            </div>
          ))}
        </div>
        
        {/* Constellation stars */}
        <div className="star-field">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl shadow-gold/30">
                <Stars className="w-12 h-12 text-orange-900 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 bg-gold rounded-full blur-xl opacity-30 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 bg-gradient-to-r from-gold via-copper to-gold bg-clip-text text-transparent animate-fade-in">
            Kundali Wisdom
          </h1>
          
          <div className="relative mb-6">
            <p className="text-3xl md:text-4xl text-copper font-serif italic animate-slide-up">
              Mastering the Basics of Vedic Astrology
            </p>
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-gold opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gold opacity-50"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Unlock the ancient secrets of Vedic astrology and discover your cosmic blueprint in this transformative 3-day mystical journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-8 py-4 border border-gold/30">
              <Calendar className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">3 Days Intensive</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-8 py-4 border border-gold/30">
              <Clock className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">2 Hours Daily</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-8 py-4 border border-gold/30">
              <Users className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">Expert Guidance</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-gold to-copper text-orange-900 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 animate-glow">
              Secure Your Mystical Journey - Limited Seats!
            </button>
            <button className="border-2 border-gold text-gold px-10 py-5 rounded-full text-xl font-bold hover:bg-gold hover:text-orange-900 transition-all duration-300 backdrop-blur-sm">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;