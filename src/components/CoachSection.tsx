import React from 'react';
import { Award, BookOpen, Users, Star, Calendar, Trophy } from 'lucide-react';

const CoachSection = () => {
  const achievements = [
    { icon: Calendar, text: "15+ Years Sacred Practice" },
    { icon: Users, text: "5000+ Souls Guided" },
    { icon: Award, text: "Certified Vedic Master" },
    { icon: BookOpen, text: "Published Mystic Author" },
    { icon: Trophy, text: "International Recognition" },
    { icon: Star, text: "98% Transformation Rate" }
  ];

  return (
    <section id="coach" className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream relative overflow-hidden">
      {/* Mystical background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="mystical-mandala" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="150" cy="150" r="70" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="150" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M150,50 L150,250 M50,150 L250,150" stroke="currentColor" strokeWidth="1"/>
              <path d="M220,80 L80,220 M80,80 L220,220" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mystical-mandala)" className="text-gold"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl">
                  <Star className="w-10 h-10 text-orange-900" />
                </div>
                <div className="absolute inset-0 bg-gold rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Meet Your Sacred Guide
            </h2>
            <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
              Learn from a mystical master who has dedicated her life to understanding the cosmic sciences and ancient wisdom traditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gold to-copper rounded-3xl p-2 shadow-2xl">
                <div className="bg-gradient-to-br from-orange-800 to-amber-800 rounded-2xl p-12 h-full relative overflow-hidden">
                  {/* Decorative mystical symbols */}
                  <div className="absolute top-4 right-4 text-6xl text-gold/20">☽</div>
                  <div className="absolute bottom-4 left-4 text-4xl text-copper/20">✦</div>
                  
                  <div className="w-56 h-56 mx-auto mb-8 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl relative">
                    <div className="w-52 h-52 bg-gradient-to-br from-orange-800 to-amber-800 rounded-full flex items-center justify-center border-4 border-gold/30">
                      <span className="text-7xl font-serif font-bold text-gold">SO</span>
                    </div>
                    <div className="absolute inset-0 bg-gold rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-4xl font-serif font-bold mb-3 text-gold">Shweeta Oberoi</h3>
                    <p className="text-copper text-xl mb-6 font-medium">Master Vedic Astrologer & Mystic</p>
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-7 h-7 text-gold fill-current mx-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-gold">About the Mystic</h3>
                <p className="text-lg text-cream/90 mb-6 leading-relaxed">
                  Shweeta Oberoi is a renowned Vedic astrologer and mystical practitioner with over 15 years of sacred experience in guiding 
                  souls through the profound wisdom of ancient astronomical sciences. Her deep understanding of 
                  Kundali analysis and cosmic energies has helped thousands discover their divine purpose and navigate 
                  life's mystical journey with clarity and spiritual confidence.
                </p>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  With a unique gift for translating complex astrological and mystical concepts into practical spiritual guidance, 
                  Shweeta has become a trusted oracle in the field of Vedic astrology. Her sacred teachings combine 
                  ancient wisdom with modern understanding, making timeless knowledge accessible to contemporary seekers of truth.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-serif font-bold mb-8 text-gold">Sacred Achievements & Credentials</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center bg-gradient-to-r from-cream/10 to-gold/10 backdrop-blur-sm rounded-xl p-5 hover:bg-cream/20 transition-all border border-gold/20">
                      <achievement.icon className="w-7 h-7 text-gold mr-4" />
                      <span className="text-cream font-medium">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold to-copper rounded-2xl p-8 text-orange-900 shadow-xl">
                <h4 className="text-2xl font-serif font-bold mb-4">"My Sacred Mission"</h4>
                <p className="text-lg font-medium leading-relaxed">
                  "To empower souls with the profound wisdom of Vedic astrology and ancient mystical sciences, helping them understand 
                  their cosmic blueprint and live in divine harmony with universal energies and their highest purpose."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50">
              Begin Your Journey with Shweeta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;