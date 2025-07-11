import React from 'react';
import { BookOpen, Star, Sun, Moon, Sparkles } from 'lucide-react';

const CurriculumSection = () => {
  const curriculum = [
    {
      day: "Day 1",
      title: "Vedic Astrology ke Fundamentals - Graho aur Rashiyo ki Pehchaan",
      icon: Moon,
      description: "Iss din hum Vedic Astrology ke basic building blocks cover karenge, jaise graho ki nature, rashiyo ka role, aur unke mutual interactions. Yeh session interactive hogi, aap questions pooch sakte ho live!",
      topics: [
        "Planet Shubh (Shubh aur Ashubh Graha): Hum discuss karenge ki kaunse graha shubh (benefic) hote hain jaise Guru aur Shukra, aur ashubh (malefic) jaise Shani aur Rahu. Yeh jaanne se aap kundli mein positive-negative energies ko identify kar sakte ho.",
        "Lagnas (Ascendants): Lagna kya hota hai, kaise calculate karte hain birth time se, aur har lagna ka personality traits pe asar. Example se samjhayenge ki Aries lagna wale aggressive kyun hote hain.",
        "Rashi (Zodiac Signs): 12 rashiyo ki detailed intro, unke elements (fire, earth, air, water), aur kaise yeh life ke different areas ko control karti hain. Mesh se Meen tak sab cover karenge.",
        "House Identification (Bhavas ki Pehchaan): Kundli ke 12 houses (bhavas) kya represent karte hain, jaise 1st house self, 2nd wealth, etc. Hum sikhayenge kaise houses ko read karte hain for predictions.",
        "Oonch and Neech Rashi (Uchcha aur Neecha Rashiyan): Har graha ki exalted (uchcha) rashi jahaan woh strong hota hai, aur debilitated (neecha) jahaan weak. Jaise Surya Leo mein uchcha, Libra mein neecha – isse remedies suggest karne mein help milegi.",
        "Drishti of Each (Har Graha ki Drishti): Graho ki aspects ka rule, jaise Jupiter ki 5th, 7th, 9th drishti. Hum explain karenge ki yeh drishti kaise houses ko influence karti hain, with examples.",
        "Surya Sankranti (Sun's Transit): Surya ki sankranti kya hai, kaise yeh months ko define karti hai, aur auspicious timings ke liye important. Discuss karenge Uttarayana aur Dakshinayana ka significance."
      ]
    },
    {
      day: "Day 2",
      title: "Aatma aur Karmic Influences - Janam ke Raaz",
      icon: Sun,
      description: "Doosre din hum deeper jaayenge soul ki journey mein, birth purpose aur kuch special nakshatras pe. Yeh spiritual side ko touch karega, taaki aap apni life ka meaning samajh sako.",
      topics: [
        "Purpose of Birth of Aatma (Aatma ke Janam ka Uddeshya): Vedic view mein aatma kyun janam leti hai, past karmas ka role, aur kundli se kaise decode karte hain life purpose. Hum Atmakaraka graha aur D-9 chart touch karenge basics mein.",
        "Gandmool (Gandmool Nakshatras): Gandmool kya hote hain (jaise Ashwini, Magha, etc.), unke dosh aur effects on life. Remedies jaise pooja aur mantras discuss karenge taaki inko mitigate kar sako."
      ]
    },
    {
      day: "Day 3",
      title: "Panchang aur Auspicious Timings - Practical Tools",
      icon: Sparkles,
      description: "Teesre aur last din hum practical astrology tools pe focus karenge, jaise daily panchang reading aur Moon ki positions. Yeh aapko muhurat choose karne mein expert banayega.",
      topics: [
        "Panchang (Vedic Almanac): Panchang kya hai, uske 5 parts (Tithi, Vara, Nakshatra, Yoga, Karana) ki full explanation. Hum sikhayenge kaise panchang se shubh muhurat nikaalte hain for events like marriage.",
        "Shubh Chandrama (Auspicious Moon Positions): Chandrama ki shubh positions, jaise strong nakshatras mein, aur weak times jaise Amavasya. Discuss karenge kaise Moon emotions aur decisions ko affect karta hai, with remedies for weak Moon."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="curriculum-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M150,50 L150,250 M50,150 L250,150" stroke="currentColor" strokeWidth="1"/>
              <circle cx="150" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#curriculum-pattern)" className="text-gold"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl">
              <BookOpen className="w-10 h-10 text-orange-900" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            3 Day Curriculum
          </h2>
          <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
            Detailed day-wise breakdown of what you'll learn in our comprehensive Vedic Astrology workshop
          </p>
        </div>

        <div className="space-y-16">
          {curriculum.map((day, index) => (
            <div key={index} className="bg-gradient-to-br from-cream/10 to-gold/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gold/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex flex-col lg:flex-row gap-8 items-start curriculum-item">
                <div className="lg:w-1/3 curriculum-day">
                  <div className="bg-gradient-to-br from-gold to-copper text-orange-900 p-8 rounded-2xl text-center shadow-xl relative">
                    <day.icon className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-serif font-bold mb-3">{day.day}</h3>
                    <h4 className="text-xl font-medium mb-4">{day.title}</h4>
                  </div>
                </div>
                
                <div className="lg:w-2/3 curriculum-content">
                  <p className="text-cream/90 text-lg leading-relaxed mb-8 font-medium">
                    {day.description}
                  </p>
                  
                  <div className="space-y-6">
                    {day.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start">
                        <Star className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                        <p className="text-cream/90 leading-relaxed">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Mobile Optimization */}
        <div className="text-center mt-16">
          <a 
            href="https://ayushmaanoccult.exlyapp.com/checkout/03a9e492-280c-498d-97eb-9cde79d5a1f2?init_booking=True"
            className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 inline-block"
          >
            Register Now - Start Learning!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;