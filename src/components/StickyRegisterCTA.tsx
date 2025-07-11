import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

const StickyRegisterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of viewport height
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-900 to-amber-900 text-cream shadow-2xl border-t-2 border-gold/50 animate-slide-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="bg-gradient-to-r from-gold to-copper p-2 rounded-full">
              <Star className="w-6 h-6 text-orange-900" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-serif font-bold text-gold mb-1">
                Limited Seats Available!
              </h3>
              <p className="text-sm text-cream/90">
                Join 5000+ students • Only ₹99 • 3-Day Workshop
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href="https://ayushmaanoccult.exlyapp.com/checkout/03a9e492-280c-498d-97eb-9cde79d5a1f2?init_booking=True"
              className="bg-gradient-to-r from-gold to-copper text-orange-900 px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gold/30 whitespace-nowrap"
            >
              Register Now
            </a>
            <button
              onClick={handleDismiss}
              className="text-cream/70 hover:text-cream transition-colors p-2 hidden sm:block"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyRegisterCTA;