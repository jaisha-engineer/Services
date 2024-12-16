import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../../assets/bgImage.webp'
import rcmIcon from '../../assets/rcm-icon.svg'
import credtIcon from '../../assets/credentialing-icon.svg'
import codingIcon from '../../assets/medical-coding-icon.svg'
import denIcon from '../../assets/denial-management-icon.svg'
import audIcon from '../../assets/medical-audit-icon.svg'
import bilIcon from "../../assets/medical-billing-icon.svg";

const services = [
  {
    title: "Revenue Cycle Management",
    description:
      "Integrate our scalable revenue cycle management solutions to optimize your cash flow and shorten the payment.",
    icon: rcmIcon,
  },
  {
    title: "Medical Credentialing",
    description:
      "Successful medical credentialing is one of the significant reasons BiINow stands out from its competitors.",
    icon: credtIcon,
  },
  {
    title: "Medical Coding",
    description:
      "Are you trying to achieve no revenue leakage, compliance issues, and timely reimbursements?",
    icon: codingIcon,
  },
  {
    title: "Denial Management",
    description:
      "Are partial or underpayments causing financial burdens on your healthcare practice? Don’t lose hope.",
    icon: denIcon,
  },
  {
    title: "Medical Billing Audit",
    description:
      "Are you facing financial challenges despite sending claims to payers? If so, you’re not alone.",
    icon: audIcon,
  },
  {
    title: "Medical Billing Services",
    description:
      "Are you behind your revenue targets? Fret Not! You’re in the right place. Our medical billing services ensure the highest returns.",
    icon: bilIcon,
  },
];

const Services = () => {
  return (
    <div className="mt-[67px]">
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 h-[50vh] sm:h-[60vh] lg:h-[70vh]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Title */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[55px] lg:text-[56px] text-white text-center font-bold">
          Our Services
        </h1>

        {/* Description */}
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
          At BilNow, we specialize in comprehensive medical billing services designed to <br></br> optimize revenue cycles and enhance financial performance for healthcare <br></br>providers. Our expert team ensures accurate claims submission, timely follow- <br></br>ups, and efficient coding, allowing you to focus on patient care while we<br></br> handle the complexities of billing.
        </p>

        {/* Button */}
        <button
          className="mt-6 rounded-md bg-[#1DBFCC] px-6 py-3 text-white text-[14px] sm:text-[16px] md:text-[15px] hover:bg-[#FFC567] hover:text-black transition-all duration-300"
        >
          Schedule A Free Demo
        </button>
      </div>

      {/* Services Section */}

      <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-12">
  <h2 className="text-[28px] sm:text-[32px] md:text-[38px] text-[#002345] font-bold text-center mb-6">
    Our Services
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        className="group bg-white rounded-lg shadow-md p-6 flex flex-col justify-between relative overflow-hidden transition duration-300"
        style={{ width: '1000px', maxWidth: '100%' }}
      >
       
        <div className="absolute inset-0 bg-[#1DBFCC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></div>

        {/* Service Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-start mb-3">
            <div className="text-4xl ml-4">
              <img src={service.icon} className="w-full h-full" alt="Service Icon" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] lg:text-[22px] font-normal ml-8 leading-tight text-black flex-1">
              {service.title}
            </h3>
          </div>
          <p className="text-[16px] sm:text-[18px] text-[#091E29] mb-3 ml-[95px] leading-tight">
            {service.description}
          </p>
        </div>

        
        <div className="flex justify-end mt-2 relative z-20"> 
          <div className="group bg-[#1DBFCC] mt-[20px] text-black p-4 ml-9 flex items-center justify-center w-12 h-12 rounded-md transition duration-300 group-hover:bg-[#002345]">
            <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black group-hover:text-white" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



         </div>
  );
};

export default Services;
