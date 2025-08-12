import HeroSection from '@/components/common/HeroSection';
import React from 'react';
import founder from '/images/founder.svg';
import underlineImage from '/images/img_vector_3.svg';
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';

export const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="">
        <HeroSection
          subtitle="About Fission"
          title="Built on 15 Years of Grit & innovation "
          underlineImage="/images/img_vector_4.svg"
          description={`Founded in Hyderabad in 2010, Fission is a self-funded tech conglomerate reflecting our belief: lasting impact is built, not bought.
We've grown from a two-person startup into a global name with a team of 80+ and clients across more than 100 companies worldwide.
Our mission? To create one million jobs.`}
        />
      </section>

      {/* Founders Section */}
      <section className="w-full bg-white py-16">
        <div className="mb-16 text-center">
          <h2 className="text-[40px] sm:text-[60px] md:text-[80px] font-anton uppercase text-black">
            Founders
          </h2>
          <img src={underlineImage} alt="Underline" className="mx-auto mt-2" />
          <h3 className="text-[28px] sm:text-[38px] md:text-[50px] font-anton uppercase text-black mt-4">
            Vision Meets Expertise
          </h3>
        </div>

        {/* First Founder */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-end gap-8 mb-24 px-4">
          <div className="relative flex flex-col md:block items-center">
            <img
              src={founder}
              alt="Sandeep Nukarapu"
              className="w-[250px] sm:w-[280px] md:w-[300px] h-auto object-cover rounded-xl grayscale"
            />

            {/* Green name box */}
            <div
              className="mt-4 md:mt-0 md:absolute md:bottom-14 md:right-[280px] 
  bg-[#A6FF72] text-black px-6 py-2 rounded-lg shadow-md uppercase 
  font-anton text-[20px] sm:text-[24px] md:text-[30px] text-center md:text-left 
  w-full md:w-[270px] lg:w-[330px]"
            >
              Sandeep Nukarapu
            </div>

            {/* Intro text */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-[30px] md:left-[320px] w-full md:w-[280px] text-gray-700 text-center md:text-left font-dm-sans">
              <p className="font-medium leading-[22px] sm:leading-[24px] md:leading-[26px] text-[16px] sm:text-[18px] md:text-[20px] mb-2">
                Founder & CEO
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
                Spirited leader driving Fission’s mission to create jobs and deliver impact.
              </p>
            </div>
          </div>
        </div>

        {/* Second Founder */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 px-4">
          <div className="relative flex flex-col md:block items-center">
            <img
              src={founder}
              alt="Bhargav Kandimalla"
              className="w-[250px] sm:w-[280px] md:w-[300px] h-auto object-cover rounded-xl grayscale"
            />

            {/* Green name box */}
            <div
              className="mt-4 md:mt-0 md:absolute md:top-14 md:left-[280px] 
  bg-[#A6FF72] text-black px-6 py-2 rounded-lg shadow-md uppercase 
  font-anton text-[20px] sm:text-[24px] md:text-[30px] text-center md:text-left 
  w-full md:w-[280px] lg:w-[330px]"
            >
              {' '}
              Bhargav Kandimalla
            </div>

            {/* Intro text */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-[40px] md:right-[320px] w-full md:w-[280px] text-gray-700 text-center md:text-right font-dm-sans">
              <p className="font-medium leading-[22px] sm:leading-[24px] md:leading-[26px] text-[16px] sm:text-[18px] md:text-[20px] mb-2">
                Co-Founder & CTO
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] md:ml-8 text-right leading-[22px] sm:leading-[24px] md:leading-[26px]">
                Oversees tech innovation, ensuring solutions are robust, scalable, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-[#1D1D1D]">
          {/* Header */}
          <div className="rounded-2xl px-4 sm:px-8 py-6 mb-12 text-center">
            <h1 className="text-[#EBEBEB] font-anton text-[40px] sm:text-[60px] lg:text-[80px] font-bold tracking-wider">
              OUR JOURNEY
              <img
                src={underlineImage}
                alt="Underline"
                className="mx-auto mt-2 w-[100px] sm:w-[140px]"
              />
            </h1>
            <p className="text-[#EBEBEB] font-anton text-[28px] sm:text-[40px] lg:text-[50px] mt-1 tracking-wide">
              & GROWTH TIMELINE
            </p>
          </div>

          {/* Timeline */}
          <div className="relative font-anton w-full max-w-6xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2010 */}
              <div className="relative flex items-center justify-between w-full">
                {/* Left */}
                <div className="w-[45%] pr-4 text-right">
                  <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] font-bold mb-2">
                    2010
                  </h2>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right */}
                <div className="w-[45%] pl-4 font-dm-sans">
                  <p className="text-[#6D7769] text-[14px] sm:text-[18px] lg:text-[22px] leading-relaxed">
                    Began delivering IT services from Hyderabad with U.S. clients.
                  </p>
                </div>
              </div>

              {/* 2018-2021 */}
              <div className="relative flex items-center justify-between w-full">
                {/* Left */}
                <div className="w-[45%] pr-4 font-dm-sans text-right">
                  <p className="text-[#6D7769] text-[14px] sm:text-[18px] lg:text-[22px] leading-relaxed">
                    Launched Neodrafts and PixelRevs
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right */}
                <div className="w-[45%] pl-4">
                  <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] font-bold mb-2">
                    2018-2021
                  </h2>
                </div>
              </div>

              {/* 2020-2023 */}
              <div className="relative flex items-center justify-between w-full">
                {/* Left */}
                <div className="w-[45%] pr-4 text-right">
                  <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] font-bold mb-2">
                    2020-2023
                  </h2>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right */}
                <div className="w-[45%] pl-4 font-dm-sans">
                  <p className="text-[#6D7769] text-[14px] sm:text-[18px] lg:text-[22px] leading-relaxed">
                    Deployed 9 SaaS platforms.
                  </p>
                </div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center justify-between w-full">
                {/* Left */}
                <div className="w-[45%] pr-4 font-dm-sans text-right">
                  <p className="text-[#6D7769] text-[14px] sm:text-[18px] lg:text-[22px] leading-relaxed">
                    Global tech hub, 80+ experts, offices in Hyderabad & Las Vegas.
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right */}
                <div className="w-[45%] pl-4">
                  <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[50px] font-bold mb-2">
                    2025
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          {/* Left Side - Text */}
          <div>
            <h2 className=" text-[50px] lg:text-[80px]  font-anton leading-tight">
              OUR MISSION:
              
              <span>BEYOND PROFITS</span>
            </h2>
            <p className="font-dm-sans text-[#6D7769] text-[20px] mt-4 max-w-md">
              Fission isn’t here to chase unicorn valuations—it’s here to empower one million people
              with meaningful work. We’ve built every venture and product with that intention,
              preserving independence and prioritizing mission over margins.
            </p>
          </div>

          {/* Right Side - Image */}
          <div>
            {
              <img
                src="/images/img_rectangle_24.png"
                alt="Mission"
                className="rounded-xl w-full object-cover"
              />
            }
          </div>
        </div>
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
