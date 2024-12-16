import React, { useState, useEffect } from 'react';

import revenu from '../../assets/revenu.webp'
import Council from "../../assets/Council.jpg";
import Certified from '../../assets/Certified.png';
import CPC from '../../assets/CPC.png';
import PartIcon from '../../assets/partner-hipaa.svg';
import CCMA from '../../assets/CCMA.jpg';
import CCA from '../../assets/CCA.png';
import Healthcare from '../../assets/Healthcare.webp';
import Biding from '../../assets/Biding.webp';
import Partners from '../../assets/Partners.webp';
import Communication from '../../assets/Communication.webp';
import Multi from '../../assets/Multi.webp';
import { FaCheck,FaUserCheck, FaFileAlt, FaPaperPlane, FaDollarSign, FaTimesCircle, FaChartBar } from "react-icons/fa";
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

// Counter Component
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
    //Section 1
const Rev = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 h-[70vh] sm:h-[80vh] lg:h-[90vh]" // Increased height
        style={{
          backgroundImage: `url(${revenu})`,
        }}
      >
        <h3 className="text-[20px] sm:text-[36px] md:text-[48px] lg:text-[40px] text-white text-center font-bold">
          Healthcare Revenue Cycle <br /> Management Services
        </h3>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
          Integrate our scalable revenue cycle management solutions to optimize
          your <br></br>cash flow and shorten the payment recovery cycle, keeping your
          health <br></br>practice financially stable.
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
export const ProcessFlowSection = () => {
  const steps = [
    {
      title: "Pre-authorization",
      description:
        "We verify the patients' insurance eligibility upfront to ensure a smooth billing process and minimize delays and claim denials.",
      icon: <FaUserCheck size={24} />,
    },
    {
      title: "Accurate Coding",
      description:
        "Our certified medical coders use updated codes to protect your practice from financial and compliance issues.",
      icon: <FaFileAlt size={24} />,
    },
    {
      title: "Claims Submission",
      description:
        "Our experts handle the entire claims submission process, optimizing timely submissions and reimbursements.",
      icon: <FaPaperPlane size={24} />,
    },
    {
      title: "Payment Posting",
      description:
        "Efficient payment posting and reconciliation processes ensure accurate financial records and improved cash flow.",
      icon: <FaDollarSign size={24} />,
    },
    {
      title: "Denial Management",
      description:
        "Whether it's soft or hard denial, experts at BilNow immediately take action and appeal the denied claims in a timely manner.",
      icon: <FaTimesCircle size={24} />,
    },
    {
      title: "Reporting",
      description:
        "We provide valuable insights into your revenue cycle performance through comprehensive reporting.",
      icon: <FaChartBar size={24} />,
    },
  ];

  return (
    <section className="bg-[#EDF3F6] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#002345] text-center text-[40px] mb-6">
          Process Flow for Streamlined RCM Services
        </h1>
        <p className="text-lg text-[#000000] text-center text-[18px] mb-12">
          We follow a systematic procedure to optimize the revenue cycle management.
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
                  {/* Prevent the icon color from changing on hover */}
                  <div className="text-[#4CC3C3] group-hover:text-[#4CC3C3]">
                    {step.icon}
                  </div>
                </div>
                <p className="text-xl font-bold text-[#4d4b4b] text-[25px] pt-7 group-hover:text-white transition-all duration-300">
                  {step.title}
                </p>
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
      {/* Revenue Section */}
      <Rev />
          
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
          There's No 'I' in Healthcare Revenue Cycle Management
        </h1>
        <p className="text-[#7A7A7A] ml-9 text-[18px] mb-6">
          Successful revenue cycle management in medical billing requires teamwork and collaboration rather than individual effort. Having a highly trained and capable team of revenue leaders, billers, coders, denial managers, and AR recovery experts, BilNow is here to support your team in taking business profitability to new heights.
          We work as an extension of your team, providing comprehensive support to enhance efficiency and drive financial growth. So, you’re not alone in your financial journey! Outsource your physician revenue cycle management to a trusted partner like BilNow and catch up with your revenue targets.
        </p>
      </div>
      <div className='ml-12'>
        <img
          src={Healthcare}
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
            src={Biding} 
            alt="Doctor with Laptop"
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
          <h1 className="text-4xl text-[#E6E6E6] md:text-3xl font-bold mb-6">
            Bridging The Gap Between RCM Technology & HIPAA Compliance
          </h1>
          <p className="mb-6 text-[#FFFFFF] text-[20px] text-lg leading-relaxed">
            As healthcare organizations worldwide say goodbye to manual
            paperwork while implementing advanced technology to automate
            healthcare RCM services and overall operations, it has become a
            significant challenge for practitioners to ensure revenue cycle
            management technology compliance with HIPAA rules and regulations.
          </p>
          <p className="mb-6 text-lg text-[20px] leading-relaxed">
            Luckily, the RCM experts at BilNow are well versed in using
            technology to its fullest potential while providing convenience,
            efficiency, and a secure means of maintaining protected health
            information (PHI). Whether it’s an EHR, EMR, or another practice
            management system, our medical billing experts will help you comply
            with HIPAA while protecting your confidential information.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Handling PHI efficiently
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Reduce the risk of health care fraud
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
    <section className="bg-[#EDF3F6] bg-[url('/src/assets/cardiology-arc.svg')] bg-cover bg-center bg-no-repeat pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex flex-col ml-7 justify-center">
    <h1 className="text-4xl font-bold text-[40px] leading-tight mb-6 text-[#002345]">
      What Makes BilNow Your Perfect RCM Partner?
    </h1>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
      Just think about the financial benefits you will get when a dedicated medical billing company—with an extensive team of medical billers, coders, IT, and legal experts—manages your revenue. We never compromise when it comes to recruiting well-experienced billing staff. Moreover, we conduct regular training sessions for our employees so they can stay updated on industry trends.
    </p>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
      Outsourcing revenue cycle management to us can help you eliminate the excessive financial burden associated with hiring, training, and providing the in-house team with state-of-the-art infrastructure and software required for the successful execution of RCM tasks. You just need to pay a fixed amount, and in return, you get the services of highly trained and certified staff.
    </p>
    <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
          Lower Overheads & Operational Challenges
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
          Aligned Payer Compatibility
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
          High Revenue Recovery Rates
        </p>
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center">
    <img src={Partners} alt="Partners" className="max-w-full h-auto" />
  </div>
</section>

                              {/* Section 7 */}

<section className=" pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className='ml-12'>
        <img
          src={Communication}
        />
      </div>
      <div className='pt-[60px]'>
        <h1 className="text-4xl font-bold text-[50px] leading-tight mb-4 text-[#002345]">
        Clear Communication & Metrics
        </h1>
        <p className="text-[#7A7A7A]  text-[18px] mb-6">
        Communication is the key to ensuring success and promoting teamwork. As a dependable revenue cycle management company, BilNow establishes clear metrics related to medical billing services, especially for evaluating the team. Our medical billing specialists clearly understand your financial goals and expectations. So, they make every possible effort to achieve mutual success and live up to expectations.
        </p>
      </div>
    </section>


        

    <ProcessFlowSection />

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
          Multi-Specialty Support
          </h1>
          <p className="mb-6 text-[#696969] text-[20px] text-lg leading-relaxed">
          Are you running a specialty practice with unique billing needs? Congratulations on finding the best billing partner. You don’t need to switch to multiple medical billing companies. BilNow offers multi-specialty billing services to meet your business needs and keep your revenue cycle on the right track.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Clean Medical Claims
        </p>
      </li>
      <li className="flex items-start">
      <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Timely Payments
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
