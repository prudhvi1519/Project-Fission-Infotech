import React from 'react';

export const Footer = (props) => {
  return (
    <footer className="w-full bg-global-2">
      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[27px] md:py-[54px]">
          <div className="flex flex-col font-dm-sans items-center gap-[29px] md:gap-[58px]">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center items-center gap-[2px] md:gap-[4px] w-full max-w-[460px]">
              <div className="flex items-center gap-[6px] md:gap-[12px]">
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-light leading-[22px] sm:leading-[24px] md:leading-[27px] text-left text-global-10">
                  About Us
                </span>
                <div className="w-[1px] h-[7px] md:h-[14px] bg-global-5"></div>
              </div>
              <div className="flex items-center gap-[6px] md:gap-[12px]">
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-light leading-[22px] sm:leading-[24px] md:leading-[27px] text-left text-global-10">
                  Services
                </span>
                <div className="w-[1px] h-[7px] md:h-[14px] bg-global-5"></div>
              </div>
              <div className="flex items-center gap-[6px] md:gap-[12px]">
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-light leading-[22px] sm:leading-[24px] md:leading-[27px] text-left text-global-10">
                  Industries
                </span>
                <div className="w-[1px] h-[7px] md:h-[14px] bg-global-5"></div>
              </div>
              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-light leading-[22px] sm:leading-[24px] md:leading-[27px] text-left text-global-10">
                Case Studies
              </span>
            </div>

            {/* Company Info */}
            <div className="flex flex-col items-center font-anton gap-[9px] md:gap-[18px] w-full max-w-[690px]">
              <h3 className="text-[20px] sm:text-[18px] md:text-[20px] font-anton font-normal leading-[20px] sm:leading-[24px] md:leading-[31px] text-left text-global-7">
                <span className="text-[#A1F480] mr-2">Your Partner</span>
                in Reliable IT Innovation
              </h3>

              {/* Logo Strip */}
              <div className="flex items-center gap-[7px] sm:gap-[11px] md:gap-[14px] w-fullml-2">
                <img
                  src="/images/img_vector_light_green_300.svg"
                  alt="Logo"
                  className="w-[46px] sm:w-[69px] md:w-[92px] h-[63px] sm:h-[95px] md:h-[126px]"
                />
                <div className="w-[16px] sm:w-[24px] md:w-[32px] h-[63px] sm:h-[95px] md:h-[126px] bg-global-5 "></div>
                <img
                  src="/images/img_vector_light_green_300_132x110.svg"
                  alt="Logo"
                  className="w-[55px] sm:w-[83px] md:w-[110px] h-[66px] sm:h-[99px] md:h-[132px]"
                />
                <img
                  src="/images/img_vector_light_green_300_132x110.svg"
                  alt="Logo"
                  className="w-[55px] sm:w-[83px] md:w-[110px] h-[66px] sm:h-[99px] md:h-[132px]"
                />
                <div className="w-[16px] sm:w-[24px] md:w-[32px] h-[63px] sm:h-[95px] md:h-[126px] bg-global-5 "></div>
                <img
                  src="/images/img_vector_light_green_300_132x124.svg"
                  alt="Logo"
                  className="w-[62px] sm:w-[93px] md:w-[124px] h-[66px] sm:h-[99px] md:h-[132px]"
                />
                <img
                  src="/images/img_vector_light_green_300_126x108.svg"
                  alt="Logo"
                  className="w-[54px] sm:w-[81px] md:w-[108px] h-[63px] sm:h-[95px] md:h-[126px]"
                />
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-0 w-full">
              <span className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-center text-global-4">
                Copyright © 2025 Fission. All rights reserved.
              </span>

              <div className="flex items-center gap-[10px] md:gap-[20px] sm:ml-auto">
                <span className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-center text-global-4">
                  @fission.it
                </span>
                <img
                  src="/images/img_facebook.svg"
                  alt="Facebook"
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer hover:opacity-70 transition-opacity"
                />
                <img
                  src="/images/img_twitter_alt_circle.svg"
                  alt="Twitter"
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer hover:opacity-70 transition-opacity"
                />
                <img
                  src="/images/img_group_27.svg"
                  alt="Instagram"
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer hover:opacity-70 transition-opacity"
                />
                <img
                  src="/images/img_linkedin_1.svg"
                  alt="LinkedIn"
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer hover:opacity-70 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
