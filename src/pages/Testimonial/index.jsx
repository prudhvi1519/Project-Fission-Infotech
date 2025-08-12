import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import React from 'react';

export const Testimonials = (props) => {
  const testimonialsData = [
    {
      quote: "FISSION'S TEAM FELT LIKE AN EXTENSION OF OUR OWN.",
      description:
        'They delivered our project ahead of schedule and above expectations — truly the gold standard of partnership.',
      author: 'Amanda Smith',
      title: 'IT Director at Instacart',
      imageSrc: '/images/human.svg', // replace with your image
    },
    {
      quote: 'WE WERE IMPRESSED BY HOW QUICKLY FISSION UNDERSTOOD OUR INDUSTRY.',
      description: 'Their expertise and agile process helped us increase productivity by 50%.',
      author: 'Keith Messick',
      title: 'CTO of Redis',
      imageSrc: '/images/human.svg', // replace with your image
    },
    {
      quote: "FISSION'S TEAM FELT LIKE AN EXTENSION OF OUR OWN.",
      description:
        'They delivered our project ahead of schedule and above expectations — truly the gold standard of partnership.',
      author: 'Amanda Smith',
      title: 'IT Director at Instacart',
      imageSrc: '/images/human.svg',
    },
    {
      quote: 'WE WERE IMPRESSED BY HOW QUICKLY FISSION UNDERSTOOD OUR INDUSTRY.',
      description: 'Their expertise and agile process helped us increase productivity by 50%.',
      author: 'Keith Messick',
      title: 'CTO of Redis',
      imageSrc: '/images/human.svg',
    },
  ];
  return (
    <div>
      <section>
        <HeroSection
          subtitle="Testimonials"
          title={<span className="text-white">What Our Clients Say</span>}
        />
      </section>
      <section>
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-900">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-300 pb-8 mb-8 last:mb-0 last:pb-0 last:border-b-0"
            >
              {/* Left side - text */}
              <div className="max-w-[850px]">
                <div className="flex items-center mb-4">
                  {/* Black double slash image */}
                  <img src="/images/img_.svg" alt="quotation marks" className="w-8 h-8 mr-3" />
                  <h3 className="font-anton uppercase text-[30px] leading-tight tracking-tight">
                    {testimonial.quote}
                  </h3>
                </div>
                <p className="text-gray-700 font-dm-sans mb-4 ml-12">{testimonial.description}</p>
                <p className="font-semibold font-dm-sans ml-12">{testimonial.author}</p>
                <p className="text-[#444444] font-dm-sans text-sm ml-12">
                  {testimonial.title
                    .split(' ')
                    .map((word, idx) =>
                      word.toLowerCase() === 'at' ? (
                        <span key={idx}>at </span>
                      ) : (
                        <em key={idx}>{word} </em>
                      )
                    )}
                </p>
              </div>

              {/* Right side - profile image */}
              <div className="flex-shrink-0 ml-6">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.author}
                  className="w-24 h-24 rounded-full object-cover grayscale"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Banner/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};
