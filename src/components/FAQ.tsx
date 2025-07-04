import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need any prior mystical knowledge of astrology to join this sacred journey?",
      answer: "No, this mystical workshop is designed for complete spiritual beginners. We start from the very sacred basics and build your cosmic knowledge systematically over the 3 transformative days."
    },
    {
      question: "What sacred gifts will I receive after completing the workshop?",
      answer: "You'll receive a comprehensive mystical workbook, your personal sacred birth chart analysis, a certificate of spiritual completion, and lifetime access to our exclusive cosmic community and ancient resources."
    },
    {
      question: "How is this mystical workshop conducted?",
      answer: "The sacred workshop is conducted online via Zoom, making it accessible from anywhere in the world. All sessions are interactive with divine Q&A opportunities and spiritual guidance."
    },
    {
      question: "Are the sacred sessions recorded for future reference?",
      answer: "Yes, all mystical sessions are recorded and you'll have lifetime access to the sacred recordings, so you can revisit the ancient wisdom anytime on your spiritual journey."
    },
    {
      question: "What if I can't attend a live sacred session?",
      answer: "While we encourage live attendance for the best mystical experience, you can catch up using the sacred recordings. We also provide additional spiritual support through our cosmic community."
    },
    {
      question: "Is there a sacred money-back guarantee?",
      answer: "Yes, we offer a 30-day divine money-back guarantee. If you're not satisfied with the mystical workshop content, you can request a full spiritual refund."
    },
    {
      question: "How is this different from other astrology courses?",
      answer: "Our sacred workshop focuses specifically on Vedic astrology with practical, hands-on mystical learning. Shweeta's unique teaching style combines ancient wisdom with modern spiritual understanding."
    },
    {
      question: "Will I be able to read cosmic charts after this mystical workshop?",
      answer: "Yes! By the end of the 3 sacred days, you'll have the fundamental mystical skills to read and interpret basic birth charts. We provide ongoing spiritual support for continued cosmic learning."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="faq-mystical" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="50" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M75,25 Q100,50 75,75 Q50,50 75,25" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M75,75 Q100,100 75,125 Q50,100 75,75" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-mystical)" className="text-copper"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-copper rounded-full flex items-center justify-center shadow-lg">
                <HelpCircle className="w-8 h-8 text-orange-900" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-orange-900 mb-8">
              Sacred Questions & Divine Answers
            </h2>
            <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about the mystical Kundali Wisdom workshop and your spiritual journey
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-cream to-orange-50 rounded-2xl shadow-xl overflow-hidden border border-gold/20 hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-gold/10 transition-colors group"
                >
                  <h3 className="text-lg font-serif font-semibold text-orange-900 pr-6 group-hover:text-copper transition-colors">
                    {faq.question}
                  </h3>
                  <div className="bg-gradient-to-r from-gold to-copper p-2 rounded-full shadow-md">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-orange-900" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-orange-900" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8">
                    <div className="bg-gradient-to-r from-gold/10 to-copper/10 rounded-xl p-6 border-l-4 border-gold">
                      <p className="text-copper leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-copper mb-8 font-medium">
              Still have mystical questions? Our spiritual guides are here to help!
            </p>
            <button className="bg-gradient-to-r from-gold to-copper text-orange-900 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border-2 border-gold/50">
              Connect with Our Sacred Guides
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;