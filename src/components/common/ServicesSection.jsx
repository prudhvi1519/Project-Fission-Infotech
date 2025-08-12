import React from 'react';

export default function ServicesSection({
  sectionLabel,
  sectionTitle,
  sectionDescription,
  boxes = [],
}) {
  return (
    <section className="w-full bg-global-10">
      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[56px] md:py-[112px]">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[20px] sm:gap-[30px] lg:gap-[60px] mb-[40px] sm:mb-[74px] md:mb-[148px]">
            {/* Left Content */}
            <div className="flex flex-col items-start w-full lg:w-auto">
              {sectionLabel && (
                <div className="bg-global-4 rounded-[16px] px-[20px] py-[2px] mb-[8px]">
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold uppercase text-global-2">
                    {sectionLabel}
                  </span>
                </div>
              )}

              {sectionTitle && (
                <h2 className="text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-anton font-normal leading-tight uppercase text-global-1">
                  {sectionTitle}
                </h2>
              )}
            </div>

            {/* Right Content */}
            {sectionDescription && (
              <div className="w-full lg:w-[48%]">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-relaxed text-global-4 mt-[10px] lg:mt-[24px]">
                  {sectionDescription}
                </p>
              </div>
            )}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px] md:gap-[40px]">
            {boxes.map((box, index) => (
              <div key={index} className="flex flex-col w-full h-full">
                <div
                  className={`${box.bgColor} relative rounded-[20px] sm:rounded-[24px] md:rounded-[30px] p-[14px] sm:p-[20px] md:p-[28px] flex flex-col h-full`}
                >
                  {/* Icon + Title */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-start gap-[6px] sm:gap-[10px] md:gap-[16px]">
                    {box.icon && (
                      <img
                        src={box.icon}
                        alt={box.title}
                        className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[50px] md:h-[50px]"
                      />
                    )}
                    <h3
                      className={`text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-anton font-normal leading-tight uppercase ${box.textColor}`}
                    >
                      {box.title}
                    </h3>
                  </div>

                  {/* Arrow for laptop/desktop (bottom right) */}
                  <div className="flex absolute bottom-2 md:bottom-[20px] right-[20px] w-[44px] h-[44px] bg-global-10 rounded-[20px] items-center justify-center">
                    <img
                      src="/images/img_arrow_small_left.svg"
                      alt="Arrow"
                      className="w-[26px] h-[22px] md:h-[26px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
