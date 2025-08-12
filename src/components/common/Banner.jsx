import React from 'react'
import Button from '../ui/Button'

export const Banner = (props) => {
  return (
    <section className="w-full bg-global-10 relative overflow-hidden">
      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-[35px] md:py-[70px]">
          <div className="bg-global-2 rounded-[40px] p-[30px] sm:p-[45px] md:p-[60px] relative overflow-hidden">
            
            {/* Top Left Background Image */}
            <div className="absolute left-[3px] md:left-[0px] top-0 w-[101px] sm:w-[107px] md:w-[202px] h-[191px] sm:h-[207px] md:h-[202px] z-0">
              <img
                src="/images/img_mask_group_light_green_300.svg"
                alt="Background Top Left"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Background Image */}
            <div className="absolute right-[3px] md:right-[0px] bottom-0 w-[101px] sm:w-[107px] md:w-[202px] h-[191px] sm:h-[207px] md:h-[202px] z-0">
              <img
                src="/images/img_mask_group_light_green_300.svg"
                alt="Background Bottom Right"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-[15px] md:gap-[30px] relative z-10">
              <div className="flex items-center gap-[5px] md:gap-[10px] border border-global-2 rounded-[16px] px-[10px] py-[5px]">
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-global-4 rounded-[3px] md:rounded-[4px]"></div>
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold leading-[22px] sm:leading-[24px] md:leading-[27px] text-center uppercase text-global-5">
                  Let's Talk
                </span>
              </div>

              <h2 className="text-[50px] sm:text-[65px] md:text-[80px] font-anton font-normal leading-[55px] sm:leading-[70px] md:leading-[85px] text-center uppercase text-global-7 w-full">
                <span>Ready to </span>
                <span className="text-global-5">Transform</span>
                <span> Your IT Strategy?</span>
              </h2>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-global-4 w-full lg:w-[68%]">
                Let's discuss how our experts can solve your IT challenges and drive your business
                forward. We offer a free, no-obligation consultation to assess your needs and chart a path to success.
              </p>

              <Button
                variant="primary"
                size="medium"
                rightImage={{
                  src: '/images/img_vector.svg',
                  width: 30,
                  height: 30,
                }}
                className="bg-[#A1F480]  px-[10px] sm:px-[35px] md:px-[50px] py-[4px] sm:py-[6px] md:py-[8px] rounded-[22px]"
              >
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
