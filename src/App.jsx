import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VisionMission } from './components/VisionMission';
import { Stats } from './components/Stats';
import { SocietiesSection } from './components/SocietiesSection';
import { CouncilsSection } from './components/CouncilsSection';
import { EventsSection } from './components/EventsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { PartnersSection } from './components/PartnersSection';
import { GallerySection } from './components/GallerySection';
import { FAQsSection } from './components/FAQsSection';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { slides, societies, councils, pastEvents, upcomingEvents, achievements } from './data/content';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { name: 'Home', action: () => scrollToSection('hero') },
    { name: 'About', action: () => scrollToSection('about') },
    { 
      name: 'Societies', 
      action: () => scrollToSection('societies'),
      dropdown: societies.map(s => ({ name: s.name, action: () => scrollToSection('societies') }))
    },
    { 
      name: 'Councils', 
      action: () => scrollToSection('councils'),
      dropdown: councils.map(c => ({ name: c.name, action: () => scrollToSection('councils') }))
    },
    { 
      name: 'Events', 
      action: () => scrollToSection('events'),
      dropdown: [
        { name: 'Past Events', action: () => window.location.href = '/past-events' },
        { name: 'Upcoming Events', action: () => window.location.href = '/upcoming-events' }
      ]
    },
    { 
      name: 'Achievements', 
      action: () => scrollToSection('achievements'),
      dropdown: achievements.map(a => ({ name: a.title, action: () => scrollToSection('achievements') }))
    },
    { name: 'Gallery', action: () => scrollToSection('gallery') },
    { name: 'FAQs', action: () => scrollToSection('faqs') },
    { name: 'Contact', action: () => scrollToSection('contact') },
    { name: 'Journey', action: () => window.location.href = '/journey' },
    { name: 'Newsletters', action: () => window.location.href = '/newsletters' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header navigationItems={navigationItems} />
      <HeroSection slides={slides} onScrollToSection={scrollToSection} />
      <VisionMission />
      <Stats />
      <SocietiesSection societies={societies} />
      <CouncilsSection councils={councils} />
      <EventsSection pastEvents={pastEvents} upcomingEvents={upcomingEvents} />
      <AchievementsSection achievements={achievements} />
      <PartnersSection />
      <GallerySection />
      <FAQsSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;