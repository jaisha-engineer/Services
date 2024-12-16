import React, { useState, useEffect } from 'react';
import Audit from '../../assets/Audit.png';
import Council from '../../assets/Council.jpg';
import Certified from '../../assets/Certified.png';
import CPC from '../../assets/CPC.png';
import PartIcon from '../../assets/partner-hipaa.svg';
import CCMA from '../../assets/CCMA.jpg';
import CCA from '../../assets/CCA.png';
import Auditors from '../../assets/Auditors.webp';
import Recovery from '../../assets/Recovery.webp';
import Risk from '../../assets/Risk.webp';
import Security from '../../assets/Security.webp';
import post from '../../assets/post.webp';
import { FaCheck}from 'react-icons/fa';
import { ShieldCheck, Book, Activity, Folder, Eye, AlertTriangle,Target, FileX, TrendingUp, Shield, User, Users, ClipboardCheck, LayoutGrid,  ChromeIcon as Browser } from 'lucide-react'



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
    
    // Section 1

const Coding= () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 h-[70vh] sm:h-[80vh] lg:h-[90vh]" 
        style={{
          backgroundImage: `url(${Audit})`,
        }}
      >
        <p className="text-[40px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-white text-center font-semi-bold">
        Medical Billing Audit Services
        </p>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white text-center mt-4 leading-relaxed max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
        Are you facing financial challenges despite sending claims to payers? If so,<br></br> you’re not alone. Most healthcare practices also face the challenge of<br></br> maintaining accurate medical coding. BilNow provides medical billing and<br></br> coding audit services to eliminate the root causes directly impacting revenue <br></br>generation and regulation compliance.
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
        title: "Medical Coding Compliance",
        description:"We strictly adhere to the latest regulations and guidelines, ensuring that your medical coding practices are always compliant. Thus, we reduce the risk of penalties and denials."
      },

      {
        icon: <Book size={26} />,
        title:"HCC Coding and Auditing",
        description:"We provide comprehensive Hierarchical Condition Category (HCC) coding and auditing to ensure accurate risk adjustment factor scores and optimize your revenue."
      },

      {
        icon: <Activity size={26} />,
        title:"Clinical Audits",
        description:"Experts scrutinize your clinical documentation for accuracy and completeness, enhancing the quality of patient care and supporting accurate billing."
      },
      {
        icon: <Folder size={26} />,
        title:"Claims Management",
        description:"The claims process receives expert management from initiation to completion, minimizing errors and maximizing successful reimbursements."
      },

      {
        icon: <Eye size={26} />,
        title: "Coding Accuracy & Review",
        description: "We thoroughly review your codes for accuracy, reducing the risk of denials and ensuring correct reimbursement.",
      },

      {
        icon: <AlertTriangle size={26} />,
        title:"Denials Management",
        description:"We manage and investigate claim denials, finding the root cause and implementing solutions to reduce future denials and revenue loss."
      }
  ];

  return (
    <section className="bg-[#EDF3F6] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-9">
        <h1 className="text-4xl font-bold text-[#002345] text-center text-[40px] mb-6">
        Our Medical Billing Audit Solutions </h1>
        
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
        Best Auditors in the Business
        </h1>
        <p className="text-[#7A7A7A] ml-9 text-[18px] mb-6">
        Inaccurate or outdated codes can lead to denied claims, causing significant financial loss and potential compliance issues. To make the auditing process more efficient, we boast a network of the industry’s most highly trained auditors with expertise in multiple medical specialties. Our auditors ensure that your billing practices are accurate, compliant, and optimized to avoid costly mistakes caused by phantom billing, undercoding, upcoding, surprise medical bills, and other issues.
        </p>
      </div>
      <div className='ml-12'>
        <img
          src={Auditors}
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
            src={Recovery} 
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
          <p className="text-[70px] text-[#E6E6E6] md:text-[40px] font-bold mb-6">
          Underpayment Recovery Don't Leave Your Hard-Earned Revenue On The Table
          </p>
          <p className="mb-6 text-[#FFFFFF] text-[20px] text-lg leading-relaxed">
          Underpayment recovery is the core of our work for healthcare providers. We make every possible effort to ensure your healthcare facility captures every dollar it deserves. Our audit team is a perfect combination of certified medical billers and coders who help you uncover payment variances, underpaid claims, and revenue lost due to aging accounts receivable. After root cause analysis, we offer affluent medical billing solutions to fix things and get your revenue cycle management back on track.<br></br>
          In addition to recovering lost revenue, we provide ongoing support to prevent future underpayments. With our expertise and industry knowledge, you can be confident in achieving optimal payment accuracy and avoiding future revenue shortfalls.
         </p>
            <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Identify and recover lost revenue due to underpayments.

        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#001F3F] text-sm" />
        </div>
        <p className="text-[#FFFFFF] text-[18px] ml-4">
        Optimize billing processes for long-term financial success.
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
    Risk Adjustment Audits
    </h1>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    With a thorough HCC audit, we help healthcare providers verify compliance and ensure accurate documentation and coding to avoid underpayments or inaccurate risk adjustments. Our structured methodology validates diagnosis coding accuracy for HCC categories and ensures that records meet CMS compliance standards. 
    </p>
    <p className="mb-6 text-[17px] text-[#7A7A7A] leading-relaxed">
    We help optimize your reimbursement process, prevent costly penalties, and ensure accurate reporting by thoroughly verifying the accuracy of your risk adjustment data, including diagnosis codes, hierarchical condition categories (HCCs), and risk scores. This ultimately leads to better patient outcomes and financial stability.
    </p>
    <ul className="space-y-4 mt-2">
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Ensure accurate HCC coding for compliance and payment
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC]  rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Avoid costly penalties and underpayments
        </p>
      </li>
      <li className="flex items-start">
        <div className="w-6 h-6 bg-[#1DBFCC] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-white text-sm" />
        </div>
        <p className="text-[#7F7F7F] text-[17px] ml-4">
        Improve patient outcomes through precise data
        </p>
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center">
    <img src={Risk}  className="w-90 h-90 " />
  </div>
</section>

                              {/* Section 7 */}

<section className=" pt-[70px] p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className='ml-12'>
        <img
          src={Security}
        />
      </div>
      <div className='pt-[30px]'>
        <h1 className="text-4xl font-bold text-[50px] leading-tight mb-4 text-[#002345]">
        Uncompromised Data Security
        </h1>
        <p className="text-[#7A7A7A]  text-[18px] mb-12">
        Recognizing the sensitivity of healthcare data, we prioritize its security by utilizing secure, encrypted systems, adhering to HIPAA compliance standards, and implementing comprehensive data security procedures. We sign strong nondisclosure agreements and ensure regular security monitoring to protect patient information. This ensures that all protected health information (PHI) is handled with strict secrecy, lowering the risk of data breaches or unauthorized access. Our commitment to data security makes us the most reliable medical billing company in the United States.
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
            src={post}
            alt="Multi Support System"
            className="rounded-full object-cover w-75 h-75"
          />
        </div>
        <div
          className="w-full md:w-1/2 animate-slide-right"
        >
           <p className='text-[#001F3F] text-[18px] font-bold'>Make a Schedule</p>
          <h1 className="text-4xl text-[#121212] md:text-3xl font-bold mb-6">
          Post-Audit Education & Training
          </h1>
          <p className="mb-6 text-[#696969] text-[20px] text-lg leading-relaxed">
          As part of our Post-Audit Education & Training program, we offer customized sessions designed to address your team’s coding and compliance challenges, ensuring enhanced accuracy and compliance with regulatory requirements.
          </p>
          <ul className="space-y-4 mt-4">
      <li className="flex items-start">
        <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Optimize EHR usage
        </p>
      </li>
      <li className="flex items-start">
      <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Identify process improvement opportunities
        </p>
      </li>
      <li className="flex items-start">
      <div className="w-5 h-5 bg-[#001F3F] rounded-full flex items-center justify-center text-white">
          <FaCheck className="text-[#FFFFFF] text-[13px] text-sm" />
        </div>
        <p className="text-[#333333] text-[18px] ml-4">
        Affirm or correct code selections.
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
