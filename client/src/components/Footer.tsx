export default function Footer() {
  return (
    <footer className="bg-[#01553B] text-white mt-[80px]">
      <div className="max-w-[1440px] mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#02694A]">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/src/assets/Logo2.png" alt="Visaslots" className="md:w-[185px] md:h-[44px]" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#FAF8ED]">
            Travelo is Southeast Asia’s travel and lifestyle app, we provide you 
            with access to discover and purchase different type of travel needs.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#"><img src="/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[16px]">Product</h3>
          <ul className="space-y-2 text-sm text-[#FAF8ED]">
            <li><a href="#">Visaslots</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[16px]">Company</h3>
          <ul className="space-y-2 text-sm text-[#FAF8ED]">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">For Visa Agencies</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[16px]">Resources</h3>
          <ul className="space-y-2 text-sm text-[#FAF8ED]">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Cookie Settings</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#02694A] text-center py-4 text-sm text-[#FAF8ED]">
        © 2025 Visaslots
      </div>
    </footer>
  );
}
