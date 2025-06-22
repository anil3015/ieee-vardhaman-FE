import React, { useState, useEffect } from 'react';
import CardSwap, { Card } from './reactcom/CardSwap';

export const AchievementsSection = ({ achievements }) => {
  const [currentFrontIndex, setCurrentFrontIndex] = useState(0);

  useEffect(() => {
    if (achievements.length > 0) {
      setCurrentFrontIndex(0);
    }
  }, [achievements]);

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600">
            Recognition and awards that reflect our commitment to excellence
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
          {/* Left section for the achievement image */}
          <div className="lg:w-1/2 flex items-center justify-center p-8">
            <img
              src={achievements[currentFrontIndex]?.image || ""}
              alt="Current Achievement Icon"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Right section for CardSwap */}
          <div style={{ height: '450px', position: 'relative' }} className="lg:w-1/2 flex justify-center">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
              onFrontCardChange={setCurrentFrontIndex}
            >
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <div className="relative flex flex-col items-center justify-center h-full w-full text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6">
                    {/* Envelope flap lines */}
                    <div className="absolute left-0 top-0 w-full h-24 pointer-events-none">
                      <svg
                        className="absolute inset-0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="0" y1="0" x2="50" y2="100" stroke="#d1d5db" strokeWidth="1.5" />
                        <line x1="100" y1="0" x2="50" y2="100" stroke="#d1d5db" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3 mt-4">{achievement.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-base font-semibold mb-3 inline-block">{achievement.year}</span>
                    <p className="text-gray-700 text-lg">{achievement.description}</p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};
