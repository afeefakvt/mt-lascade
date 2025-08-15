import { FaQuoteLeft, FaBell, FaCalendarAlt, FaUsers, FaClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1220px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="w-full max-w-[457px]">
          <h2 className="text-[#034833] font-bold text-[28px] md:text-[46px] mb-4">
            Our Services
          </h2>
          <p className="text-[#5B5F62] text-[14px] md:text-[16px] leading-[150%] mb-8">
            "It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job!!!"
          </p>

          <div className="mt-6">
            <FaQuoteLeft className="text-[#219653] text-[20px] md:text-[28px] mb-3" />
            <p className="font-semibold text-[#034833] text-[18px] md:text-[18px]">Best on the market</p>
            <div className="flex items-center gap-3 mt-2 h-[26px] md:h-[26px] w-[318px] md:w-[417px]" >
              <img src="/src/assets/Stars.png" alt="5 stars" className="h-[20px] md:h-[20px] w-[108px] md:w-[108px]" />
              <span className="text-[12px] md:text-[12px] text-[#000000]">2 days ago</span>
            </div>
            <p className="text-[#585F62] text-[14px] md:text-[14px] mt-2 leading-[150%]">
              It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job
            </p>
            <p className="font-semibold text-[#034833] mt-3 text-[14px] md:text-[14px]">Christy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-[705px] md:h-[518px]">
          
          <div className="border bg-[#F6FFFC] border-[#034833] rounded-xl p-5 flex flex-col justify-between w-[358px] md:w-[340.5px] h-[457px] md:h-[518px]">
            <div>
              <h3 className="text-[#034833] font-bold text-[24px] md:text-[32px] mb-3">Notifications</h3>
              <p className="text-[#034833] text-[48px] md:text-[54px] font-bold">
                $99<span className="text-[18px] md:text-[20px] font-medium">/monthly</span>
              </p>
              <p className="text-[#585F62] text-[14px] md:text-[16px] mt-2">
                Best for families and travelers on a budget
              </p>

              <ul className="mt-4 space-y-3 text-[#034833] text-[12px] md:text-[14px] md:w-[300.5px] md:h-[204px] w-[318px] h-[188px]">
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px] ">
                  <FaBell className="text-[#034833]" /> 3-4 times cheaper than Schengen Visa agencies
                </li>
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px]">
                  <FaCalendarAlt className="text-[#034833]" /> You can book an appointment on the next week
                </li>
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px]">
                  <FaUsers className="text-[#034833]" /> 1 subscription for all travellers
                </li>
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px]">
                  <FaClock className="text-[#034833]" /> 1 week - average time for booking an appointment
                </li>
              </ul>
            </div>

            <button className="mt-6 bg-[#F66F4D] text-white rounded-full px-4 md:px-5 py-2.5 md:py-3 flex items-center justify-center gap-2 text-[14px] md:text-[16px] font-semibold hover:opacity-90 transition">
              GET APPOINTMENT ALERTS <IoMdArrowForward />
            </button>
          </div>

          <div className="border border-[#034833] bg-[#FFFFFF] rounded-xl p-5 flex flex-col justify-between w-[358px] md:w-[340.5px] h-[457px] md:h-[518px]">
            <div>
              <h3 className="text-[#FF9000] font-bold text-[24px] md:text-[32px] mb-3">Auto Booking</h3>
              <p className="text-[#FF9000] text-[48px] md:text-[54px] font-bold">
                $100<span className="text-[18px] md:text-[20px] font-medium text-[#5B5F62]">/per applicant</span>
              </p>
              <p className="text-[#585F62] text-[14px] md:text-[16px] mt-2">
                Best for families and travelers on a budget
              </p>

              <ul className="mt-4 space-y-3 text-[#5B5F62] text-[12px] md:text-[14px] md:w-[300.5px] md:h-[204px] w-[318px] h-[188px]">
                <li className="flex items-center gap-3">
                  <FaBell className="text-[#FFA500]" /> Suitable if you can’t respond right away to notifications
                </li>
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px]">
                  <FaCalendarAlt className="text-[#FFA500]" /> We book a slot for you, even when you sleep
                </li>
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px]">
                  <FaUsers className="text-[#FFA500]" /> You won’t have to think about booking
                </li>
                <li className="flex items-center gap-3 md:w-[300.5px] md:h-[42px] h-[38px] w-[318px]">
                  <FaClock className="text-[#F66F4D]" /> Can book a slot even for the next day
                </li>
              </ul>
            </div>

            <button className="mt-6 bg-[#F66F4D] text-white rounded-full px-4 md:px-5 py-2.5 md:py-3 flex items-center justify-center gap-2 text-[14px] md:text-[16px] font-semibold hover:opacity-90 transition">
              TRY AUTO BOOKING <IoMdArrowForward />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
