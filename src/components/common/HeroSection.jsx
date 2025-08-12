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
    <section className="w-full bg-global-2 relative">
      <Header/>
      {leftImage && (
        <img
          src={leftImage}
          alt="Background Left"
          className="absolute left-0 top-[calc(50%+76px)] md:top-[calc(40%+152px)] transform -translate-y-1/2 w-[104px] h-[250px] sm:w-[156px] sm:h-[375px] md:w-[208px] md:h-[500px] object-cover"
        />
      )}

      {rightImage && (
        <img
          src={rightImage}
          alt="Background Right"
          className="absolute right-0 top-[calc(50%+76px)] md:top-[calc(40%+152px)] transform -translate-y-1/2 w-[105px] h-[250px] sm:w-[158px] sm:h-[375px] md:w-[210px] md:h-[500px] object-cover"
        />
      )}

      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-[25px] pb-[25px] md:pt-[50px] md:pb-[50px]">
          {subtitle && (
            <p className="text-[20px] sm:text-[25px] md:text-[30px] font-dm-sans uppercase text-global-5 mb-[17px] md:mb-[20px]">
              {subtitle}
            </p>
          )}

          <h1 className="font-anton uppercase text-global-8 text-[40px] sm:text-[75px] md:text-[90px] leading-[55px] sm:leading-[83px] md:leading-[110px] max-w-[1102px] relative">
            {title}{' '}
            {underlineWord && (
              <span className="relative inline-block">
                {underlineWord}
                {underlineImage && (
                  <img
                    src={underlineImage}
                    alt="Decorative underline"
                    className="absolute left-0 top-full mt-2 w-full"
                  />
                )}
              </span>
            )}
            {description && (
              <span className="ml-4 align-top inline-flex flex-col items-start max-w-[520px] mt-8 md:mt-8 md:ml-8">
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
                    className="mt-4 bg-global-10 text-global-1 px-[20px] sm:px-[35px] md:px-[50px] py-[6px] sm:py-[8px] md:py-[10px] rounded-[22px]"
                  >
                    {buttonText}
                  </Button>
                )}
              </span>
            )}
          </h1>

          {/* Optional tagline */}
          {taglineText && (
            <div className="text-center mt-[60px] md:mt-[120px]">
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
    </section>
  );
}
