import React from 'react';
import FlowingMenu from './reactcom/FlowingMenu';

export const PartnersSection = () => {
  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <section className=" ">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">
            Collaborating with industry leaders and academic institutions
          </p>
        </div>

        <div style={{ height: '180px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </section>
  );
};
