import heroImg from "../assets/Hero Section.png";

export default function HeroSection() {
  return (
    <section className="py-12 pt-[171.5px]">
      <div className="max-w-[1220px] mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-20 px-4">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center bg-[#FFECE0] text-orange-500 px-4 py-2 rounded-full text-[12.5px] md:text-[20px] font-bold mb-6">
            ✨ AI-Powered • Instant Results
          </div>

          <h1 className="text-[32px] md:text-[54px] font-bold leading-tight text-[#034833]">
            Book a Schengen Visa Appointment in{" "}
            <span className="text-[#F66F4D]">1 week</span>
          </h1>

          <p className="text-[#585F62] font-inter text-[12px] md:text-[18px] font-normal">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>


          <div className="mt-8 grid grid-cols-2 gap-[8px] md:gap-[16px] w-full max-w-[700px] mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Going to"
              className="bg-white shadow-sm outline-none text-gray-500 placeholder-gray-500 font-medium
      rounded-full px-[16px] py-[12px] w-full text-[14px]
      md:px-[26px] md:py-[20px] md:text-[16px]"
            />
            <select
              className="bg-white shadow-sm outline-none text-gray-500 placeholder-gray-500 font-medium
      rounded-full px-[16px] py-[12px] w-full text-[14px] appearance-none
      md:px-[26px] md:py-[20px] md:text-[16px]"
            >
              <option value="">Visa type</option>
            </select>
            <input
              type="text"
              placeholder="Select an application"
              className="bg-white shadow-sm outline-none text-gray-500 placeholder-gray-500 font-medium
      rounded-full px-[16px] py-[12px] w-full text-[14px]
      md:px-[26px] md:py-[20px] md:text-[16px]"
            />
            <input
              type="text"
              placeholder="Select application city"
              className="bg-white shadow-sm outline-none text-gray-500 placeholder-gray-500 font-medium
      rounded-full px-[16px] py-[12px] w-full text-[14px]
      md:px-[26px] md:py-[20px] md:text-[16px]"
            />
          </div>

          <button className="mt-8 bg-[#F66F4D] text-white px-10 py-4 w-full sm:w-auto md:w-[572px] rounded-full text-lg font-semibold shadow hover:opacity-90 transition">
            Find Appointments
          </button>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute w-full max-w-[650px] aspect-square rounded-full -z-10"></div>
          <img
            src={heroImg}
            alt="Happy travelers"
            className="w-full max-w-[650px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
