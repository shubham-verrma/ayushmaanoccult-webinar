import React from 'react';

const TestimonialsVideo = () => {
  return (
    <section id="testimonials-video" className="py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 text-cream relative overflow-hidden">
      <div className="container mx-auto px-4 relative text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
          Watch Our Testimonials
        </h2>
        <p className="text-xl text-copper max-w-4xl mx-auto leading-relaxed mb-12">
          Hear directly from our enlightened students about their transformative experiences.
        </p>
        {/* Placeholder for an embedded video */}
        <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-xl shadow-2xl flex items-center justify-center">
          <p className="text-cream text-2xl">Video Placeholder</p>
          {/* You would typically embed a YouTube or Vimeo video here */}
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideo;