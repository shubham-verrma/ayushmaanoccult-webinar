import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Shweeta's mystical workshop completely transformed my understanding of cosmic energies. Her sacred teaching style is so clear and spiritually enlightening. I can now read my own chart with divine confidence!"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "After years of seeking spiritual clarity, this sacred workshop gave me the cosmic understanding I needed. The 3-day mystical format was perfect, and the ancient knowledge is truly life-transforming."
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      text: "I've explored many spiritual paths, but none compare to Shweeta's mystical expertise. She makes complex cosmic concepts so beautifully accessible. Divinely recommended!"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      text: "The sacred workshop exceeded my spiritual expectations. Not only did I learn chart reading, but I also gained profound insights into my soul's purpose. Blessed gratitude, Shweeta!"
    },
    {
      name: "Meera Joshi",
      location: "Hyderabad",
      rating: 5,
      text: "Shweeta's mystical teaching approach is phenomenal. She combines ancient wisdom with modern spiritual understanding. This workshop is essential for anyone serious about cosmic knowledge."
    },
    {
      name: "Arjun Mehta",
      location: "Chennai",
      rating: 5,
      text: "I was spiritually seeking, but Shweeta's sacred approach to astrology enlightened my soul. The practical mystical exercises were invaluable. Worth every sacred moment!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="testimonial-stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-stars)" className="text-gold"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl">
              <Quote className="w-10 h-10 text-orange-900" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            Sacred Testimonials
          </h2>
          <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
            Join thousands of enlightened souls who have transformed their lives through ancient Vedic wisdom and mystical understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-cream/10 to-gold/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-cream/20 transition-all duration-500 hover:scale-105 border border-gold/20 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 text-6xl text-copper/10 font-serif">"</div>
              
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-gold mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-cream/90 mb-8 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gold/30 pt-6">
                <h4 className="font-serif font-semibold text-gold text-lg">{testimonial.name}</h4>
                <p className="text-copper text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold to-copper text-orange-900 px-10 py-5 rounded-full text-xl font-bold shadow-2xl">
            <Star className="w-7 h-7 mr-3 fill-current" />
            <span>4.9/5 Sacred Rating from 5000+ Enlightened Souls</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;