import React from 'react';
import { Calendar, Users } from 'lucide-react';
import Carousel from './Carousel';

export const EventsSection = ({ pastEvents, upcomingEvents }) => {
  return (
    <section id="events">
      {/* Past Events */}
      <section id="past-events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">
              Celebrating our successful technical events and community gatherings
            </p>
          </div>

          <Carousel itemsPerPage={3} infiniteLoop={true} autoPlay={true}>
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-300 transition-colors duration-300 group hover:bg-gray-50 mx-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mt-2 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{event.participants}</span>
                    </span>
                  </div>
                  <div className="border-b border-gray-200 mb-4"></div>
                  <div className="flex items-center space-x-3 mt-4">
                    {event.hostingBranchLogo && (
                      <img src={event.hostingBranchLogo} alt={event.hostingBranchName + ' logo'} className="h-8 w-8 object-contain rounded-full" />
                    )}
                    {event.hostingBranchName && (
                      <p className="text-sm text-gray-700 font-medium">{event.hostingBranchName}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join us for these exciting technical events and networking opportunities
            </p>
          </div>

          <Carousel itemsPerPage={3} infiniteLoop={true} autoPlay={true}>
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-300 transition-colors duration-300 group flex flex-col hover:bg-gray-50 mx-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mt-2 mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{event.date}</span>
                      </span>
                      {event.registrations && (
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span>{event.registrations} Registrations</span>
                        </span>
                      )}
                    </div>
                    <div className="border-b border-gray-200 mb-4"></div>
                    <div className="flex items-center space-x-3 mt-4">
                      {event.hostingBranchLogo && (
                        <img src={event.hostingBranchLogo} alt={event.hostingBranchName + ' logo'} className="h-8 w-8 object-contain rounded-full" />
                      )}
                      {event.hostingBranchName && (
                        <p className="text-sm text-gray-700 font-medium">{event.hostingBranchName}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-auto pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                    Register Now
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </section>
  );
};
