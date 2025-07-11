import React, { useState, useEffect } from 'react';
import { Stars, Calendar, Clock, Users, Gift, Zap } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Editable countdown target date - can be modified by admin
  const [targetDate, setTargetDate] = useState('2024-02-25T23:59:59');
  const [workshopDate, setWorkshopDate] = useState('15-17 February 2024');
  const [workshopTime, setWorkshopTime] = useState('7:00 PM - 8:00 PM IST');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

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
          
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            The magical thing about Astrology is you are completely unique, No chart will ever be replicated again. 
            Humari 3-day astrology workshop ko join karein, and kundli banana seekhein.
          </p>

          {/* Date and Time Placeholder */}
          <div className="bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gold/30 max-w-2xl mx-auto">
            {isEditing && (
              <div className="mb-4 space-y-4">
                <input
                  type="text"
                  value={workshopDate}
                  onChange={(e) => setWorkshopDate(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-cream text-orange-900 font-semibold"
                  placeholder="Workshop Date"
                />
                <input
                  type="text"
                  value={workshopTime}
                  onChange={(e) => setWorkshopTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-cream text-orange-900 font-semibold"
                  placeholder="Workshop Time"
                />
                <input
                  type="datetime-local"
                  value={targetDate.slice(0, -3)}
                  onChange={(e) => setTargetDate(e.target.value + ':59')}
                  className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-cream text-orange-900 font-semibold"
                />
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Workshop Schedule</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 text-gold hover:text-copper transition-colors text-sm"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3 text-gold" />
                <span className="text-cream font-semibold">{workshopDate}</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 mr-3 text-gold" />
                <span className="text-cream font-semibold">{workshopTime}</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="bg-gradient-to-r from-gold to-copper text-orange-900 px-6 py-2 rounded-full font-bold text-lg">
                Online Session on Zoom
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-orange-900/80 to-amber-900/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gold/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gold mb-6">Limited Time Offer Ends In:</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gradient-to-br from-gold to-copper text-orange-900 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">{value}</div>
                  <div className="text-sm font-semibold uppercase">{unit}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center mb-16">
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-6 py-4 border border-gold/30">
              <Calendar className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">3 Days Intensive</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-6 py-4 border border-gold/30">
              <Clock className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">1 Hour Daily</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-6 py-4 border border-gold/30">
              <Users className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">Zoom Class</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-6 py-4 border border-gold/30">
              <Gift className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">Free Resources</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-full px-6 py-4 border border-gold/30">
              <Zap className="w-6 h-6 mr-3 text-gold" />
              <span className="text-lg font-semibold text-cream">20+ Years Expert</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://ayushmaanoccult.exlyapp.com/checkout/03a9e492-280c-498d-97eb-9cde79d5a1f2?init_booking=True"
              className="bg-gradient-to-r from-gold to-copper text-orange-900 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 animate-glow"
            >
              Register Now - Limited Seats Only!
            </a>
          </div>

          {/* Pricing */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-green-700/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-green-500/30">
              <span className="text-3xl font-bold text-green-400 mr-4">₹99</span>
              <span className="text-xl text-gray-400 line-through mr-4">₹198</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;