// Layouts
import DefaultLayout from "../../../layouts/default";

// Sections
import CartOnlineSection from "../../../sections/landing/CartonlineSection";
import TicketSection from "../../../sections/landing/TicketSection";
import BestResultSection from "../../../sections/landing/BestResultSection";
import ModernSystemSection from "../../../sections/landing/ModernSystemSection";
import PricingSection from "../../../sections/landing/PricingSection";
import FaqSection from "../../../sections/landing/FaqSection";
import PartnerSection from "../../../sections/landing/PartnersSection";
import HeroSection from "../../../sections/landing/HeroSection";

function LandingScreen() {

  return (
    <div className="App">
      <DefaultLayout>
        {/* <!-- Hero section --> */}
        <HeroSection/>

        {/* <!-- Cart section --> */}
        <CartOnlineSection/>

        {/* <!-- Best Result section --> */}
        <BestResultSection/>

        {/* <!-- Ticket section --> */}
        <TicketSection/>

        {/* <!-- Modern System section --> */}
        <ModernSystemSection/>
        
        {/* <!-- Pricing section --> */}
        <PricingSection/>

        {/* <!-- FAQ section --> */}
        <FaqSection/>

        {/* <!-- Partners section --> */}
        <PartnerSection/>

        <div className="w-full my-10 flex justify-center">
          <a
            data-aos="flip-down"
            data-aos-delay="150"
            href="#"
            className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
          >
            <span>Ir al Inicio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        
      </DefaultLayout>
    </div>
  );
}

export default LandingScreen;