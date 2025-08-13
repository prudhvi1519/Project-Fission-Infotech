import Button from '../ui/Button';
import Header from './Header';

export default function HeroSection({
  subtitle,
  title,
  underlineWord,
  underlineImage,
  description,
  buttonText,
  buttonLink,
  leftImage,
  rightImage,
  taglineText, // new prop for the "15 years" line
  taglineHighlight, // new prop for the highlighted part (e.g., "15+ years")
}) {
  return (
    <>
     <Header />
    <section className="w-full bg-global-2 relative overflow-hidden">
      {/* Header with fade-in animation */}
      
       
      

      {/* Left image with slide-in from left */}
      {leftImage && (
        <img
          src={leftImage}
          alt="Background Left"
          className="absolute left-0 top-[calc(50%+76px)] md:top-[calc(40%+152px)] transform -translate-y-1/2 w-[104px] h-[250px] sm:w-[156px] sm:h-[375px] md:w-[208px] md:h-[500px] object-cover animate-slide-in-left opacity-0 animation-delay-500"
        />
      )}

      {/* Right image with slide-in from right */}
      {rightImage && (
        <img
          src={rightImage}
          alt="Background Right"
          className="absolute right-0 top-[calc(50%+76px)] md:top-[calc(40%+152px)] transform -translate-y-1/2 w-[105px] h-[250px] sm:w-[158px] sm:h-[375px] md:w-[210px] md:h-[500px] object-cover animate-slide-in-right opacity-0 animation-delay-500"
        />
      )}

      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-[25px] pb-[25px] md:pt-[50px] md:pb-[50px]">
          {/* Subtitle with fade-in animation */}
          {subtitle && (
            <p className="text-[20px] sm:text-[25px] md:text-[30px] font-dm-sans uppercase text-global-5 mb-[17px] md:mb-[20px] animate-fade-in-up opacity-0 animation-delay-300">
              {subtitle}
            </p>
          )}

          {/* Main title with complete animation as one unit */}
          <h1 className="font-anton uppercase text-global-8 text-[40px] sm:text-[75px] md:text-[90px] leading-[55px] sm:leading-[83px] md:leading-[110px] max-w-[1102px] relative animate-scale-in-bounce opacity-0 animation-delay-600">
            <span className="relative inline-block">
              {title}
              {underlineImage && (
                <img
                  src={underlineImage}
                  alt="Decorative underline"
                  className="absolute lg:top-[85%] left-0 w-[50%] lg:w-[20%] animate-draw-line opacity-0 animation-delay-1200"
                />
              )}

              {description && (
                <span className="align-top inline-flex flex-col items-start max-w-[520px] mt-8 md:ml-8">
                  <span className="text-[16px] sm:text-[18px] font-dm-sans font-normal leading-[1.4] text-global-4">
                    {description}
                  </span>
                  {buttonText && (
                    <Button
                      variant="primary"
                      size="medium"
                      rightImage={{
                        src: '/images/img_vector.svg',
                        width: 30,
                        height: 30,
                      }}
                      className="mt-4 bg-global-10 text-global-1 px-[20px] sm:px-[35px] md:px-[50px] py-[6px] sm:py-[8px] md:py-[10px] rounded-[22px] animate-pulse-glow hover:scale-105 transition-all duration-300"
                    >
                      {buttonText}
                    </Button>
                  )}
                </span>
              )}
            </span>
          </h1>

          {/* Tagline with fade-in animation */}
          {taglineText && (
            <div className="text-center mt-[60px] md:mt-[120px] animate-fade-in-up opacity-0 animation-delay-1500">
              <p className="text-[18px] sm:text-[21px] md:text-[24px] font-dm-sans uppercase text-white">
                <span className="font-light">Delivering excellence in</span>
                <span className="font-extrabold"> IT services </span>
                <span className="font-light">for</span>
                <span className="font-extrabold text-global-5"> 15+ years</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }

        @keyframes scaleInBounce {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawLine {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 30%;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-scale-in-bounce {
          animation: scaleInBounce 1.2s ease-out forwards;
        }

        .animate-draw-line {
          animation: drawLine 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        @media (max-width: 1024px) {
          @keyframes drawLine {
            from {
              opacity: 0;
              width: 0;
            }
            to {
              opacity: 1;
              width: 50%;
            }
          }
        }
      `}</style>
    </section>
    </>
  );
}