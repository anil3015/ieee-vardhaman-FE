import React, { useState, useEffect } from 'react';
import { Calendar, Users, ChevronLeft, ChevronRight, Award, Camera } from 'lucide-react';

// Clean EmblaCarousel
function EmblaCarousel({ items, renderItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, items.length));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % Math.max(1, items.length));
  };

  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
}

function EventCard({ event, isUpcoming = false }) {
  return (
    <div className="bg-white rounded-lg border p-4 max-w-xs w-full text-center">
      <div className="mb-4">
        <img
          src={event.image || 'https://via.placeholder.com/400x240?text=Event+Image'}
          alt={event.title}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
      {isUpcoming && event.description && (
        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
      )}
      <div className="flex justify-center space-x-4 text-sm text-gray-700">
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>
            {isUpcoming
              ? `${event.registrations || 0} Reg.`
              : event.participants || 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DetailLayout({ data = {} }) {
  // Mock data for demonstration
  const mockData = {
    name: "Environmental Club",
    description: "Dedicated to promoting environmental awareness and sustainable practices in our community.",
    vision: "To create a sustainable future where environmental consciousness is at the forefront of every decision.",
    mission: "To educate, inspire, and empower individuals to take action for environmental protection through innovative programs and community engagement.",
    carouselImages: [
      'https://via.placeholder.com/1200x600/22c55e/ffffff?text=Environmental+Action',
      'https://via.placeholder.com/1200x600/16a34a/ffffff?text=Sustainability+Drive',
      'https://via.placeholder.com/1200x600/15803d/ffffff?text=Green+Future'
    ],
    slate: [
      { name: "Sarah Johnson", role: "President", photo: "https://via.placeholder.com/120x120/22c55e/ffffff?text=SJ" },
      { name: "Michael Chen", role: "Vice President", photo: "https://via.placeholder.com/120x120/16a34a/ffffff?text=MC" },
      { name: "Emily Davis", role: "Secretary", photo: "https://via.placeholder.com/120x120/15803d/ffffff?text=ED" },
      { name: "David Wilson", role: "Treasurer", photo: "https://via.placeholder.com/120x120/22c55e/ffffff?text=DW" }
    ],
    events: {
      past: [
        { title: "Earth Day Cleanup", date: "Apr 22, 2024", participants: "150 people", image: "https://via.placeholder.com/400x240/22c55e/ffffff?text=Earth+Day" },
        { title: "Sustainability Workshop", date: "Mar 15, 2024", participants: "80 people", image: "https://via.placeholder.com/400x240/16a34a/ffffff?text=Workshop" }
      ],
      upcoming: [
        { title: "Green Energy Summit", date: "Aug 10, 2025", registrations: 45, description: "Learn about renewable energy solutions", image: "https://via.placeholder.com/400x240/15803d/ffffff?text=Summit" },
        { title: "Tree Planting Drive", date: "Sep 5, 2025", registrations: 120, description: "Community tree planting initiative", image: "https://via.placeholder.com/400x240/22c55e/ffffff?text=Tree+Plant" }
      ]
    },
    achievements: [
      { title: "Best Environmental Club", year: "2024", description: "Awarded for outstanding environmental initiatives", image: "https://via.placeholder.com/200x120/22c55e/ffffff?text=Award" },
      { title: "Community Impact Award", year: "2023", description: "Recognized for significant community contributions", image: "https://via.placeholder.com/200x120/16a34a/ffffff?text=Impact" }
    ],
    gallery: [
      { img: "https://via.placeholder.com/300x200/22c55e/ffffff?text=Gallery+1", caption: "Beach cleanup event" },
      { img: "https://via.placeholder.com/300x200/16a34a/ffffff?text=Gallery+2", caption: "Recycling workshop" },
      { img: "https://via.placeholder.com/300x200/15803d/ffffff?text=Gallery+3", caption: "Solar panel installation" },
      { img: "https://via.placeholder.com/300x200/22c55e/ffffff?text=Gallery+4", caption: "Community garden" }
    ]
  };

  const combinedData = { ...mockData, ...data };
  const heroImages = combinedData.carouselImages || [];
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
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      {heroImages.length > 0 && (
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{combinedData.name}</h1>
              {combinedData.description && (
                <p className="text-lg md:text-xl max-w-xl mx-auto">{combinedData.description}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-gray-700">{combinedData.vision}</p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-gray-700">{combinedData.mission}</p>
          </div>
        </div>

        {/* Leadership Team */}
        {combinedData.slate && combinedData.slate.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {combinedData.slate.map((member, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border text-center max-w-xs w-full">
                  <img
                    src={member.photo || `https://via.placeholder.com/120?text=${member.name.charAt(0)}`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                  />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events */}
        {combinedData.events && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-center mb-6">Past Events</h2>
              <EmblaCarousel
                items={combinedData.events.past || []}
                renderItem={(event) => (
                  <div className="flex justify-center">
                    <EventCard event={event} />
                  </div>
                )}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
              <EmblaCarousel
                items={combinedData.events.upcoming || []}
                renderItem={(event) => (
                  <div className="flex justify-center">
                    <EventCard event={event} isUpcoming />
                  </div>
                )}
              />
            </div>
          </div>
        )}

         {/* Achievements */}
         {combinedData.achievements && combinedData.achievements.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center">
              <Award className="w-8 h-8 mr-3 text-green-600" />
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {combinedData.achievements.map((achievement, idx) => (
                <div key={idx} className="bg-white rounded-xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 overflow-hidden group hover:shadow-lg">
                  <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-green-800 mb-1">
                      {achievement.title}
                      <span className="text-sm font-normal text-green-600 ml-2">({achievement.year})</span>
                    </h3>
                    <p className="text-green-700 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

         {/* Gallery */}
         {combinedData.gallery && combinedData.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center">
              <Camera className="w-8 h-8 mr-3 text-green-600" />
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {combinedData.gallery.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300 overflow-hidden group hover:shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.caption }
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item.caption && (
                    <div className="p-3">
                      <p className="text-sm text-green-700 text-center font-medium">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}