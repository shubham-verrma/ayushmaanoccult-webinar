import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkshopOverview from './components/WorkshopOverview';
import WhoShouldJoin from './components/WhoShouldJoin';
import CoachSection from './components/CoachSection';
import CurriculumSection from './components/CurriculumSection';
import ScheduleSection from './components/ScheduleSection';
import TestimonialsVideo from './components/TestimonialsVideo';
import FAQ from './components/FAQ';
import AdvanceCourseEnquiry from './components/AdvanceCourseEnquiry';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkshopOverview />
      <WhoShouldJoin />
      <CoachSection />
      <CurriculumSection />
      <ScheduleSection />
      <TestimonialsVideo />
      <FAQ />
      <AdvanceCourseEnquiry />
      <Footer />
    </div>
  );
}

export default App;