import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import left from '../../../public/images/leftarrow.svg';
import right from '../../../public/images/rightarrow.svg';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      title: "Fission's team felt like an extension of our own.",
      description:
        'They delivered our project ahead of schedule and above expectations – truly the gold standard of partnership.',
      author: 'Amanda Smith',
      role: 'IT Director at Instacart',
      logo: '/images/img_.svg',
    },
    {
      title: 'We were impressed by how quickly Fission understood our industry.',
      description: 'Their expertise and agile process helped us increase productivity by 50%.',
      author: 'Keith Messick',
      role: 'CTO of Redis',
      logo: '/images/img_.svg',
    },
    {
      title: 'They exceeded expectations on every metric.',
      description: 'From communication to delivery, everything was seamless and professional.',
      author: 'Sarah Johnson',
      role: 'CEO of TechNova',
      logo: '/images/img_.svg',
    },
  ];

  return (
    <section className="w-full bg-global-10 relative">
      <div className="relative w-full max-w-[1370px] mx-auto">
        <div className="mx-[20px] sm:mx-[35px] md:mx-[70px] p-[30px] sm:p-[50px] md:p-[82px]">
          <div className="flex flex-col items-start">
            {/* Heading */}
            <div className="bg-global-4 rounded-[16px] px-[14px] sm:px-[20px] py-[2px] mb-[12px] sm:mb-[20px] md:mb-[28px]">
              <span className="text-[14px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold uppercase text-global-2">
                Testimonials
              </span>
            </div>

            <div className="relative w-full inline-block">
              <h2 className="text-[34px] sm:text-[50px] md:text-[80px] font-anton uppercase text-global-1 leading-tight">
                What Our Clients Say
                <span>
                  <img
                    src="/images/img_vector_1.svg"
                    alt="Decorative underline"
                    className="absolute w-[200px] sm:w-[248px]"
                  />
                </span>
              </h2>
            </div>

            {/* Slider */}
            <div className="relative w-full mt-[30px] sm:mt-[40px]">
              {/* Desktop arrows inside */}
              <div className="hidden lg:block">
                <div className="custom-prev w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] absolute left-[0] sm:-left-[50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/10 rounded-full flex items-center justify-center">
                  <img src={left} alt="Prev" className="w-[24px] sm:w-[24px]" />
                </div>
                <div className="custom-next w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] absolute right-[0] sm:-right-[50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/10 rounded-full flex items-center justify-center">
                  <img src={right} alt="Next" className="w-[24px] sm:w-[24px]" />
                </div>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                autoplay={{ delay: 5000 }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
                  768: { slidesPerView: 1, spaceBetween: 24, centeredSlides: true },
                  1024: { slidesPerView: 2, spaceBetween: 30, centeredSlides: false },
                }}
                className="w-full"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={
                        activeIndex === i
                          ? { opacity: 1, scale: 1, y: 0 }
                          : { opacity: 0.5, scale: 0.95 }
                      }
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="bg-global-8 rounded-[16px] sm:rounded-[20px] p-[16px] sm:p-[24px] md:p-[40px] h-full flex flex-col justify-between min-h-[300px] sm:min-h-[350px]"
                    >
                      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[20px] flex-grow">
                        <div className="flex flex-col gap-[4px] sm:gap-[8px] items-start">
                          <div className="w-[12px] sm:w-[20px] md:w-[26px] h-[2px] bg-global-1"></div>
                          <h3 className="text-[18px] sm:text-[25px] md:text-[30px] font-anton uppercase text-global-1 leading-snug">
                            {t.title}
                          </h3>
                          <p className="text-[14px] sm:text-[18px] md:text-[20px] font-dm-sans italic text-global-3">
                            {t.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] sm:gap-[15px] md:gap-[30px] items-start mt-[16px] sm:mt-[20px]">
                        <p className="text-[12px] sm:text-[14px] md:text-[16px] font-dm-sans italic text-global-3">
                          - <span className="font-semibold">{t.author}</span>,{' '}
                          <span className="font-light">{t.role}</span>
                        </p>
                        <img
                          src={t.logo}
                          alt="Company Logo"
                          className="w-[32px] sm:w-[54px] md:w-[72px] h-auto"
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile & tablet buttons */}
              <div className="flex lg:hidden justify-center gap-4 mt-4">
                <div className="custom-prev w-[40px] h-[40px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={left} alt="Prev" className="w-[24px]" />
                </div>
                <div className="custom-next w-[40px] h-[40px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={right} alt="Next" className="w-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
