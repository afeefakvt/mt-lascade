import logo2 from "../assets/Logo2.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";



export default function Footer() {
  return (
    <footer className="bg-[#034833] text-white mt-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#02694A]">
        
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logo2}
              alt="Visaslots"
              className="w-[155px] h-[44px] md:w-[185px] md:h-[44px]"
            />
          </div>
          <p className="mt-4 text-[14px] md:text-[20px] leading-relaxed text-[#FFFFFF]">
            Travelo is Southeast Asia’s travel and lifestyle app, we provide you 
            with access to discover and purchase different type of travel needs.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-[16px] md:text-[24px]">Product</h3>
          <ul className="space-y-3 text-[14px] md:text-[18px] text-[#FFFFFF]">
            <li><a href="#">Visaslots</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-[16px] md:text-[24px]">Company</h3>
          <ul className="space-y-2 text-[14px] md:text-[18px] text-[#FFFFFF]">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">For Visa Agencies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-[16px] md:text-[24px]">Resources</h3>
          <ul className="space-y-2 text-[14px] md:text-[18px] text-[#FFFFFF]">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Cookie Settings</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0E6C4F] px-6 py-4">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#"><img src={facebook} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src={instagram} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src={twitter} alt="Twitter" className="w-6 h-6" /></a>
          </div>
          <div className="text-sm text-[#FFFFFF] text-center md:text-right">
            © 2025 Visaslots
          </div>
        </div>
      </div>
    </footer>
  );
}
