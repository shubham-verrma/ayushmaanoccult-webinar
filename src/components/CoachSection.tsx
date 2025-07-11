import React from 'react';
import { Award, BookOpen, Users, Star, Calendar, Trophy } from 'lucide-react';

const CoachSection = () => {
  const achievements = [
    { icon: Calendar, text: "20+ Years Sacred Practice" },
    { icon: Users, text: "5000+ Souls Guided" },
    { icon: Award, text: "Certified Vedic Master" },
    { icon: BookOpen, text: "University Acharya Degree" },
    { icon: Trophy, text: "Award-Winning Expert" },
    { icon: Star, text: "Shree Vidhya Sadhak" }
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
              About the Creator
            </h2>
            <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
              Learn from a mystical master who has dedicated her life to understanding the cosmic sciences and ancient wisdom traditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gold to-copper rounded-3xl p-2 shadow-2xl">
                <div className="bg-gradient-to-br from-orange-800 to-amber-800 rounded-2xl p-8 h-full relative overflow-hidden">
                  {/* Decorative mystical symbols */}
                  <div className="absolute top-4 right-4 text-6xl text-gold/20">☽</div>
                  <div className="absolute bottom-4 left-4 text-4xl text-copper/20">✦</div>
                  
                  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden coach-image">
                    <img 
                      src="/src/assets/shweeta-creator.png" 
                      alt="Astro Shweeta Oberoi" 
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                    <div className="absolute inset-0 bg-gold rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-4xl font-serif font-bold mb-3 text-gold">Astro Shweeta Oberoi</h3>
                    <p className="text-copper text-xl mb-6 font-medium">An award-winning expert in astrology, numerology, vastu shastra & palmistry</p>
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
                <h3 className="text-3xl font-serif font-bold mb-6 text-gold">About the Expert</h3>
                <p className="text-lg text-cream/90 mb-6 leading-relaxed">
                  Shweeta Oberoi is a renowned Astrology Instructor in India and has experience of 20+ years in astrology. 
                  From a very early age, she began to understand and study how different elements in our surroundings can 
                  affect human life and nature.
                </p>
                <p className="text-lg text-cream/90 mb-6 leading-relaxed">
                  Till now, she has taught 5000+ people astrology. Over the years, she has continually studied and improved 
                  her knowledge of astrology. She has taken university courses in Astrology, Alankar Shastra, and attained 
                  Acharya Degree. She also has vast knowledge of Vastu Shastra.
                </p>
                <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                  She is a certified Shree Vidhya Sadhak and has done much Sadhna of Maa Lalitamba. She believes people can 
                  make a career out of astrology to grow themselves and others around them.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-serif font-bold mb-8 text-gold">Sacred Achievements & Credentials</h3>
                <div className="grid sm:grid-cols-2 gap-4 achievements-grid">
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
            <a 
              href="https://ayushmaanoccult.exlyapp.com/checkout/03a9e492-280c-498d-97eb-9cde79d5a1f2?init_booking=True"
              className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;