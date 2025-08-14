import heroImg from "../assets/Hero Section.png";
export default function HeroSection() {
  return (
    <section className=" py-12 pt-[171.5px]">
      <div className="max-w-[1220px] mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-20 px-4">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Tag */}
          <div className="inline-flex items-center bg-[#FFECE0] text-orange-500 px-4 py-2 rounded-full text-sm font-bold text-[12.5px] md:text-[20px] mb-6">
            ✨ AI-Powered • Instant Results
          </div>

          {/* Heading */}
          <h1 className="text-[32px] md:text-[54px] font-bold font-weight-700 leading-tight text-[#034833]">
            Book a Schengen Visa Appointment in{" "}
            <span className="text-[#F66F4D]">1 week</span>
          </h1>

          {/* Subtext */}
          <p className="font-weight-400 font-inter text-[#585F62] text-[12px] md:text-[18px]">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>

          {/* Form */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-[8px] md:gap-[10px] justify-center">
            <input
              type="text"
              placeholder="Going to"
              className="
             bg-white shadow-sm outline-none text-gray-500 font-medium
              rounded-[23.78px] px-[16.27px] py-[12.52px] w-[213px] h-[52px] text-[14px] leading-[150%]
              md:rounded-[38px] md:px-[26px] md:py-[20px] md:w-[340px] md:h-auto md:text-[16px]
            "
            />
            <select
              className="
             bg-white shadow-sm outline-none text-gray-500 font-medium
             rounded-[23.78px] px-[16.27px] py-[12.52px] w-[135px] h-[52px] text-[14px] leading-[150%]
             md:rounded-[38px] md:px-[26px] md:py-[20px] md:w-[216px] md:h-auto md:text-[16px]
            "
            >
              {/* <option>Visa type</option> */}
            </select>
            <input
              type="text"
              placeholder="Select an application"
              className="
             bg-white shadow-sm outline-none text-gray-500 font-medium
            rounded-[23.78px] px-[16.27px] py-[12.52px] w-[174px] h-[52px] text-[14px] leading-[150%]
            md:rounded-[38px] md:px-[26px] md:py-[20px] md:w-[278px] md:h-auto md:text-[16px]
            "
            />
             <input
            type="text"
            placeholder="Select application city"
            className="
             bg-white shadow-sm outline-none text-gray-500 font-medium
            rounded-[23.78px] px-[16.27px] py-[12.52px] w-[174px] h-[52px] text-[14px] leading-[150%]
             md:rounded-[38px] md:px-[26px] md:py-[20px] md:w-[278px] md:h-auto md:text-[16px]
            "
            />
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#F66F4D] text-white px-10 py-4 md:w-[572px] w-[358px] rounded-full text-lg font-semibold shadow hover:opacity-90 transition">
            Find Appointments
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Yellow Circle */}
          <div className="absolute w-[358px] h-[358px] md:w-[607px] md:h-[607px] bg-[#f7e9c9] rounded-full top-0 left-0 -z-10"></div>
          {/* Main Image */}
          <img
            src={heroImg}
            alt="Happy travelers"
            className="w-[358px] h-[358px] md:w-[607px] md:h-[607px] object-cover relative"
          />
        </div>
      </div>
    </section>
  );
}
