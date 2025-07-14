import React from 'react';
import { Users, Heart, Clock, Lightbulb, MessageCircle, BookOpen } from 'lucide-react';

const WhoShouldJoin = () => {
  const targetAudience = [
    {
      icon: BookOpen,
      title: "Beginners in Astrology",
      description: "Jo Vedic Astrology ke basics seekhna chahte hain zero se, without any prior knowledge. Hum simple language mein explain karenge."
    },
    {
      icon: Heart,
      title: "Spiritual Seekers",
      description: "Jo apni aatma ke purpose, past karmas, aur future predictions mein interested hain. Gandmool aur panchang jaise topics aapko deeper insights denge."
    },
    {
      icon: Clock,
      title: "Busy Professionals",
      description: "Jo flexible learning chahte hain – lifetime recordings aur WhatsApp community se kabhi bhi access karo, apne time pe."
    },
    {
      icon: Lightbulb,
      title: "Remedies aur Guidance Chahne Wale",
      description: "Jo practical remedies seekhna chahte hain graho ke dosh ke liye, aur lifelong mujhse (Shweeta Oberoi) connect rehna chahte hain."
    },
    {
      icon: MessageCircle,
      title: "Interactive Learners",
      description: "Jo live classes mein questions pooch kar seekhna pasand karte hain, unmute option ke saath – boring lectures nahi!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="who-should-join" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M70,100 Q100,70 130,100 Q100,130 70,100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#who-should-join)" className="text-copper"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-orange-900" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-orange-900 mb-8">
            Who Should Join This Workshop
          </h2>
          <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
            Yeh workshop perfect hai har us vyakti ke liye jo astrology seekhna chahta hai aur apni life mein positive changes laana chahta hai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targetAudience.map((audience, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-cream to-orange-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gold/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-copper/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-gold to-copper p-4 rounded-full mr-4 group-hover:scale-110 transition-transform shadow-lg">
                  <audience.icon className="w-7 h-7 text-orange-900" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-orange-900">{audience.title}</h3>
              </div>
              <p className="text-copper leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>

        {/* CTA for Mobile Optimization */}
        <div className="text-center">
          <a 
            href="https://ayushmaanoccult.exlyapp.com/checkout/e0947fd7-6c01-447c-9fb1-4b6abcbff549"
            className="bg-gradient-to-r from-gold to-copper text-orange-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 inline-block"
          >
            Register Now - Perfect for You!
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;