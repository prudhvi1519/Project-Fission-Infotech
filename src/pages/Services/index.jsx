import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import one from '../../../public/images/01.png';
import TestimonialsSection from '@/components/common/Testimonal';
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import sevicetwo from '/images/servicetwo.svg';
import sevicethree from '/images/service3.svg';

const Services = () => {
  const coreServices = [
    {
      title: 'Software Development',
      desc: 'Build custom software and applications tailored to your requirements.',
    },
    {
      title: 'IT Consulting & Strategy',
      desc: 'Align technology with business goals through expert advice and roadmaps.',
    },
    {
      title: 'IT Staff Augmentation',
      desc: 'Quickly scale your team with our vetted IT professionals and specialists.',
    },
    {
      title: 'DevOps & Automation',
      desc: 'Streamline development pipelines and operations with CI/CD, automation, and best practices.',
    },
    {
      title: 'Cybersecurity Services',
      desc: 'Protect systems and data with robust security assessments, implementations, and monitoring.',
    },
    {
      title: 'Cloud Services',
      desc: 'Enable scalability and flexibility with cloud migration, management, and optimization.',
    },
    {
      title: 'IT Support & Help Desk',
      desc: 'Ensure business continuity with 24/7 support, troubleshooting, and maintenance.',
    },
    {
      title: 'Data Services',
      desc: 'Leverage data analytics, warehousing, and management to unlock insights and drive decisions.',
    },
    {
      title: 'Networking & Infrastructure',
      desc: 'Design and manage reliable IT infrastructure and networks for peak performance.',
    },
  ];

  const itServices = [
    {
      title: 'AI & MACHINE LEARNING',
      desc: 'Implement AI/ML solutions for automation, insights, and intelligent systems.',
    },
    {
      title: 'IOT SETUP & MANAGEMENT',
      desc: 'Deploy and manage IoT devices, connectivity, and analytics.',
    },
    {
      title: 'RPA (ROBOTIC PROCESS AUTOMATION)',
      desc: 'Automate repetitive tasks and processes using RPA tools.',
    },
    {
      title: 'BLOCKCHAIN & SMART CONTRACTS',
      desc: 'Build secure blockchain solutions and smart contract systems.',
    },
  ];

  const designServices = [
    {
      title: 'UI/UX DESIGN',
      desc: 'Craft intuitive user interfaces and experiences that delight customers.',
    },
    {
      title: 'PRODUCT DESIGN',
      desc: 'Create functional, market-ready product designs that engage users.',
    },
    {
      title: 'BRANDING & VISUAL DESIGN',
      desc: 'Develop a strong visual identity for your business.',
    },
    {
      title: 'DESIGN SYSTEMS & PROTOTYPING',
      desc: 'Standardize design with reusable systems and rapid prototypes.',
    },
  ];

  const [activeIT, setActiveIT] = useState(null);
  const [activeDesign, setActiveDesign] = useState(null);


   
  const ServiceList = ({
  services,
  active,
  setActive,
  inactiveBg = 'bg-[#1a1a1a]',
  inactiveText = 'text-white',
  inactiveBtnBg = 'bg-[#333]',      // <-- NEW
  inactiveBtnText = 'text-white'    // <-- NEW
}) => (
  <div className="flex flex-col gap-3">
    {services.map((service, index) => {
      const isActive = active === index;
      return (
        <div
          key={index}
          className={`p-4 rounded-lg transition-all duration-300 ${
            isActive
              ? 'bg-green-400 text-black'
              : `${inactiveBg} ${inactiveText}`
          }`}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setActive(isActive ? null : index)}
          >
            <h3 className="font-anton py-4 text-[30px] sm:text-[20px]">{service.title}</h3>
            <span
              className={`w-6 h-6   flex items-center justify-center rounded-full font-bold ${
                isActive
                  ? 'bg-black text-green-400'
                  : `${inactiveBtnBg} ${inactiveBtnText}`
              }`}
            >
              {isActive ? '−' : '+'}
            </span>
          </div>
          {isActive && service.desc && <p className="text-[18px] mt-2 font-dm-sans">{service.desc}</p>}
        </div>
      );
    })}
  </div>
);


  return (
    <div>
      {/* Hero Section */}
      <section>
        <HeroSection
          subtitle="Our Services"
          title="What We Do"
          description="End-to-End IT Solutions: From advisory consulting to creative design and emerging tech, Fission provides a one-stop partnership for all your digital needs."
          buttonText="Request a Free Consultation"
          leftImage="/images/img_mask_group.png"
          rightImage="/images/img_mask_group.png"
          taglineHighlight="15+ years"
        />
      </section>

      {/* Core IT Services */}
      {/* Core IT Services */}
      <section className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 mt-8 mb-8 bg-white">
        <h2 className="text-4xl font-anton mb-10 tracking-tight">CORE IT SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-sm border transition group
        ${service.highlight ? 'bg-[#A1F480]' : 'bg-gray-100'}
        hover:bg-[#A1F480] hover:shadow-lg`}
            >
              <h3 className="text-lg font-anton uppercase tracking-tight mb-2 relative text-black">
                {service.title}
                {/* Underline */}
                <span className="block w-6 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-sm font-dm-sans leading-relaxed transition-colors duration-300 text-[#444444] group-hover:text-black">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized IT Services */}
      <section className="bg-black w-full">
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white font-anton text-[40px] md:text-[60px] mb-6">
                SPECIALIZED IT SERVICES
              </h2>
              <ServiceList services={itServices} active={activeIT} setActive={setActiveIT} />
            </div>
            <div>
              <img
                src={sevicetwo}
                alt="IT Services"
                className="w-full h-[700px] object-cover   rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design & Experience Services */}
      <section className="bg-white w-full">
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={sevicethree}
                alt="Design Services"
                className="w-full h-[700px] object-cover rounded-3xl"
              />
            </div>
            <div>
              <p className="text-[#1D1D1D] font-anton text-[40px] md:text-[60px] mb-6 inline-block">
                DESIGN & EXPERIENCE SERVICES
              </p>
              <ServiceList
                services={designServices}
                active={activeDesign}
                setActive={setActiveDesign}
                inactiveBg="bg-white"
                inactiveText="text-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-global-10 relative">
        <TestimonialsSection />
      </section>

      <Banner />
      <Footer />
    </div>
  );
};

export default Services;
