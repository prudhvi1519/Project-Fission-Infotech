import React, { useState, useEffect, useRef } from 'react';

export default function ServicesSection({
  sectionLabel,
  sectionTitle,
  sectionDescription,
  boxes = [],
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '-50px 0px -50px 0px' // Only trigger when element is 50px inside viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="w-full bg-global-10 overflow-hidden" ref={sectionRef}>
      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[56px] md:py-[112px]">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[20px] sm:gap-[30px] lg:gap-[60px] mb-[40px] sm:mb-[74px] md:mb-[148px]">
            {/* Left Content */}
            <div className="flex flex-col items-start w-full lg:w-auto">
              {sectionLabel && (
                <div 
                  className={`bg-global-4 rounded-[16px] px-[20px] py-[2px] mb-[8px] transform transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-16 opacity-0'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold uppercase text-global-2">
                    {sectionLabel}
                  </span>
                </div>
              )}
              {sectionTitle && (
                <h2 
                  className={`text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-anton font-normal leading-tight uppercase text-global-1 transform transition-all duration-1200 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: '0.4s' }}
                >
                  {sectionTitle}
                </h2>
              )}
            </div>
            
            {/* Right Content */}
            {sectionDescription && (
              <div 
                className={`w-full lg:w-[48%] transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-relaxed text-global-4 mt-[10px] lg:mt-[24px]">
                  {sectionDescription}
                </p>
              </div>
            )}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px] md:gap-[40px]">
            {boxes.map((box, index) => (
              <div 
                key={index} 
                className={`flex flex-col w-full h-full transform transition-all duration-800 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-16 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${0.8 + (index * 0.15)}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`${box.bgColor} ${box.height || ''} relative rounded-[20px] sm:rounded-[24px] md:rounded-[30px] p-[14px] sm:p-[20px] md:p-[28px] flex flex-col cursor-pointer overflow-hidden group transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/20`}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Icon + Title */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-start gap-[6px] sm:gap-[10px] md:gap-[16px] relative z-10">
                    {box.icon && (
                      <img
                        src={box.icon}
                        alt={box.title}
                        className={`w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[50px] md:h-[50px] transform transition-all duration-500 ease-out ${
                          hoveredIndex === index 
                            ? 'scale-110 rotate-6' 
                            : 'scale-100 rotate-0'
                        }`}
                      />
                    )}
                    <h3
                      className={`text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-anton font-normal leading-tight uppercase ${box.textColor} transform transition-all duration-500 ease-out ${
                        hoveredIndex === index 
                          ? 'translate-x-1' 
                          : 'translate-x-0'
                      }`}
                    >
                      {box.title}
                    </h3>
                  </div>
                  
                  {/* Optional Description */}
                  {box.description && (
                    <p 
                      className={`mt-2 text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans text-global-4 leading-relaxed relative z-10 transform transition-all duration-500 ease-out ${
                        hoveredIndex === index 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-1 opacity-90'
                      }`}
                    >
                      {box.description}
                    </p>
                  )}
                  
                  {/* Arrow with enhanced animation */}
                  <div 
                    className={`flex absolute bottom-2 md:bottom-[20px] right-[20px] w-[44px] h-[44px] bg-global-10 rounded-[20px] items-center justify-center transform transition-all duration-500 ease-out ${
                      hoveredIndex === index 
                        ? 'scale-110 rotate-12 bg-white shadow-lg' 
                        : 'scale-100 rotate-0'
                    }`}
                  >
                    <img
                      src="/images/img_arrow_small_left.svg"
                      alt="Arrow"
                      className={`w-[26px] h-[22px] md:h-[26px] transform transition-all duration-300 ease-out ${
                        hoveredIndex === index ? 'translate-x-0.5 translate-y-[-1px]' : 'translate-x-0'
                      }`}
                    />
                  </div>
                  
                  {/* Pulsing border effect on hover */}
                  <div 
                    className={`absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[30px] transition-all duration-700 ease-out ${
                      hoveredIndex === index 
                        ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                        : 'ring-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}