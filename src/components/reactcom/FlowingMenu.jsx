import React from 'react';
import { gsap } from 'gsap';

function FlowingMenu({ items = [] }) {
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  // Repeat items for seamless marquee
  const marqueeContent = [...items, ...items].map((item, idx) => (
    <React.Fragment key={idx}>
      <span className="text-gray-900 uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">
        {item.text}
      </span>
      <div
        className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <div className="h-full w-[200%] flex flex-row" ref={marqueeRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee" ref={marqueeInnerRef}>
            {marqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;