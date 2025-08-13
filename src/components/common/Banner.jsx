import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export const Banner = (props) => {
  const bgAnimate = {
    animate: {
      rotate: [0, 3, -3, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="w-full max-w-[1102px] mx-auto px-4 sm:px-6">
      <div className="">
        <div className="py-[35px] md:py-[70px]">
          <div className="bg-global-2 rounded-[40px] p-[30px] sm:p-[45px] md:p-[60px] relative overflow-hidden">
            {/* Top Left Background Image */}
            <motion.div
              {...bgAnimate}
              className="absolute left-[3px] md:left-[0px] top-0 w-[101px] sm:w-[107px] md:w-[202px] h-[191px] sm:h-[207px] md:h-[202px] z-0"
            >
              <img
                src="/images/img_mask_group_light_green_300.svg"
                alt="Background Top Left"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Right Background Image */}
            <motion.div
              {...bgAnimate}
              className="absolute right-[3px] md:right-[0px] bottom-0 w-[101px] sm:w-[107px] md:w-[202px] h-[191px] sm:h-[207px] md:h-[202px] z-0"
            >
              <img
                src="/images/img_mask_group_light_green_300.svg"
                alt="Background Bottom Right"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col items-center gap-[15px] md:gap-[30px] relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex items-center gap-[5px] md:gap-[10px] border border-global-2 rounded-[16px] px-[10px] py-[5px]"
              >
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-global-4 rounded-[3px] md:rounded-[4px]"></div>
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold leading-[22px] sm:leading-[24px] md:leading-[27px] text-center uppercase text-global-5">
                  Let's Talk
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-[50px] sm:text-[65px] md:text-[80px] font-anton font-normal leading-[55px] sm:leading-[70px] md:leading-[85px] text-center uppercase text-global-7 w-full"
              >
                <span>Ready to </span>
                <span className="text-global-5">Transform</span>
                <span> Your IT Strategy?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-global-4 w-full lg:w-[68%]"
              >
                Let's discuss how our experts can solve your IT challenges and drive your business
                forward. We offer a free, no-obligation consultation to assess your needs and chart
                a path to success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="primary"
                  size="medium"
                  rightImage={{
                    src: '/images/img_vector.svg',
                    width: 30,
                    height: 30,
                  }}
                  className="bg-[#A1F480] px-[10px] sm:px-[35px] md:px-[50px] py-[4px] sm:py-[6px] md:py-[8px] rounded-[22px]"
                >
                  Get Your Free Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
