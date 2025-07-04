import React from 'react';
import { BookOpen, Eye, Star, Target, Award, Brain } from 'lucide-react';

const WorkshopOverview = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Sacred Foundations",
      description: "Learn the fundamental principles of Vedic astrology and ancient chart interpretation wisdom"
    },
    {
      icon: Eye,
      title: "Mystical Chart Reading",
      description: "Master the sacred art of reading birth charts and understanding celestial planetary positions"
    },
    {
      icon: Star,
      title: "Planetary Influences",
      description: "Discover how cosmic forces and planetary energies affect personality traits and life events"
    },
    {
      icon: Target,
      title: "Practical Divination",
      description: "Apply your mystical knowledge to real-life situations and spiritual personal development"
    },
    {
      icon: Award,
      title: "Sacred Certification",
      description: "Receive a blessed completion certificate from Ayushmaan Occult Sciences"
    },
    {
      icon: Brain,
      title: "Ancient Wisdom",
      description: "Connect with thousands of years of sacred Vedic astronomical and mystical knowledge"
    }
  ];

  const curriculum = [
    {
      day: "Day 1",
      title: "Sacred Foundation & Cosmic Basics",
      symbol: "☽",
      topics: [
        "Ancient history and mystical philosophy of Vedic astrology",
        "Understanding the sacred zodiac signs and their divine characteristics",
        "Introduction to celestial houses and their spiritual significance",
        "Basic chart structure and cosmic components"
      ]
    },
    {
      day: "Day 2",
      title: "Planetary Forces & Cosmic Positions",
      symbol: "☉",
      topics: [
        "Nine sacred planets (Navagraha) and their mystical influences",
        "Planetary strengths, weaknesses, and cosmic energies",
        "Divine conjunctions, aspects, and sacred yogas",
        "Ancient Dasha system and timing introduction"
      ]
    },
    {
      day: "Day 3",
      title: "Mystical Application & Divination",
      symbol: "✦",
      topics: [
        "Reading and interpreting sacred birth charts",
        "Identifying key life patterns and cosmic destiny",
        "Divine timing of events and mystical predictions",
        "Personal consultation and spiritual guidance techniques"
      ]
    }
  ];

  return (
    <section id="workshop" className="py-20 bg-gradient-to-br from-cream via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="alchemical-symbols" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M45,75 L105,75 M75,45 L75,105" stroke="currentColor" strokeWidth="2"/>
              <circle cx="75" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#alchemical-symbols)" className="text-copper"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-orange-900" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-orange-900 mb-8">
            Transform Your Cosmic Understanding
          </h2>
          <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
            This comprehensive mystical workshop will guide you from novice to confident chart reader, 
            equipped with ancient wisdom to understand life's sacred cosmic patterns and divine purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-cream to-orange-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gold/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-copper/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-gold to-copper p-4 rounded-full mr-4 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-7 h-7 text-orange-900" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-orange-900">{feature.title}</h3>
              </div>
              <p className="text-copper leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-amber-900 rounded-3xl shadow-2xl p-8 md:p-16 text-cream relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-copper/10 rounded-full translate-x-20 translate-y-20"></div>
          
          <div className="text-center mb-16 relative">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              3-Day Sacred Curriculum Journey
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-copper mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {curriculum.map((day, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-gold to-copper text-orange-900 p-8 rounded-2xl text-center shadow-xl relative">
                    <div className="text-6xl mb-4 opacity-20 absolute top-2 right-4">{day.symbol}</div>
                    <h4 className="text-3xl font-serif font-bold mb-3">{day.day}</h4>
                    <p className="text-lg font-medium">{day.title}</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-gradient-to-br from-cream/10 to-gold/10 rounded-2xl p-8 backdrop-blur-sm border border-gold/20">
                    <ul className="space-y-4">
                      {day.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <Star className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                          <span className="text-cream/90 leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50">
            Begin Your Mystical Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview;