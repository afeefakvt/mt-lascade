import { IoMdArrowForward } from "react-icons/io";


import mockupImage from '/src/assets/Mockup.png';
export default function StatsSection() {
  return (
    <section className="bg-[#034833] py-10 sm:py-14 md:py-20">
      <div
        className="
          w-full max-w-[1440px] mx-auto px-4 
          grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center
        "
      >
        <div className="flex justify-center">
          <img
            src={mockupImage}
            alt="Phone Mockup"
            className="
              w-full max-w-[280px] sm:max-w-[380px] md:max-w-[500px] lg:max-w-[561px]
              h-auto drop-shadow-xl
            "
          />
        </div>

        <div className="text-white text-center lg:text-left">
          <h2
            className="
              font-bold text-[26px] sm:text-[32px] md:text-[46px] leading-tight
            "
          >
            Get your appointment
          </h2>
          <p
            className="
              mt-3 text-[14px] sm:text-[16px] md:text-[18px] 
              text-[#FFFFFF] leading-[150%] max-w-[480px] mx-auto lg:mx-0
            "
          >
            Get instant email or push notifications when new appointments open
            up or get a slot auto-booked for you.
          </p>

          <button
            className="
              mt-6 bg-[#F66F4D] rounded-full px-5 py-3 flex items-center justify-center gap-2
              font-semibold text-[14px] sm:text-[15px] md:text-[16px]
              hover:opacity-90 transition mx-auto lg:mx-0
            "
          >
            TRY VISABOT <IoMdArrowForward />
          </button>

          <div
            className="
              mt-10 grid grid-cols-2 gap-4 max-w-[420px] mx-auto lg:mx-0
            "
          >
            {[
              { value: "1,500+", label: "Routes" },
              { value: "50+", label: "Cities" },
              { value: "50+", label: "Premium Airlines" },
              { value: "12k+", label: "Happy Customers" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FAF8ED] rounded-xl text-center py-5 sm:py-6"
              >
                <p className="text-[#034833] font-bold text-[28px] sm:text-[32px] md:text-[38px]">
                  {item.value}
                </p>

                <span className="text-[#5B5F62] text-[14px] sm:text-[16px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




  
        {/* Left - Phone & Icons */}
        {/* <div className="relative flex justify-center w-[358px] h-[392px] md:w-[561px] md:h-[538px]">
            <img 
            src={bgImage} 
            alt="Background Shape" 
            className="absolute inset-0 md:w-[441px] md:h-[441px] object-contain md:object-cover"
          />
          <img 
            src={phoneImage} 
            alt="Phone" 
            className="w-[189.29px] h-[384.16px] md:w-[296.62px] md:h-[602px] rotate-[-8deg] drop-shadow-xl"
          />
          <img 
            src={smileyIcon} 
            alt="Smiley" 
            className="absolute top-[35%] left-[11%] w-[40.05px] h-[40.05px] md:w-[62.77px] md:h-[62.77px]"
          />
          <img 
            src={bagIcon} 
            alt="Bag" 
            className="absolute bottom-[12%] left-[15%] w-[50px] h-[] md:w-[117.75px] md:h-[103.33px]"
          />
          <img 
            src={bellIcon} 
            alt="Bell" 
            className="absolute top-[25%] right-[15%] w-[40px] h-[] md:w-[78.26px] md:h-[78.26px]"
          />
          <img 
            src={settingsIcon} 
            alt="Settings" 
            className="absolute bottom-[18%] right-[10%] w-[50px] md:w-[86.92px] md:h-[86.2px]"
          />
        </div> */}
