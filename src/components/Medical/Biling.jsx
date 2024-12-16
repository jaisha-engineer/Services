import React, { useState, useEffect } from 'react';
import Biling from '../../assets/Biling.webp';

import Council from '../../assets/Council.jpg';
import Certified from '../../assets/Certified.png';
import CPC from '../../assets/CPC.png';
import PartIcon from '../../assets/partner-hipaa.svg';
import CCMA from '../../assets/CCMA.jpg';
import CCA from '../../assets/CCA.png';
import Tools from '../../assets/Tools.webp';
import Report from '../../assets/Report.webp';
import Doctor from '../../assets/Doctor.webp';
import Assisstance from '../../assets/Assisstance.webp';
import Hidden from '../../assets/Hidden.webp';
import { FaCheck}from 'react-icons/fa';
import { ShieldCheck, FileCheck, Clock, Briefcase, Wallet, Headphones } from 'lucide-react';
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
          backgroundImage: `url(${Biling})`,
        }}
      >
        <p className="text-[40px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-white text-center font-semi-bold">
        Medical Billing Services
        </p>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
        Are you behind your revenue targets? Fret Not! You’re in the right place. Our <br></br>medical billing services ensure the highest reimbursement outcomes, keeping <br></br>your healthcare practice financially stable.
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
        icon: <ShieldCheck size={26} />,
        title: "Insurance Verification",
        description:"We verify patients' insurance eligibility and coverage details upfront to minimize the chances of claim denials due to ineligible coverage. This allows healthcare practitioners to focus on delivering care without worrying about insurance complications."
      },

      {
        icon: <FileCheck size={26} />,
        title:"Claims Scrubbing",
        description:"We combine experienced medical auditors with technology to manually and electronically review each application before submission. Medical billing experts ensure the information is free of errors, mistakes, or omissions when submitting clean medical claims."
      },

      {
        icon: <Clock size={26} />,
        title:"Timely Filing",
        description: "Time is king! Most revenue losses are caused by claims not being submitted on time. We ensure that every claim is processed within 24 hours of receipt. Our medical billing services are a perfect blend of experts and technology, making the claims process efficient."
      },
      {
        icon: <Briefcase size={26} />,
        title:"Expert AR Management",
        description:"As a trusted medical billing company, we pride ourselves on having our clients pay for old and out-of-date claims. We believe our clients deserve every penny for the services they provide, and with the help of our aggressive AR management system, we now pursue claims that our clients have given up hope of getting."
      },

      {
        icon: <Wallet size={26} />,
        title: "Patient Billing",
        description: "We provide a complete suite of revenue cycle management that includes every aspect, more importantly, patient collections. Our billing team handles every facet of patient accounts, including invoicing, collecting payments, setting up payment plans, and addressing outstanding balances.",
      },

      {
        icon: <Headphones size={26} />,
        title:"Customer Support",
        description:"We understand the importance of fast and easy communication between billing companies and their customers—24/7 access to an experienced and professional customer support team to avoid communication delays. Dedicated support staff are always available via phone, email, and SMS."
      }
  ];

  return (
    <section className="bg-[#EDF3F6] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-9">
        <h1 className="text-4xl font-bold text-[#002345] text-center text-[40px] mb-6">
        How We Raise The Bar
        </h1>
        <p className="text-lg text-[#000000] text-center text-[18px] mb-12">
        Our Strategies to Improve Your Bottom Line
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
      <div className='mt-10'>
        <h1 className="text-4xl font-bold ml-9 text-[45px] leading-tight mb-4 text-[#002345]">
        Larger Talent Pool
        </h1>
        <p className="text-[#7A7A7A] ml-9 text-[18px] mb-6">
        At BilNow, we don’t believe in a limited team juggling multiple roles. Unlike ordinary medical billing companies, we have a large and dedicated talent pool, each expert in their specific area of medical billing. With specialized teams for verification of prior authorization, coding, claims processing, insurance follow-ups, denial, and medical accounts receivable management, we provide tailored medical billing services to keep the first-pass claim acceptance rate above 96%. Rest easy knowing that professionals handle your billing and focus on their specialized tasks so you can get maximum return on investment. 
        </p>
      </div>
      <div className='ml-12'>
        <img
          src={Tools}
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
            src={Report} 
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
          <p className="text-[70px] text-[#E6E6E6] md:text-[45px] font-bold mb-6">
          Advanced Reporting & Analytics
          </p>
          <p className="mb-6 text-[#FFFFFF] text-[20px] text-lg leading-relaxed">
          As a reliable medical billing company, we support open communication and complete transparency regarding our activities. We provide thorough reporting on charges, payments, and aging receivables, ensuring you have a clear picture of your healthcare practice’s billable financial performance. Our reporting tools are designed to provide actionable intelligence, enable you to monitor financial performance, and spot potential revenue gaps.<br></br>
          We provide full access to intuitive dashboards so healthcare providers can gain deep insights into billing trends. This helps them make proactive, data-driven decisions to optimize revenue. More importantly, we control revenue cycle management with clear, accurate reports tailored to your practice’s requirements.
         </p>
            <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Real-time insights

        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Proactive decision-making
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
    How Can We Add Value To <br></br>Your Healthcare Practice?
    </h1>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    Just think for a while: You’re experiencing zero billing errors, an above-95 % collection ratio, swift claim approvals, and a noticeable boost in revenue! How does that sound? This is what BilNow is providing to healthcare providers across the United States.  
    </p>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    Outsourcing medical billing services to a company like BilNow can help you eliminate the excessive administrative burden and cost of managing an internal medical billing system. It can also help physicians redirect their focus on their core values—alleviating the sufferings of their patients. Further, outsourcing medical billing can lead to several benefits:
    </p>
    <ul className="space-y-4 mt-2">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Less stress, more financial stability.
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        More time to deliver quality patient care.
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Greater compliance with HIPAA rules and other industry regulations.
        </p>
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center">
    <img src={Doctor}  className="w-90 h-90 " />
  </div>
</section>

                              {/* Section 7 */}

<section className=" pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className='ml-12'>
        <img
          src={Assisstance}
        />
      </div>
      <div className='pt-[30px]'>
        <h1 className="text-4xl font-bold text-[50px] leading-tight mb-4 text-[#002345]">
        Personalized Assistance
        </h1>
        <p className="text-[#7A7A7A]  text-[18px] mb-12">
        Our staff is 100% committed to serving you. We assign dedicated account managers, billers, and support staff to each client, giving you the peace of mind of working with a representative uniquely familiar with your practice. Our staff will guide you throughout the implementation process and provide frequent performance reviews and updates. So, you don’t have to wait for the staff’s availability; you’ll get 24/7 support from Bilnow, resulting in more visibility, transparency, and efficiency.
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
            src={Hidden}
            alt="Multi Support System"
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
           <p className='text-[#001F3F] text-[18px] font-bold'>Make a Schedule</p>
          <h1 className="text-4xl text-[#121212] md:text-3xl font-bold mb-6">
          Smart Pricing. No Hidden <br></br> Costs
          </h1>
          <p className="mb-6 text-[#696969] text-[20px] text-lg leading-relaxed">
          Our pricing structure is simple, upfront, and transparent, ensuring you know what you’re paying for. With BilNow, you receive end-to-end medical billing services at a reduced cost compared to in-house teams without compromising quality or performance.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Upfront pricing
        </p>
      </li>
      <li className="flex items-start">
      <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Unmatched transparency
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
