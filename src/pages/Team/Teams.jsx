import React from 'react';
import HeroSection from '@/components/common/HeroSection';
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';

const teamMembers = [
  {
    id: 1,
    name: "MARK ROBERT",
    role: "Digital Strategist",
    image: "/images/oldman.svg"
  },
  {
    id: 2,
    name: "MARK ROBERT",
    role: "Digital Strategist", 
    image: "/images/oldman.svg"
  },
  {
    id: 3,
    name: "MARK ROBERT",
    role: "Digital Strategist",
    image: "/images/oldman.svg"
  },
  {
    id: 4,
    name: "MARK ROBERT",
    role: "Digital Strategist",
    image: "/images/oldman.svg"
  },
  {
    id: 5,
    name: "MARK ROBERT", 
    role: "Digital Strategist",
    image: "/images/oldman.svg"
  },
  {
    id: 6,
    name: "MARK ROBERT",
    role: "Digital Strategist",
    image: "/images/oldman.svg"
  }
];

export const Teams = (props) => {
  return (
    <div>
      <section>
        <HeroSection
          subtitle="our team"
          title="meet the team"
        />
        
        {/* Team Grid Section */}
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full Anton object-cover  grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className="font-bold font-anton text-[45px] mb-1 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[20px] text-[#444444] font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
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