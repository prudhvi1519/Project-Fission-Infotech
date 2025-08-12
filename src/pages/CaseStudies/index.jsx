import Header from '@/components/common/Header';
import HeroSection from '@/components/common/HeroSection';
import React from 'react';
import casestudies from "/images/casestudies.svg"
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';

export const CaseStudies = (props) => {
  return (
    <div>
      <section>
        <HeroSection
          subtitle="case studies"
          title={
            <span className="text-white">
              case study <span className="text-[#A1F480]">heading</span> comes here..
            </span>
          }
        />
      </section>
      <section>
        <div className="w-full  max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-900">
          {/* INTRODUCTION */}
          <section className="mb-10 ">
            <h2 className="  uppercase mb-3 font-anton text-[40px]">Introduction</h2>
            <p className="text-[25px] font-dm-sans text-[#6D7769]">
              The digital marketing landscape is ever-evolving, driven by rapid advancements in
              technology and changing consumer behaviors. In 2024, marketers must adapt swiftly and
              leverage tools to remain relevant in the competitive digital realm. From AI-driven
              strategies to hyper-personalization, this blog explores the key developments shaping
              the future of digital marketing and the actionable insights to help businesses thrive
              in this dynamic environment.
            </p>
          </section>

          {/* 1. AI-POWERED REVOLUTION */}
          <section className="mb-10">
            <h3 className=" uppercase mb-3 font-anton text-[40px]">1. AI-Powered Revolution</h3>
            <p className="text-[25px] font-dm-sans text-[#6D7769]">
              Artificial Intelligence (AI) continues to transform the digital marketing landscape in
              unprecedented ways in 2024. AI is expected to enhance customer targeting, streamline
              campaign creation, and provide more comprehensive data analysis for precise
              decision-making. By automating routine tasks and delivering predictive insights, AI
              allows marketers to focus on creative and strategic endeavors. Businesses leveraging
              AI in their marketing will gain a significant competitive edge in the years ahead.
            </p>
          </section>

          {/* IMAGE SECTION */}
          <section className="mb-10">
            <h3 className=" uppercase mb-3 font-anton text-[40px]">
              Maximized Efficiency Through Retargeting and High-Performing Keywords.
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={casestudies}
                alt="Marketing Team"
                className="w-full object-cover"
              />
            </div>
          </section>

          {/* 2. THE RISE OF HYPER-PERSONALIZATION */}
          <section className="mb-10">
            <h3 className=" uppercase mb-3 font-anton text-[40px]">2. The Rise of Hyper-Personalization</h3>
            <p className="text-[25px] font-dm-sans text-[#6D7769]">
              In an online ecosystem oversaturated with content, personalization has become a key
              differentiator. Hyper-personalization goes beyond addressing customers by name,
              providing individualized recommendations and interactive experiences based on
              real-time behavior. By leveraging browsing history and location-based targeting,
              brands can foster stronger emotional connections and drive customer loyalty.
            </p>
          </section>

          {/* 3. THE GROWTH OF VOICE AND VISUAL SEARCH */}
          <section className="mb-10">
            <h3 className=" uppercase mb-3 font-anton text-[40px]">3. The Growth of Voice and Visual Search</h3>
            <p className="text-[25px] font-dm-sans text-[#6D7769]">
              As technology evolves, voice and visual search capabilities are reshaping how users
              find and interact with content. Marketers must optimize for conversational keywords
              and image recognition algorithms to capture this growing audience.
            </p>
          </section>

          {/* 4. INTERACTIVE AND IMMERSIVE CONTENT */}
          <section className="mb-10">
            <h3 className=" uppercase mb-3 font-anton text-[40px]">4. Interactive and Immersive Content</h3>
            <p className="text-[25px] font-dm-sans text-[#6D7769]">
              Static content is no longer enough to keep audiences engaged. In the fast-paced
              digital world of 2024, interactive and immersive content formats—such as gamification,
              augmented reality (AR), and virtual reality (VR)—are dominating brand engagement
              strategies.
            </p>
          </section>

          {/* 5. SUSTAINABILITY AND ETHICAL MARKETING */}
          <section>
            <h3 className=" uppercase mb-3 font-anton text-[40px]">5. Sustainability and Ethical Marketing</h3>
            <p className="text-[25px] font-dm-sans text-[#6D7769]">
              Modern consumers increasingly base their purchasing decisions on ethical values,
              making sustainability and ethics critical to brand perception. Companies that
              transparently communicate their corporate responsibility efforts are building trust
              and long-term loyalty.
            </p>
          </section>
        </div>
      </section>
      <section>
        <Banner/>
        <Footer/>
      </section>
    </div>
  );
};
