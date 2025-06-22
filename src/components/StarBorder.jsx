import React, { useRef, useEffect, useState } from 'react';

const StarBorder = ({
  as: Component = 'div',
  children,
  className = '',
  color = 'cyan',
  speed = '5s',
  ...props
}) => {
  const borderRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (borderRef.current) {
        setSize({ width: borderRef.current.offsetWidth, height: borderRef.current.offsetHeight });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Component
      ref={borderRef}
      className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-md group ${className}`}
      {...props}
    >
      <span
        className="absolute inset-0 rounded-md"
        style={{
          background: `linear-gradient(to right, ${color} 0%, transparent 50%, ${color} 100%)`,
          filter: 'blur(2px)',
          animation: `spin ${speed} linear infinite`,
        }}
      />
      <span
        className="relative bg-white text-gray-900 rounded-md px-6 py-2 transition-all ease-in duration-75 group-hover:bg-gray-100 group-active:bg-gray-200"
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Component>
  );
};

export default StarBorder; 