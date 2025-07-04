import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkshopOverview from './components/WorkshopOverview';
import CoachSection from './components/CoachSection';
import ScheduleSection from './components/ScheduleSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkshopOverview />
      <CoachSection />
      <ScheduleSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;