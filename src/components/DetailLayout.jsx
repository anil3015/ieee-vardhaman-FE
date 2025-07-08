import React, { useState, useEffect } from 'react';
import EmblaCarousel from '../pages/Landing/Components/EmblaCarousel';
import { Calendar, Users } from 'lucide-react';

function EventCard({ event, isUpcoming = false }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-300 transition-colors duration-300 group flex flex-col hover:bg-gray-50 mx-2 my-2 sm:my-0 w-full min-w-[260px] max-w-[350px]">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
        <div>
          <h3 className="truncate text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
            {event.title}
          </h3>
          {isUpcoming && (
            <p className="text-gray-600 mb-2 text-xs sm:text-sm md:text-base line-clamp-1">{event.description}</p>
          )}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mt-2 mb-3">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{event.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-gray-500" />
              <span>
                {isUpcoming
                  ? `${event.registrations || ''} Registrations`
                  : event.participants || ''}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailLayout({ data }) {
  // Hero-style carousel logic
  const heroImages = data.carouselImages || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroImages.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [heroImages.length]);

  return (
    <div className="w-screen min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Hero-style Carousel */}
      {heroImages.length > 0 && (
        <section className="relative h-screen min-h-[400px] max-h-[900px] overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </div>
          {/* Overlayed Title & Description */}
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{data.name}</h1>
            {data.description && <p className="text-lg md:text-xl mb-2 drop-shadow-lg">{data.description}</p>}
          </div>
          {/* Carousel Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-20"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-20"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </section>
      )}
      <section className="w-full bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{data.name}</h1>
          {data.description && <p className="mb-10 text-lg text-gray-700 text-center max-w-3xl mx-auto">{data.description}</p>}
          {/* Vision & Mission side by side */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-2 text-green-700">Vision</h2>
              <p className="text-gray-800 text-lg">{data.vision}</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
              <h2 className="text-2xl font-semibold mb-2 text-blue-700">Mission</h2>
              <p className="text-gray-800 text-lg">{data.mission}</p>
            </div>
          </div>
          {/* Slate */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Slate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {data.slate && data.slate.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white border rounded-xl p-4 shadow hover:shadow-lg transition">
                {member.photo && <img src={member.photo} alt={member.name} className="h-20 w-20 rounded-full object-cover mb-2" />}
                <div className="font-semibold text-lg text-gray-900">{member.name}</div>
                <div className="text-green-700 font-medium">{member.role}</div>
              </div>
            ))}
          </div>
          {/* Events - Landing page style */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Past Events</h2>
          <div className="mb-8">
            <EmblaCarousel
              items={data.events && data.events.past ? data.events.past : []}
              renderItem={(event) => <EventCard event={event} />}
            />
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Upcoming Events</h2>
          <div className="mb-12">
            <EmblaCarousel
              items={data.events && data.events.upcoming ? data.events.upcoming : []}
              renderItem={(event) => <EventCard event={event} isUpcoming />}
            />
          </div>
          {/* Achievements */}
          {data.achievements && data.achievements.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {data.achievements.map((ach, idx) => (
                  <div key={idx} className="bg-white border rounded-xl p-4 shadow flex flex-col">
                    {ach.image && <img src={ach.image} alt={ach.title} className="h-24 w-full object-cover rounded mb-2" />}
                    <div className="font-semibold text-gray-900">{ach.title} <span className="text-xs text-gray-500">({ach.year})</span></div>
                    <div className="text-gray-700 text-sm">{ach.description}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* Gallery */}
          {data.gallery && data.gallery.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
                {data.gallery.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-xl p-2 shadow">
                    <img src={item.img} alt={item.caption || `Gallery ${idx+1}`} className="h-32 w-full object-cover rounded mb-2" />
                    {item.caption && <div className="text-xs text-gray-600 text-center">{item.caption}</div>}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
} 