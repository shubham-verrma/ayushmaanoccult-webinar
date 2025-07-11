import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkshopOverview from './components/WorkshopOverview';
import WhoShouldJoin from './components/WhoShouldJoin';
import CoachSection from './components/CoachSection';
import CurriculumSection from './components/CurriculumSection';
import TestimonialsVideo from './components/TestimonialsVideo';
import AdvanceCourseEnquiry from './components/AdvanceCourseEnquiry';
import Footer from './components/Footer';
import StickyRegisterCTA from './components/StickyRegisterCTA';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkshopOverview />
      <WhoShouldJoin />
      <CoachSection />
      <CurriculumSection />
      <TestimonialsVideo />
      <AdvanceCourseEnquiry />
      <Footer />
      <StickyRegisterCTA />
    </div>
  );
}

export default App;