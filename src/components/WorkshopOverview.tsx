import React from 'react';
import { BookOpen, Eye, Star, Target, Award, Brain, Gift, Video, Users, MessageCircle, Phone, Zap } from 'lucide-react';

const WorkshopOverview = () => {
  const features = [
    {
      icon: Gift,
      title: "Free Resources Provided",
      description: "Aapko milenge high-quality free study materials jaise e-books aur charts, jo aapki astrology journey ko easy banayenge."
    },
    {
      icon: Video,
      title: "Recordings with Lifetime Access",
      description: "Har session ki recordings available hongi lifetime ke liye, taaki aap kabhi bhi review kar sako without missing anything."
    },
    {
      icon: Target,
      title: "Priority Access to Enroll for Advanced Course",
      description: "Workshop complete karne par, aapko priority milegi advanced Vedic Astrology course mein enroll hone ke liye, before others."
    },
    {
      icon: MessageCircle,
      title: "Complementary Access to WhatsApp Community",
      description: "Join our exclusive WhatsApp group free, jahaan remedies, tips aur discussions regularly share kiye jaate hain by experts."
    },
    {
      icon: Phone,
      title: "Lifelong Access to Astrologer Shweeta Oberoi",
      description: "Mujhse direct connect raho lifelong, for personal guidance, queries aur astrology consultations anytime."
    },
    {
      icon: Zap,
      title: "3 Days Interactive Vedic Astrology Classes",
      description: "Teen dinon mein seekho Vedic Astrology ke fundamentals live interactive classes mein, jahaan aap unmute kar ke questions pooch sakte ho, unlike other coaches."
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
            Unlock the Mysteries of the Stars with Shweeta Oberoi
          </h2>
          <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
            Namaste! Join my interactive 3-day workshop on Vedic Astrology basics, jahaan aap stars ki power ko samajh kar apni life improve kar sakte ho. Yeh workshop specially designed hai beginners ke liye, with real-time interaction.
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

        <div className="text-center mt-16">
          <a 
            href="https://ayushmaanoccult.exlyapp.com/checkout/03a9e492-280c-498d-97eb-9cde79d5a1f2?init_booking=True"
            className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview;