import React, { useState, useEffect } from 'react';
import Medical from '../../assets/Medical.webp';

import Council from '../../assets/Council.jpg';
import Certified from '../../assets/Certified.png';
import CPC from '../../assets/CPC.png';
import PartIcon from '../../assets/partner-hipaa.svg';
import CCMA from '../../assets/CCMA.jpg';
import CCA from '../../assets/CCA.png';
import Payer from '../../assets/Payer.webp';
import Revalidation from '../../assets/Revalidation.webp';
import Registration from '../../assets/Registration.webp';
import Trusted from '../../assets/Trusted.webp';
import Multi from '../../assets/Multi.webp';
import { FaCheck}from 'react-icons/fa';
import { Shield,User, Users, ClipboardCheck, LayoutGrid,  ChromeIcon as Browser } from 'lucide-react'
import {Target, FileX, TrendingUp, } from 'lucide-react'



// Function to animate the percentage values
const animateValue = (start, end, duration, callback) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    callback(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Section  2

const MetricCard = ({ icon: Icon, percentage, label }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    animateValue(0, percentage, 2000, (value) => setCurrentValue(value));
  }, [percentage]);

  return (
    <div className="flex flex-col items-center mt-[40px]">
      <div className="bg-[#E6F7F7] p-4 rounded-full mb-3">
        <Icon className="w-12 h-12 text-[#4CC3C3]" />
      </div>

      <div className="text-4xl font-semibold text-[32px] mb-2">
        {currentValue}%
      </div>

      <div className="text-black text-[19px]">{label}</div>
    </div>
  );
};

// CounterSection Component
const MetricsSection = () => {
  const metrics = [
    { icon: Target, percentage: 99, label: 'First Pass Rate' },
    { icon: FileX, percentage: 98, label: 'Accuracy' },
    { icon: TrendingUp, percentage: 25, label: 'Cost Reduction' },
    { icon: Shield, percentage: 30, label: 'Revenue Increase' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center flex-wrap">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center mb-8 md:mb-0">
          <MetricCard {...metric} />
          {index < metrics.length - 1 && (
            <div className="h-20 w-1 bg-[#FFB840] mx-12 hidden md:block" />
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
};
    
    // Section 1

const Medicals = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 h-[70vh] sm:h-[80vh] lg:h-[90vh]" 
        style={{
          backgroundImage: `url(${Medical})`,
        }}
      >
        <p className="text-[40px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-white text-center font-semi-bold">
        Medical Credentialing <br></br> Services
        </p>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
        Successful medical credentialing is one of the significant reasons BilNow <br></br> stands out from its competitors. Our comprehensive medical credentialing <br></br> services include handling all requirements, applications, and requested items.<br></br> We stick to the process until providers or clinicians are enrolled and receive an<br></br> effective date, approval letters, contracts, and fee schedules.
        </p>

        
        <button className="mt-6 rounded-md bg-[#1DBFCC] px-6 py-3 text-white text-[14px] sm:text-[16px] md:text-[15px] hover:bg-[#FFC567] hover:text-black transition-all duration-300">
          Schedule A Free Demo
        </button>
      </div>

      {/* Metrics Section */}
      <MetricsSection />
    </div>
  );
};

// Section 8
export const CredentialingProcess = () => {
  const steps = [
    {
        icon: <User size={26} />,
        title: "Gathering Essentials",
        description: "First, our credentialing specialists conduct an in-depth survey that includes comprehensive interviews with providers, gathering data such as professional background, educational history, license numbers, and demographics."
      },

      {
        icon: <LayoutGrid size={26} />,
        title: "Choosing the Payers",
        description: "We guide healthcare providers through the process of choosing insurance companies that perfectly align with their license type and, more importantly, practice goals. Then, we will find the insurance partners based on practice locations."
      },

      {
        icon: <ClipboardCheck size={26} />,
        title: "Quick Approval",
        description: "Our provider credentialing professionals take proactive measures to speed up the process. Our team communicates with payers weekly, pushing for the rapid processing and endorsement of your credentialing applications."
      },
      {
        icon: <Users size={26} />,
        title: "In-Network Enrollment",
        description: "We manage closed panel challenges and use appeals to ensure your participation. Proper credentialing allows direct billing and in-network providers to receive preferred rates."
      },

      {
        icon: <Browser size={26} />,
        title: "Ongoing Monitoring",
        description: "Our ongoing monitoring ensures that your company's credentials are current. Our professionals watch their expiration dates to keep your credentials active and undertake daily and weekly reviews."
      },

      {
        icon: <Shield size={26} />,
        title: "Compliance With Regulatory Authority",
        description:"Our ongoing monitoring ensures that your company's credentials are current. Our professionals watch their expiration dates to keep your credentials active and undertake daily and weekly reviews."
      }
  ];

  return (
    <section className="bg-[#EDF3F6] bg-[url('/src/assets/cardiology-arc
    
    (2).svg')] bg-cover bg-center bg-no-repeat py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-9">
        <h1 className="text-4xl font-bold text-[#002345] text-center text-[40px] mb-6">
        Explore Our Credentialing Process
        </h1>
        <p className="text-lg text-[#000000] text-center text-[18px] pt-6">
        With a validated and certified process, we have achieved up to a 98% success rate of getting providers approved in <br></br>premium payer networks with maximum privileges in their specific specialties. The process typically includes  <br></br> following steps:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-md flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
            >
             
              <div className="absolute top-0 left-0 w-full h-full bg-[#002345] transform -translate-y-full group-hover:translate-y-0 group-hover:h-full transition-all duration-300 ease-in-out z-10"></div>
              <div className="relative z-20">
             
                <div className="bg-[#E6F7F7] w-20 h-20 mr-[45px] flex items-center justify-center rounded-full mb-4 text-[#4CC3C3] group-hover:text-[#4CC3C3] transition-all duration-300">
                
                  <div className="text-[#4CC3C3] group-hover:text-[#4CC3C3]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4d4b4b] mb-2 group-hover:text-white transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-[#7A7A7A] text-[18px] group-hover:text-white transition-all duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

              


// Main Page Component
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Medicals/>
          
 {/* Section 3 */}
      {/* Certification Section */}
      <section className="mt-15 space-y-8 py-12">
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <section className="space-y-8">
      <h1 className="text-[28px] sm:text-3xl lg:text-5xl text-[#002345] font-bold">
        Comply With Complicated CMS Initiatives
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-[#000000] font-normal leading-relaxed">
        Juggling between providing patient care and handling the
        complications of ever-evolving billing regulations? You won't
        have to worry about it. <br />
        BilNow is here to take the pain out of the medical billing process.
        Whether it is the No-Surprises Act, Cures Act, or MIPS reporting,
        <br />
        we are capable of managing the complications while ensuring claims
        management as per industry standards.
      </p>
    </section>
    <div className="w-full h-[2px] bg-[#FFC567] mt-7"></div>
  </main>

  <h2 className="text-2xl sm:text-3xl font-medium text-[#003245] mb-8 text-center sm:text-left sm:ml-8 lg:ml-[140px]">
    Certified Medical Billing
  </h2>
  <div className="pb-10 ml-[100px] w-3/4 grid grid-cols-2 gap-[40px]sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center px-4 sm:px-8 lg:px-0">
    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
      <img src={Council} alt="Council Certification" className="w-full h-full object-contain" />
    </div>
    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
      <img src={Certified} alt="Certified Certification" className="w-full h-full object-contain" />
    </div>
    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
      <img src={CCA} alt="Certified Certification" className="w-full h-full object-contain" />
    </div>
    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
      <img src={CCMA} alt="CCMA Certification" className="w-full h-full object-contain" />
    </div>
    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
      <img src={PartIcon} alt="Certified Certification" className="w-full h-full object-contain" />
    </div>
    <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
      <img src={CPC} alt="CPC Certification" className="w-full h-full object-contain" />
    </div>
  </div>
</section>
  

          {/* Section 4 */}
      <section className="bg-[#EDF3F6] pb-[40px] pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-4xl font-bold ml-9 text-[45px] leading-tight mb-4 text-[#002345]">
        Payer Contracting
        </h1>
        <p className="text-[#7A7A7A] ml-9 text-[18px] mb-6">
        Negotiating with insurance companies can be frustrating and time-consuming. However, our reliable medical credentialing company strategically engages with insurers to negotiate contracts, which define the terms and conditions of the provider-payer relationship. Our team makes every possible effort to improve contracted rates, dispute resolution processes and maximize reimbursement opportunities for your practice. Let us handle your medical billing and credentialing services, as we don’t let the providers settle for less and get the payments they deserve.  
        </p>
      </div>
      <div className='ml-12'>
        <img
          src={Payer}
        />
      </div>
    </section>

             {/* Section 5                 */}
    <section className="bg-[#001F3F] text-white py-16 px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 animate-slide-left"
        >
          <img
            src={Revalidation} 
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
          <p className="text-[70px] text-[#E6E6E6] md:text-[45px] font-bold mb-6">
          Revalidation & Re-Credentialing
          </p>
          <p className="mb-6 text-[#FFFFFF] text-[20px] text-lg leading-relaxed">
          Maintaining current and compliant credentials is vital to your practice’s success and operational continuity. As part of our medical credentialing services, we manage physician’s revalidating and re-credentialing enrollment process and credentialing status with Medicare, Medicaid, and commercial insurers. Experts at BilNow regularly review and update your credentialing status to prevent disruptions or insurance denials.
          </p>
          <p className="mb-6 text-lg text-[20px] leading-relaxed">
          With proper counseling, we help medical practitioners deliver quality care, attract patients, maintain compliance, and, more importantly, build a loyal patient base. This is very important for any healthcare practice to grow. Our payer enrollment credentialing services are available but not limited to:.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Physicians
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
       Hospitals
        </p>
      </li>
      
      </ul>
          <button
            className="mt-6 rounded-md bg-[#1DBFCC] px-6 py-3 text-white text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#FFC567] hover:text-black transition-all duration-300"
          >
            Schedule A Free Demo
          </button>
        </div>
      </div>
    </section>
{/*                      
                     Section 6 */}
    <section
  className="bg-[#EDF3F6] pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
  style={{
    backgroundImage: `url(<svg xmlns="http://www.w3.org/2000/svg" width="727" height="823" viewBox="0 0 727 823" fill="none"><path d="M27.4674 809.267C27.4674 809.267 384.114 895.234 575.649 552.513C575.649 552.513 467.357 871.705 100.044 878.75L27.4674 809.267Z" fill="#1DBFCC" fill-opacity="0.15"></path><path d="M556.947 186.161C576.927 206.823 590.019 241.323 600.744 267.243C628.337 333.697 641.152 406.211 636.097 478.026C626.528 612.094 556.716 737.71 451.293 819.345C414.296 848.025 373.524 871.687 330.494 890.195C291.892 906.839 251.636 918.574 211.144 929.424C209.38 929.896 207.768 929.922 207.768 929.922C207.087 929.901 206.801 929.842 206.818 929.905C206.668 930.352 245.74 941.156 245.74 941.156C288.533 952.996 309.852 959.005 310.2 959.047C314.143 960.158 318.149 961.253 322.091 962.365C325.668 963.371 335.318 958.075 338.588 956.928C353.724 951.45 368.48 945.057 382.941 938.066C431.514 914.549 476.685 883.882 516.342 847.24C631.998 740.573 701.386 579.366 672.706 421.198C657.455 337.074 616.968 248.194 556.913 186.034L556.947 186.161Z" fill="#1DBFCC" fill-opacity="0.15"></path><path d="M385.122 46.3449C385.524 43.0578 414.809 43.9369 425.15 44.2098C570.76 48.3494 690.719 155.684 753.241 281.114C826.731 428.565 815.535 602.09 727.152 740.425C668.478 832.311 578.909 915.295 476.85 955.696C458.958 962.79 440.567 968.53 421.804 972.881C438.066 968.524 462.28 949.725 475.75 939.487C490.861 928.064 505.618 915.317 520.691 903.499C554.508 876.919 587.334 848.913 616.569 817.337C659.045 771.391 761.87 615.861 729.255 419.51C700.899 249.143 587.648 144.407 544.693 115.197C507.856 90.1642 474.722 76.1794 474.722 76.1794C426.139 55.7146 384.611 50.7431 385.139 46.408L385.122 46.3449Z" fill="#1DBFCC" fill-opacity="0.15"></path></svg>)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
  }}
>
  <div className="flex mt-9 flex-col ml-7 justify-center">
    <h1 className="text-4xl font-bold text-[40px] leading-tight mb-6 text-[#002345]">
      Provider Registrations & Dedicated Support
    </h1>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
      We handle all essential registrations required to run a successful medical
      practice while assigning a dedicated specialist for your project. This
      personalized approach leaves zero to little room for errors and confusion,
      eventually helping you to stay in the competition and seize more
      opportunities for financial growth and stability.
    </p>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
      So, whether it’s creating and maintaining your Council for Affordable
      Quality Healthcare (CAQH) profile or Medicare Provider Enrollment, Chain,
      and Ownership System, our medical credentialing services cover every
      aspect. We take care of the following registrations:
    </p>
    <ul className="space-y-4 mt-2">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">NPI Registration: Type I & II</p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">CAQH Profile: Setup & maintenance</p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
          PECOS Portal: Medicare enrollment management
        </p>
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center">
    <img src={Registration} className="w-90 h-90" />
  </div>
</section>



                              {/* Section 7 */}

<section className=" pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className='ml-12'>
        <img
          src={Trusted}
        />
      </div>
      <div className='pt-[30px]'>
        <h1 className="text-4xl font-bold text-[50px] leading-tight mb-4 text-[#002345]">
        Your Trusted Partner in Compliance
        </h1>
        <p className="text-[#7A7A7A]  text-[18px] mb-12">
        As your go-to medical credentialing company, we’re here to take the load off. Our physician credentialing services cover every angle. Imagine having all your paperwork, follow-ups, and updates handled by experts & seamlessly connect you with the healthcare world and ensure every credential meets the proper criteria for success. Outsourcing your medical and insurance credentialing services isn’t just about staying compliant—advancing your practice, enhancing patient trust, and unlocking new opportunities in a highly competitive market.
        </p>
      </div>
    </section>


        

    <CredentialingProcess />

      {/* Section 9 */}
    <section className="bg-[#FFFFFF] text-black py-16 px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
     
        <div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 animate-slide-left"
        >
          <img
            src={Multi}
            alt="Multi Support System"
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
           <p className='text-[#001F3F] text-[18px] font-bold'>Make a Schedule</p>
          <h1 className="text-4xl text-[#121212] md:text-3xl font-bold mb-6">
          Compliance With Regulatory Authority
          </h1>
          <p className="mb-6 text-[#696969] text-[20px] text-lg leading-relaxed">
          Our physician credentialing services ensure adherence to NCQA and DHFS guidelines, keeping your practice compliant. Our billing and credentialing services are designed to meet all regulatory requirements, providing peace of mind that your practice operates within the legal framework and maintains the highest standards of care.
          </p>
         
      
          <button
            className="mt-6 rounded-md bg-[#1DBFCC] px-6 py-3 text-white text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#FFC567] hover:text-[#001f3f] transition-all duration-300"
          >
            Schedule A Free Demo
          </button>
        </div>
      </div>
    </section>
 </div>
    
  );
}
