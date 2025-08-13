import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import ServicesSection from '@/components/common/ServicesSection';
import TestimonialsSection from '@/components/common/Testimonal';
import React from 'react';

export const Contactus = (props) => {
  return (
    <div>
      <section>
        <HeroSection
          subtitle="contact us"
          title="Let’s connect"
          underlineImage="/images/img_vector_4.svg"
          description={
            <p className="text-lg leading-relaxed mt-14 max-w-[600px]">
              Let’s discuss how our experts can solve your IT challenges and drive your business
              forward.
            </p>
          }
        />
      </section>

      <section>
        <ServicesSection
          boxes={[
            {
              title: 'email us',
              icon: '/images/img_code.svg',
              bgColor: 'bg-global-4',
              description: 'info@fission.it',
              height: 'md:h-[300px]  h-[30%px]', // ✅ custom height
              layoutClass: 'lg:w-[36%] lg:mt-[80px]',
            },
            {
              title: 'Visit our office',
              icon: '/images/img_artificial_intelligence.svg',
              bgColor: 'bg-global-3',
              textColor: 'text-white',
              description:
                'India Nasuja building H. No. 1 - 89 / G / 36, Plot No. 36 Shilpi Valley, Madhapur, Hyderabad - 500081.',
              height: 'lg:h-[370px] md:h-[300px] h-[100%]', // ✅ custom height
              layoutClass: 'sm:w-[350px]',
            },
            {
              title: 'call us',
              icon: '/images/img_ui_design.svg',
              bgColor: 'bg-global-8',
              description: '+91-98765432',
              height: 'md:h-[300px] h-[100px]', // ✅ custom height
              layoutClass: 'sm:w-[350px] lg:mt-[20px]',
            },
          ]}
        />
      </section>

      <section className="bg-black">
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
          {/* Heading */}
          <h2 className="text-white font-anton text-[40px] sm:text-[50px] md:text-[80px] leading-tight uppercase mb-8">
            Get in Touch
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="FULL NAME"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="SUBJECT"
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="WRITE YOUR MESSAGE HERE..."
              rows="4"
              className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Send Message
              <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                →
              </span>
            </button>
          </form>
        </div>
      </section>

      <section>
        <TestimonialsSection />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};
