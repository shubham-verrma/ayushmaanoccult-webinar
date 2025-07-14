import React from 'react';
import { Play, Star, Users } from 'lucide-react';

const TestimonialsVideo = () => {
  const testimonialVideos = [
    "https://www.youtube.com/shorts/SFJST7Fjw18",
    "https://www.youtube.com/shorts/ZlO09Q1uo2s", 
    "https://www.youtube.com/shorts/BT9Suqao9Zg",
    "https://www.youtube.com/shorts/DknUl8DDeCE",
    "https://www.youtube.com/shorts/wjTGP_TUmQ8",
    "https://www.youtube.com/shorts/diQ14TxLkqI"
  ];

  // Convert YouTube shorts URLs to embeddable format
  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/shorts/')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="testimonials-video" className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="testimonial-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M100,20 L180,100 L100,180 L20,100 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" className="text-gold"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl">
              <Play className="w-10 h-10 text-orange-900" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">
            Testimonials from Our Vedic Astrology Workshop Participants
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-6">
              Suno Unki Kahaniyan Jo Stars Ke Raaz Seekh Kar Apni Zindagi Badal Chuke Hain
            </h3>
            
            <div className="text-lg md:text-xl text-cream/90 leading-relaxed space-y-4">
              <p>
                Yeh section dedicate hai un logo ke liye jo humare workshop mein join karke Vedic Astrology ke magic ko experience kar chuke hain. 
                Unki real stories aur feedback aapko inspire karengi ki kaise yeh knowledge ne unki life mein positive changes laaye.
              </p>
              <p className="text-copper font-semibold">
                Dekho kuch glimpses:
              </p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonialVideos.map((videoUrl, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-cream/10 to-gold/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-cream/20 transition-all duration-500 hover:scale-105 border border-gold/20 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-full -translate-y-8 translate-x-8"></div>
              
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title={`Testimonial ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-cream/90 text-sm font-medium">Workshop Participant</p>
              </div>
            </div>
          ))}
        </div>

        {/* "And Many More" Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gold/30">
            <Users className="w-8 h-8 text-gold mr-4" />
            <div>
              <p className="text-2xl font-serif font-bold text-gold mb-2">...and many more!</p>
              <p className="text-cream/90 text-lg">5000+ satisfied students have transformed their lives</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm rounded-2xl p-8 border border-gold/30 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-4">
              Ready to Write Your Own Success Story?
            </h3>
            <p className="text-cream/90 text-lg mb-6 leading-relaxed">
              Join thousands of students who have discovered their cosmic blueprint and transformed their lives through Vedic Astrology
            </p>
          </div>
          
          <a 
            href="https://ayushmaanoccult.exlyapp.com/checkout/e0947fd7-6c01-447c-9fb1-4b6abcbff549"
            className="bg-gradient-to-r from-gold to-copper text-orange-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 inline-block"
          >
            Register Now - Join the Success Stories!
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideo;