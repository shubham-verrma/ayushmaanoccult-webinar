import React from 'react';
import { BookOpen, Star, Zap, Award } from 'lucide-react';

const AdvanceCourseEnquiry = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="advance-pattern" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              <circle cx="125" cy="125" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M125,45 L205,125 L125,205 L45,125 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="125" cy="125" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#advance-pattern)" className="text-copper"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-900 to-amber-900 rounded-3xl shadow-2xl p-8 md:p-16 text-cream relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-copper/10 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="text-center relative">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-2xl">
                  <BookOpen className="w-10 h-10 text-orange-900" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Enquire About Advanced Course
              </h2>
              
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">
                Ready to take your astrology knowledge to the next level? Our comprehensive 3-month Advanced Vedic Astrology course 
                will transform you into a professional astrologer with deep expertise and practical skills.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-cream/10 to-gold/10 rounded-2xl p-6 backdrop-blur-sm border border-gold/20">
                  <Zap className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">Advanced Techniques</h3>
                  <p className="text-cream/90">Master complex chart analysis, divisional charts, and advanced prediction methods</p>
                </div>
                
                <div className="bg-gradient-to-br from-cream/10 to-gold/10 rounded-2xl p-6 backdrop-blur-sm border border-gold/20">
                  <Star className="w-12 h-12 text-gold mx-auto mb-4" />
                  <p className="text-cream/90">Learn professional consultation skills and remedial measures for complex cases</p>
                </div>
                
                <div className="bg-gradient-to-br from-cream/10 to-gold/10 rounded-2xl p-6 backdrop-blur-sm border border-gold/20">
                  <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">Professional Certification</h3>
                  <p className="text-cream/90">Get certified as a professional Vedic astrologer and start your practice</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gold/20 to-copper/20 rounded-2xl p-8 mb-8 border border-gold/30">
                <h3 className="text-2xl font-serif font-bold text-gold mb-4">Special Benefits for Workshop Participants</h3>
                <ul className="text-left space-y-3 text-cream/90">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>Priority enrollment with exclusive early bird pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>Direct mentorship from Shweeta Oberoi throughout the course</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>Lifetime support and advanced community access</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://ayushmaanoccult.exlyapp.com/new-offer/11269e81-948f-4ec3-ae72-ae023d9c4451"
                className="bg-gradient-to-r from-gold to-copper text-orange-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50 inline-block"
              >
                Learn More About Advanced Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceCourseEnquiry;