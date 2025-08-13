import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import one from '../../../public/images/01.png';
import TestimonialsSection from '@/components/common/Testimonal';
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import ServicesSection from '@/components/common/ServicesSection';
const Home = () => {
  const stepsData = [
    {
      id: 1,
      number: '01.',
      title: 'Discover & Strategize',
      icon: '/images/img_group_41.svg',
      description:
        'Understand client goals, analyze requirements, and create a strategic project roadmap.',
    },
    {
      id: 2,
      number: '02.',
      title: 'Design & Prototype',
      icon: '/images/img_group_42.svg',
      description:
        'Translate ideas into wireframes, prototypes, or system designs with iterative feedback loops.',
    },
    {
      id: 3,
      number: '03.',
      title: 'Develop & Implement',
      icon: '/images/img_group_41.svg',
      description: 'Convert designs into functional products with clean and scalable code.',
    },
    {
      id: 4,
      number: '04.',
      title: 'Test & Refine',
      icon: '/images/img_group_41.svg',
      description:
        'Thoroughly test for bugs, optimize performance, and refine for the best user experience.',
    },
    {
      id: 5,
      number: '05.',
      title: 'Launch & Support',
      icon: '/images/img_group_41.svg',
      description: 'Deploy to production, monitor performance, and provide long-term support.',
    },
  ];

  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };
  return (
    <div>
      {/* Hero Section */}
      <section>
        <HeroSection
          subtitle="A Powerful Value Proposition"
          title="Empowering Your Business Through Reliable IT innovation"
          underlineImage="/images/img_vector_4.svg"
          description="From IT consulting to cutting-edge development, we leverage technology to fuel your growth and efficiency."
          buttonText="Request a Free Consultation"
          leftImage="/images/img_mask_group.png"
          rightImage="/images/img_mask_group.png"
          taglineText="Delivering excellence in IT services for 15+ years"
          taglineHighlight="15+ years"
        />
      </section>

      {/* Trusted Companies Section */}
      <section className="w-full bg-global-9">
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-[57px] sm:py-[86px] md:py-[114px]">
            <div className="flex flex-col items-center gap-[22px] md:gap-[44px]">
              {/* Section Header */}
              <div className="relative w-full max-w-[632px] text-center">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-anton leading-[45px] sm:leading-[50px] md:leading-[60px] text-center uppercase text-global-1 mb-2">
                  <span className="text-[25px] sm:text-[35px] md:text-[40px]">
                    Trusted by Leading{' '}
                    <span className="relative inline-block">
                      Companies
                      <img
                        src="/images/img_vector_3.svg"
                        alt="Decorative"
                        className="absolute left-0 top-full mt-2 w-full"
                      />
                    </span>
                  </span>
                </h2>

                <p className="text-[20px] sm:text-[25px] md:text-[30px] font-dm-sans font-light italic leading-[28px] sm:leading-[35px] md:leading-[40px] text-center text-global-4">
                  in Technology, Healthcare, Finance, and more...
                </p>
              </div>

              {/* Company Names */}
              <div className="flex flex-wrap font-francois-one justify-center items-center gap-[20px] sm:gap-[40px] md:gap-[60px] w-full max-w-[864px]">
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-francois-one font-normal leading-[26px] sm:leading-[29px] md:leading-[32px] text-left uppercase text-global-6">
                  Lorem Ipsum
                </span>
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-francois-one font-normal leading-[26px] sm:leading-[29px] md:leading-[32px] text-left uppercase text-global-1">
                  Lorem <span className="text-[#f0a259]">Ipsum</span>
                </span>
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-francois-one font-normal leading-[26px] sm:leading-[29px] md:leading-[32px] text-left uppercase text-global-6">
                  Lorem Ipsum
                </span>
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-francois-one font-normal leading-[26px] sm:leading-[29px] md:leading-[32px] text-left uppercase text-global-6">
                  Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section>
        <ServicesSection
          sectionLabel="Our Services"
          sectionTitle="What We Do"
          sectionDescription="End-to-End IT Solutions: From advisory consulting to creative design and emerging tech, Fission provides a one-stop partnership for all your digital needs."
          boxes={[
            {
              title: 'Core IT Services ',
              icon: '/images/img_code.svg',
              bgColor: 'bg-global-4',
              height: 'md:h-[300px]  h-[30%px]',
              layoutClass: 'lg:w-[36%] lg:mt-[80px]',
            },
            {
              title: 'Specialized IT Services',
              icon: '/images/img_artificial_intelligence.svg',
              bgColor: 'bg-global-3',
              textColor: 'text-white',
              height: 'md:h-[300px] h:[70px] ',
              layoutClass: 'sm:w-[350px] h-[300px]',
            },
            {
              title: 'Design & Experience Services',
              icon: '/images/img_ui_design.svg',
              bgColor: 'bg-global-8',
              height: 'lg:h-[300px] md:h-[300px] h-[100%]',
              layoutClass: 'sm:w-[350px] lg:mt-[20px] h-[350px]',
            },
          ]}
        />
      </section>

      {/* Industries We Serve Section */}
      <section className="w-full bg-global-9 relative overflow-hidden">
        <div className="max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12 md:py-16">
            {/* Title Block */}
            <div className="bg-global-4 rounded-[16px] px-5 py-1 w-fit mb-4">
              <span className="text-base sm:text-lg md:text-xl font-dm-sans font-bold uppercase text-global-2">
                Industry Expertise
              </span>
            </div>

            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 lg:gap-0">
              <h2 className="text-[40px] sm:text-[55px] md:text-[70px] font-anton uppercase text-global-1 leading-tight lg:w-1/3">
                Industries We Serve
              </h2>
              <div className="flex flex-col lg:items-end lg:w-1/2">
                <p className="text-sm sm:text-base md:text-lg text-global-4 mb-3 text-left lg:text-right">
                  We have driven innovation and solved complex challenges across a range of
                  industries.
                </p>
                <div className="flex items-center justify-end  gap-3 md:gap-5">
                  <img
                    src="/images/img_vector_gray_900.svg"
                    alt="Previous"
                    className="w-9 h-9 md:w-12 md:h-8 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                  <img
                    src="/images/img_vector.svg"
                    alt="Next"
                    className="w-9 h-9 md:w-12 md:h-8 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap  items-center gap-6 md:gap-[60px] mt-6 md:mt-10">
              {[
                {
                  img: '/images/img_rectangle_18.png',
                  title: 'Information Technology & SaaS',
                  number: '01',
                },
                {
                  img: '/images/img_rectangle_24.png',
                  title: 'Healthcare & Life Sciences',
                  number: '02',
                },
                {
                  img: '/images/img_rectangle_25.png',
                  title: 'Financial Services & FinTech',
                  number: '03',
                },
              ].map((card, index) => (
                <div key={index} className="flex flex-col items-center w-full sm:w-[300px]">
                  <div className="relative w-full max-w-[300px] aspect-square mb-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-[40px]"
                    />
                    <span className="absolute -bottom-4 -right-4 text-[60px] sm:text-[80px] md:text-[100px] font-anton font-bold text-white opacity-80 leading-none">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-anton uppercase text-global-1 text-center">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="text-sm sm:text-base md:text-lg italic text-global-4 text-center mt-6 md:mt-10 max-w-[780px] mx-auto">
              Our diverse industry expertise means we ramp up fast on your challenges and deliver
              solutions that fit your world.
            </p>
          </div>
        </div>

        {/* Side Image */}
        
      </section>

      {/* Our Approach & Process Section */}
      <section className="w-full bg-global-3 relative">
        <div className="absolute right-0 top-0 w-[104px] sm:w-[156px] md:w-[208px] h-[250px] sm:h-[375px] md:h-[500px]">
          <img
            src="/images/img_mask_group.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-[25px] sm:py-[38px] md:py-[50px]">
            <div className="flex flex-col">
              {/* Label */}
              <div className="bg-global-4 rounded-[16px] px-[20px] py-[2px] mb-[10px] md:mb-[20px] w-[132px]">
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold leading-[22px] sm:leading-[24px] md:leading-[27px] text-center uppercase text-global-2">
                  process
                </span>
              </div>

              {/* Heading + Description */}
              <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[60px] w-full mb-[24px] md:mb-[48px]">
                <div className="flex flex-col items-start w-full lg:w-auto">
                  <h2 className="text-[50px] sm:text-[65px] md:text-[80px] font-anton font-normal leading-[60px] sm:leading-[70px] md:leading-[80px] text-left uppercase text-global-8 w-full lg:w-[88%]">
                    Our Approach & Process
                  </h2>
                  <img
                    src="/images/img_vector_2.svg"
                    alt="Decorative"
                    className="w-[112px] sm:w-[168px] md:w-[224px] h-[25px] sm:h-[38px] md:h-[50px] mt-[-6px] md:mt-[-12px] ml-[45px] md:ml-[90px]"
                  />
                </div>

                <div className="w-full lg:w-[46%] lg:self-end">
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-left text-global-4 mb-[19px] md:mb-[38px]">
                    At Fission, our process is both innovative and transparent. We believe in
                    working closely with our clients at every step to ensure solutions are perfectly
                    aligned with business goals.
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="w-full max-w-[1102px]">
                {stepsData.map((step) => (
                  <div key={step.id} className="mb-[9px] md:mb-[18px]">
                    {/* Step Row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-[10px] sm:gap-0">
                      {/* Left Side for Mobile: Number + Title */}
                      <div className="flex w-full items-center justify-between sm:justify-start sm:gap-[12px] md:gap-[20px]">
                        <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[20px]">
                          <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-thin italic leading-[22px] sm:leading-[24px] md:leading-[27px] uppercase text-global-5">
                            {step.number}
                          </span>

                          <h3 className="text-[20px] sm:text-[40px] md:text-[50px] font-anton font-normal leading-[28px] sm:leading-[60px] md:leading-[76px] uppercase text-global-8 whitespace-nowrap">
                            {step.title}
                          </h3>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                          onClick={() => setOpenStep(openStep === step.id ? null : step.id)}
                          className="flex sm:hidden items-center justify-center w-[28px] h-[28px] rounded-full border border-global-10 text-global-10 hover:bg-global-10 hover:text-global-1 transition"
                        >
                          <span className="text-lg font-bold">
                            {openStep === step.id ? '−' : '+'}
                          </span>
                        </button>
                      </div>

                      {/* Desktop: Description + Toggle Button */}
                      <div className="hidden sm:flex items-start gap-[12px] md:gap-[20px] w-full sm:w-auto">
                        {/* Description for Desktop */}
                        {openStep === step.id && (
                          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-global-4 max-w-[400px] md:max-w-[500px]">
                            {step.description}
                          </p>
                        )}

                        {/* Desktop Toggle Button */}
                        <button
                          onClick={() => setOpenStep(openStep === step.id ? null : step.id)}
                          className="flex items-center justify-center w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full border border-global-10 text-global-10 hover:bg-global-10 hover:text-global-1 transition flex-shrink-0"
                        >
                          <span className="text-xl md:text-2xl font-bold">
                            {openStep === step.id ? '−' : '+'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Mobile Description */}
                    {openStep === step.id && (
                      <p className="mt-[6px] sm:hidden text-[14px] font-dm-sans font-normal leading-[20px] text-global-4 ml-8">
                        {step.description}
                      </p>
                    )}

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-global-7 mt-[8px] md:mt-[16px]"></div>
                  </div>
                ))}

                {/* CTA Button */}
                <div className="flex justify-end mt-[24px] md:mt-[48px]">
                  <Button
                    variant="outline"
                    size="medium"
                    rightImage={{
                      src: '/images/img_vector_white_a700.svg',
                      width: 30,
                      height: 30,
                    }}
                    className="border border-global-10 text-global-10 hover:bg-global-10 hover:text-global-1 px-[10px] sm:px-[35px] md:px-[50px] py-[4px] sm:py-[6px] md:py-[8px] rounded-[24px]"
                  >
                    Start a Project Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <img
            src="/images/img_mask_group.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full bg-global-9 relative">
        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12 md:py-20">
            <div className="flex flex-col items-center">
              {/* Heading */}
              <div className="flex flex-col items-start w-full mb-4 md:mb-6">
                <h2 className="text-[36px] sm:text-[50px] md:text-[80px] font-anton uppercase text-global-1 leading-[48px] sm:leading-[60px] md:leading-[80px] w-full lg:w-[64%]">
                  Success Stories & Case Studies
                </h2>
                <img
                  src="/images/img_vector_1.svg"
                  alt="Decorative underline"
                  className="w-[112px] sm:w-[168px] md:w-[224px] h-[18px] sm:h-[27px] md:h-[36px] -mt-2 md:-mt-4 ml-[60px] sm:ml-[87px]"
                />
              </div>

              {/* Main Case Study */}
              <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-10 w-full mb-8 md:mb-14">
                {/* Image with green box */}
                <div className="relative w-full lg:w-[408px] h-[250px] sm:h-[350px] lg:h-[418px]">
                  <img
                    src="/images/img_rectangle_27.png"
                    alt="Healthcare Platform"
                    className="w-full h-full object-cover rounded-[40px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[40px]" />

                  {/* Green Box at Bottom Left */}
                  <div className="absolute left-4 sm:left-6  lg:left-[-150px]  bottom-4 sm:bottom-6 bg-gradient-to-r from-white to-[#a1f480] rounded-[20px] p-3 sm:p-4 md:p-5 shadow-[4px_4px_15px_#4bc31c66] border border-transparent max-w-[90%] sm:max-w-[75%]">
                    <p className="text-[14px]  sm:text-[16px] md:text-[20px] font-anton uppercase text-global-1 leading-tight">
                      Achieved 99.99% uptime, 2x faster load times, 40% cost savings.
                    </p>
                  </div>
                </div>

                {/* Text Box on Upper Right */}
                <div className="flex flex-col gap-2 md:gap-3 w-full lg:w-[25%] mt-4 lg:mt-0">
                  <h3 className="text-[18px] sm:text-[22px] md:text-[30px] font-anton uppercase text-global-1 leading-tight">
                    Building a Scalable Healthcare Platform
                  </h3>
                  <div className="w-[14px] sm:w-[21px] md:w-[28px] h-[2px] bg-global-1" />
                  <p className="text-[14px] sm:text-[16px] md:text-[20px] font-dm-sans italic text-global-3 leading-snug">
                    <span className="font-light">How Fission's cloud expertise helped </span>
                    <span className="font-bold">
                      How Fission’s cloud expertise helped HealthCo handle 5× user growth without a
                      glitch, while improving UX.
                    </span>
                  </p>
                </div>
              </div>

              {/* Case Studies Grid */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 w-full">
                {[
                  {
                    title: 'FinTech Mobile App Development',
                    desc: 'Enabled a secure, user-friendly banking app, resulting in 1M+ downloads.',
                  },
                  {
                    title: 'E-commerce Website Overhaul',
                    desc: 'Delivered robust platform enhancing user experience and sales.',
                  },
                  {
                    title: 'AI-driven Analytics Platform for Retail',
                    desc: 'Improved customer targeting and sales forecasting in efficient way.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 md:gap-5 items-center w-full sm:w-[300px]"
                  >
                    <div className="flex flex-col gap-1 md:gap-2 items-start w-full">
                      <h4 className="text-[18px] sm:text-[22px] md:text-[30px] font-anton uppercase text-global-1">
                        {item.title}
                      </h4>
                      <div className="w-[14px] sm:w-[21px] md:w-[28px] h-[2px] bg-global-1" />
                      <p className="text-[14px] sm:text-[16px] md:text-[20px] font-dm-sans italic font-light text-global-1">
                        {item.desc}
                      </p>
                    </div>
                    <img
                      src="/images/img_rectangle_30.png"
                      alt={item.title}
                      className="w-full h-[80px] sm:h-[90px] md:h-[106px] object-cover rounded-[30px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-global-10 relative">
        <TestimonialsSection />
      </section>

      <div>
        <Banner />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
