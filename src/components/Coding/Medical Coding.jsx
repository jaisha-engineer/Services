import React, { useState, useEffect } from 'react';
import coding from '../../assets/coding.png';
import Council from '../../assets/Council.jpg';
import Certified from '../../assets/Certified.png';
import CPC from '../../assets/CPC.png';
import PartIcon from '../../assets/partner-hipaa.svg'
import CCMA from '../../assets/CCMA.jpg';
import CCA from '../../assets/CCA.png';
import Practice from '../../assets/Practice.webp';
import Personalized from '../../assets/Personalized.webp';
import Choose from '../../assets/Choose.webp';
import Service from '../../assets/Service.webp';
import Multi from '../../assets/Multi.webp';
import { FaCheck}from 'react-icons/fa';
import { FileText, ClipboardList, Code, CheckCircle, FileCheck, Send } from 'lucide-react';
import {Target, FileX, TrendingUp, Shield,  ChromeIcon as Browser } from 'lucide-react'




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

const Coding= () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 h-[70vh] sm:h-[80vh] lg:h-[90vh]" 
        style={{
          backgroundImage: `url(${coding})`,
        }}
      >
        <p className="text-[40px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-white text-center font-semi-bold">
        Best Medical Coding <br></br> Solutions
        </p>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
        Are you trying to achieve no revenue leakage, compliance issues, and timely <br></br>reimbursements? Our highly trained and certified medical coders have a <br></br>proven track record and extensive coding knowledge of multiple healthcare <br></br> specialties, ensuring the accurate diagnosis and procedure codes to prepare <br></br> and file clean medical claims.
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
        icon: <FileText size={26} />,
        title: "Retrieving Information",
        description:"Gathering essential data, including medical documentation, physicians' records, and patient demographic sheets, to initiate the coding process. Clinical coders encode medical charts into numerical and letter-coded data string sequences."
      },

      {
        icon: <ClipboardList size={26} />,
        title: "Entering Key Details",
        description:"After assigning the right codes, experts input other crucial information, such as the place of service, physician's name, and applicable price modifiers, into the system for comprehensive coding."

      },

      {
        icon: <Code size={26} />,
        title: "Assigning Relevant Codes",
        description: "Precision in the coding process involves assigning the appropriate codes, that is, compliance with applicable regulatory bodies such as CPT, HCPCS, ICD, DRG codes, HCC, and modifiers, ensuring accuracy."
      },
      {
        icon: <CheckCircle size={26} />,
        title:"Code Validation",
        description: "Before finalizing, the codes undergo validation against payer-specific policies and medical necessity guidelines to ensure they align with insurance requirements and minimize the risk of claim rejections."
      },

      {
        icon: <FileCheck size={26} />,
        title: "Auditing",
        description: "Thoroughly review the assigned codes and conduct multiple rounds of audits to identify potential up-coding or down-coding errors, ensuring the integrity of the coding process."
      },

      {
        icon: <Send size={26} />,
        title: "Claims Submission",
        description:"Medical billers use these codes and other relevant information to prepare and submit error-free medical claims to the insurance payers in a given time frame. This eventually avoids claims rejections or underpayments"
      }
  ];

  return (
    <section className="bg-[#EDF3F6] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-9">
        <h1 className="text-4xl font-bold text-[#002345] text-center text-[40px] mb-6">
        Medical Coding Process
        </h1>
        <p className="text-lg text-[#000000] text-center text-[18px] mb-12">
        Our medical coding process involves 06 critical steps:
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
      <Coding/>
          
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
        Don't Let Incorrect Medical Coding Impact Your Practice
        </h1>
        <p className="text-[#7A7A7A] ml-9 text-[18px] mb-6">
        Did you know the healthcare industry has become more vulnerable to fraud? Therefore, eliminating medical abuse has become a top priority for every healthcare practice. Specific medical coding errors, such as upcoding and unbundling, sometimes result in financial loss and compliance issues as well. Partnering with trusted medical coding firms like BilNow can help you stop losing millions of dollars annually due to incorrect medical codes. We employ dedicated coders to your practice as per your needs, resulting in higher billing collections, financial well-being, and overall sustainability.
        </p>
      </div>
      <div className='ml-12'>
        <img
          src={Practice}
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
            src={Personalized} 
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
          <p className="text-[70px] text-[#E6E6E6] md:text-[45px] font-bold mb-6">
          Personalized Medical Coding Service
          </p>
          <p className="mb-6 text-[#FFFFFF] text-[20px] text-lg leading-relaxed">
          nlike standard medical billing companies, we don’t provide one-size-fits-all solutions. We provide 100% customized medical billing and coding services because we understand that the coding needs of every medical specialty are different. Whether you run a dermatology, internal medicine, nephrology, or any other medical specialty, we’ve dedicated coding experts for every medical domain. We don’t compromise on the quality of our services, so we hand over your practice to knowledgeable coders and auditors to eliminate potential risks.<br></br>
          So, we’ve got you covered whether you’re managing revenue cycle management for an individual practice or specialty. You don’t need to juggle multiple medical coding and billing companies; BilNow is here to take the burden off your shoulders and provide bespoke solutions to help you get the maximum out of your billing system.
          </p>
            <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Pecialty-Specific Expertise
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Bespoke Billing Approach
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
    <section className="bg-[#EDF3F6] pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex mt-9 flex-col ml-7 justify-center">
    <h1 className="text-4xl font-bold text-[40px] leading-tight mb-6 text-[#002345]">
    Why Choose BilNow?
    </h1>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    Our medical coding services strictly adhere to coding guidelines and industry regulations. Using accurate and updated medical codes, we help healthcare providers get the maximum reimbursements in the minimum time and mitigate the risk of penalties and legal complications. Medical coding outsourcing can help you maintain a reputation for ethical practices. 
    </p>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    Further, our medical coding solutions integrate with existing EHR and billing systems using advanced algorithms. Real-time edits and audits ensure precision, while customizable reporting offers valuable insights. Trust Bilnow for optimized billing and coding services, improved revenue cycles, and enhanced patient care.
    </p>
    <ul className="space-y-4 mt-2">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Reduce administrative burden.
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Minimize claim rejections and delays in reimbursements.
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Access to industry experts.
        </p>
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center">
    <img src={Choose}  className="w-90 h-90 " />
  </div>
</section>

                              {/* Section 7 */}

<section className=" pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className='ml-12'>
        <img
          src={Service}
        />
      </div>
      <div className='pt-[30px]'>
        <h1 className="text-4xl font-bold text-[50px] leading-tight mb-4 text-[#002345]">
        More Than Just Medical Coding Service
        </h1>
        <p className="text-[#7A7A7A]  text-[18px] mb-12">
        Our medical coding services go beyond basic coding. We provide a complete suite of revenue cycle management services, including medical billing, coding audits, and medical credentialing. With deep industry knowledge and a commitment to quality, we deliver accuracy, compliance, and faster claim processing, helping you maximize reimbursements while reducing administrative burdens. Partner with BilNow and experience more than just a service.
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
          Act Now, Achieve More – The <br></br> Future is Yours!
          </h1>
          <p className="mb-6 text-[#696969] text-[20px] text-lg leading-relaxed">
          Leave the complexities of medical coding to the experts. Outsource medical coding services confidently, avoid costly errors, and stay updated with industry trends. Don’t let coding challenges hold you back! Join the league of satisfied healthcare providers who’ve unlocked success with BilNow.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Stay ahead of the curve.
        </p>
      </li>
      <li className="flex items-start">
      <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Boost compliance and revenue collections.
        </p>
      </li>
      
      </ul>
      
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
