import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Components/Header';
import { HeroSection } from './Components/HeroSection';
import { VisionMission } from './Components/VisionMission';
import { Stats } from './Components/Stats';
import { SocietiesSection } from './Components/SocietiesSection';
import { CouncilsSection } from './Components/CouncilsSection';
import { EventsSection } from './Components/EventsSection';
import { AchievementsSection } from './Components/AchievementsSection';
import { PartnersSection } from './Components/PartnersSection';
import { GallerySection } from './Components/GallerySection';
import { FAQsSection } from './Components/FAQsSection';
import { ContactUs } from '../../components/Essentials/ContactUs';
import { Footer } from '../../components/Essentials/Footer';
import { heroImages, societies, councils, pastEvents, upcomingEvents, achievements } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const sectionIds = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Societies', id: 'societies' },
    { name: 'Councils', id: 'councils' },
    { name: 'Events', id: 'events' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) { // header height
            setActiveSection(sectionIds[i].name);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('Home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      dropdown: [
        { name: 'All Societies', action: () => window.location.href = '/societies' },
        ...societies.map(s => ({ name: s.name, action: () => scrollToSection('societies') }))
      ]
    },
    { 
      name: 'Councils', 
      action: () => scrollToSection('councils'),
      dropdown: [
        { name: 'All Councils', action: () => window.location.href = '/councils' },
        ...councils.map(c => ({ name: c.name, action: () => scrollToSection('councils') }))
      ]
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
      dropdown: [
        { name: 'All Achievements', action: () => window.location.href = '/achievements' }
      ]
    },
    { 
      name: 'Gallery',
      action: () => scrollToSection('gallery'),
      dropdown: [
        { name: 'View Full Gallery', action: () => window.location.href = '/gallery' }
      ]
    },
    { name: 'FAQs', action: () => scrollToSection('faqs') },
    { name: 'Contact', action: () => scrollToSection('contact') },
    { name: 'Journey', action: () => window.location.href = '/journey' },
    { name: 'Newsletters', action: () => window.location.href = '/newsletters' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header navigationItems={navigationItems} activeSection={activeSection} />
      <HeroSection heroImages={heroImages} onScrollToSection={scrollToSection} />
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