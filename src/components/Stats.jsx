import React from 'react';
import CountUp from './reactcom/CountUp';

export function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <CountUp
              from={0}
              to={500}
              separator="+"
              direction="up"
              duration={2}
              className="text-7xl font-bold text-blue-700"
            />
            <div className="mt-2 text-gray-600">Members</div>
          </div>
          <div>
            <CountUp
              from={0}
              to={30}
              separator="+"
              direction="up"
              duration={2}
              className="text-7xl font-bold text-blue-700"
            />
            <div className="mt-2 text-gray-600">Events Conducted</div>
          </div>
          <div>
            <CountUp
              from={0}
              to={10}
              separator="+"
              direction="up"
              duration={2}
              className="text-7xl font-bold text-blue-700"
            />
            <div className="mt-2 text-gray-600">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
} 