import React from 'react';
import { Play, Star, Quote } from 'lucide-react';

const TestimonialsVideo = () => {
  const testimonialVideos = [
    "https://www.youtube.com/shorts/SFJST7Fjw18",
    "https://www.youtube.com/shorts/ZlO09Q1uo2s",
    "https://www.youtube.com/shorts/BT9Suqao9Zg",
    "https://www.youtube.com/shorts/DknUl8DDeCE",
    "https://www.youtube.com/shorts/wjTGP_TUmQ8",
    "https://www.youtube.com/shorts/diQ14TxLkqI"
  ];

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream relative overflow-hidden">
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
            Testimonials from Our Vedic Astrology Workshop Participants
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold text-gold mb-6">
              Suno Unki Kahaniyan Jo Stars Ke Raaz Seekh Kar Apni Zindagi Badal Chuke Hain
            </h3>
            <p className="text-xl text-copper leading-relaxed">
              Yeh section dedicate hai un logo ke liye jo humare workshop mein join karke Vedic Astrology ke magic ko experience kar chuke hain. Unki real stories aur feedback aapko inspire karengi ki kaise yeh knowledge ne unki life mein positive changes laaye. Dekho kuch glimpses:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonialVideos.map((videoUrl, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-cream/10 to-gold/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-gold/20 shadow-xl"
            >
              <div className="aspect-video relative">
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title={`Testimonial ${index + 1}`}
                  className="w-full h-full rounded-t-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-cream/90 mt-3 font-medium">
                  Workshop Participant Experience
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-2xl font-serif font-semibold text-gold mb-4">
            ...and many more!
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-gold to-copper text-orange-900 px-10 py-5 rounded-full text-xl font-bold shadow-2xl">
            <Star className="w-7 h-7 mr-3 fill-current" />
            <span>4.9/5 Rating from 5000+ Happy Students</span>
          </div>
        </div>

        {/* CTA for Mobile Optimization */}
        <div className="text-center">
          <a 
            href="https://ayushmaanoccult.exlyapp.com/checkout/03a9e492-280c-498d-97eb-9cde79d5a1f2?init_booking=True"
            className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 inline-block"
          >
            Register Now - Join Success Stories!
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideo;