import React, { useState, useEffect } from 'react';
import dinail from '../../assets/dinail.webp';
import Council from '../../assets/Council.jpg';
import Certified from '../../assets/Certified.png';
import CPC from '../../assets/CPC.png';
import PartIcon from '../../assets/partner-hipaa.svg';
import CCMA from '../../assets/CCMA.jpg';
import CCA from '../../assets/CCA.png';
import Hands from '../../assets/Hands.webp';
import Dental from '../../assets/Dental.webp';
import Manage from '../../assets/Manage.webp';
import Guideline from '../../assets/Guideline.webp';
import Dollar from '../../assets/Dollar.webp';
import { FaCheck}from 'react-icons/fa';
import {ClipboardX, Search, CheckCircle2, FileEdit, TrendingUp, BarChart, SearchIcon} from 'lucide-react'
import {Target, FileX,  Shield,  ChromeIcon as Browser } from 'lucide-react'



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
          backgroundImage: `url(${dinail})`,
        }}
      >
        <p className="text-[40px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-white text-center font-semi-bold">
        Denial Management <br></br> Services
        </p>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
        Are partial or underpayments causing financial burdens on your healthcare practice? Don’t <br></br> lose hope. BilNow provides advanced denial management solutions to find the root cause of <br></br>medical claim denials,  fix the problems, and help you get paid faster. 
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
        icon: <ClipboardX size={26} />,
        title: "Denial Tracking",
        description:"The first step is to identify and categorize all denied claims. A key component of this process is tracking and understanding denials through electronic remittance advice (ERAs) and explanations of benefits (EOBs).through electronic remittance advice (ERAs) and explanations of benefits (EOBs)."
      },

      {
        icon: < Search size={26} />,
        title: "Identifying Causes",
        description:"We perform a detailed root cause analysis to identify the reasons for denials. This process may include coding reviews, eligibility verifications, medical necessity assessments, and more."

      },

      {
        icon:<CheckCircle2 size={26} />,
        title: "Denial Resolution",
        description: "Once we identify the issues, our experienced team will resolve them on your behalf. This could involve correcting coding errors, providing additional documentation, or appealing denials based on incorrect information."
      },
      {
        icon: <FileEdit size={26} />,
        title:"Appeal Preparation",
        description: "We prepare detailed appeal letters for denials that require appeal, presenting clear arguments supported by acceptable clinical documentation and applicable regulatory norms."
      },

      {
      icon: <TrendingUp size={26} />,
        title: "Continuous Improvement",
        description: "After managing denials, we analyze trends and patterns to identify areas for process improvement. These could include training coders, improving documentation standards, or improving patient eligibility verification."
      },

      {
        icon: <BarChart size ={26} />,
        title: "Detailed Reporting",
        description:"We provide detailed reports to healthcare providers regarding the ongoing progress in their revenue cycle management so they can stay updated with the ins and outs of their medical billing system."
      }
  ];

  return (
    <section className="bg-[#EDF3F6] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-9">
        <h1 className="text-4xl font-bold text-[#002345] text-center text-[40px] mb-6">
        Our Denial Management Process
        </h1>
        <p className="text-lg text-[#000000] text-center text-[18px] mb-12">
        Our denial management process is comprehensive and systematic. Our process involves:
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
        Collaborative Action Plan
        </h1>
        <p className="text-[#7A7A7A] ml-9 text-[18px] mb-6">
        After a detailed root cause analysis, we plan to eliminate the possible cracks in your healthcare billing services. We will work with your entire revenue cycle team, including the front desk and back end, to determine why things are going wrong and how to eliminate the red flags. At this stage, we set quantifiable goals with healthcare providers, including the desired percentage of clean medical claims, i.e., 99%, and a timeline to achieve them.
        </p>
      </div>
      <div className='ml-12'>
        <img
          src={Hands}
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
            src={Dental} 
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
          <p className="text-[70px] text-[#E6E6E6] md:text-[45px] font-bold mb-6">
          Implementing Proven Denial Management Strategies
          </p>
          <p className="mb-6 text-[#FFFFFF] text-[20px] text-lg leading-relaxed">
          We implement our strategy with a plan and goals. We resubmit denied or rejected claims within a given time window. We follow the best possible procedure to scrub the claims and help practitioners recoup financial losses by successfully appealing the denied claims. We understand that timelines and quality matter when dealing with claim denial management services. We don’t hesitate to provide realistic deadlines and goals to show our commitment to excellence<br></br>
          Our denial management services are tailored to your practice’s unique needs. BilNow’s medical billing experts implement robust solutions to fine-tune the claims management process.
          </p>
            <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        95% billing collection rate

        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        96% Claims first pass ratio
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
    Moving From Denial <br></br>Management to Prevention
    </h1>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    “Prevention is better than cure.” This is what we believe in. Our denial management experts closely monitor every aspect of the revenue cycle, from patient scheduling and registration to clinical documentation, medical coding, charge entry, claims submissions, and accounts receivable management, to identify and fix the problems slowing down your medical billing process. 
    </p>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    By preventing billing errors from recurring, we help practitioners shift the focus from denial management to denial prevention.
    </p>
    <ul className="space-y-4 mt-2">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Precise Medical Codes
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Claims Scrubbing
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Prepare & File Clean Medical Claims
        </p>
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center">
    <img src={Manage}  className="w-90 h-90 " />
  </div>
</section>

                              {/* Section 7 */}

<section className=" pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className='ml-12'>
        <img
          src={Guideline}
        />
      </div>
      <div className='pt-[30px]'>
        <h1 className="text-4xl font-bold text-[50px] leading-tight mb-4 text-[#002345]">
        Keeping Up With Payers' Guidelines
        </h1>
        <p className="text-[#7A7A7A]  text-[18px] mb-12">
        We understand the importance of keeping pace with payers’ requirements. Every payer has different rules and regulations regarding filing denied claims. Experts at BilNow fully understand the payer’s guidelines and submit the claims accordingly within the insurance companies’ time frames. So, outsource denial management services to us and forget about claims getting denied because they do not fulfill the criteria set by the concerned insurance payers. We go beyond expectations and ensure a healthy payer-provider relationship.
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
            src={Dollar}
            alt="Multi Support System"
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
           <p className='text-[#001F3F] text-[18px] font-bold'>Make a Schedule</p>
          <h1 className="text-4xl text-[#121212] md:text-3xl font-bold mb-6">
          Capture Every Dollar You're <br></br> Owed
          </h1>
          <p className="mb-6 text-[#696969] text-[20px] text-lg leading-relaxed">
          We always consider denial management important and capture every penny for the services rendered, so you don’t need to worry about your finances! We will manage your revenue cycle with the utmost priority, just as you prioritize your patients.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Prioritize claims follow-up
        </p>
      </li>
      <li className="flex items-start">
      <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Analyze the reimbursable claims
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