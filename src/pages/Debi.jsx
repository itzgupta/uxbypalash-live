/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Debi = () => {
  return (
    <div>
      <div>
        {/* ---- BANNER ---- */}
            
        <div className='flex flex-col mt-10 items-center justify-center h-[450px] bg-[#EDF2FB] px-5'>
          <p className='text-[32px] py-4 text-center font-bold'>Debi</p>
          <img className='h-[50%] sm:h-[60%] ml-2' src="./assets/Debibanner.svg" alt="" />
        </div>
        
        {/* ---- Overview ---- */}

        <div className='p-8 max-w-[1240px] m-auto'>
          
          <div className='py-2'>
            <h5 className='text-[20px] pt-1'><span className='text-[#0116E9] font-bold'>Role :</span> UI/UX Designer</h5>
            <h5 className='text-[20px] pt-1'><span className='text-[#0116E9] font-bold'>Project Type :</span> Personal Project</h5>
            <h5 className='text-[20px] py-1'><span className='text-[#0116E9] font-bold'>Duration :</span> 4 weeks</h5>
          </div>

          <div className='flex flex-col py-6'>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>Overview</h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              An online payment app that allows users to pay in cryptocurrency, UPI, and through banks is a versatile platform that offers 
              users multiple options for making transactions. With this app, users can seamlessly move funds between different payment 
              methods, depending on their preferences and needs.
            </p>
          </div>
          
          <div>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>Backstory</h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              A user could use the app to pay for a purchase using their cryptocurrency holdings, then switch to UPI to transfer funds to a friend, and finally use their bank account to pay a bill. The app could also incorporate features such as instant settlement, low transaction fees, and robust security protocols to enhance the user experience and provide peace of mind.
            </p>
          </div>

          <div className='flex flex-col py-2'>
            <h4 className='text-[20px] sm:text-[32px] font-bold mt-2'>Other Skills</h4>
            <img className='py-4' src="./assets/Process.svg" alt="" />
          </div>

        </div>

        {/* ---- PHASE 1 DISCOVERY ---- */}
        
        <div className='flex flex-col mt-10 items-center justify-center h-[240px] bg-[#EDF2FB] px-5'>
            <p className='text-[24px] text-[#072AC8] py-4 text-center font-bold sm:text-[32px]'>
              PHASE 1 : DISCOVERY
            </p>
        </div>
        
        <div className='p-8 max-w-[1240px] m-auto'>

          <div className='flex flex-col py-6'>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>Survey</h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
            I have collected 10 surveys from those who transaction on a daily basis and understanding all the transaction needs they have.
            </p>
          </div>
          
          <div>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>User Interviews</h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              I also conducted some interviews with ten people who do transactions on daily basis.
            </p>
            <ul className='list-disc text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2 px-4'>
              <li className='py-2'>Can you describe what a normal day for you usually entails?</li>
              <li className='py-2'>How frequently do you use our payment app to make transactions?</li>
              <li className='py-2'>What do you find most convenient about using our payment app?</li>
              <li className='py-2'>How do you feel about the security features of other payment app?</li>
              <li className='py-2'>What improvements would you like to see in future fintech apps?</li>
            </ul>
            <img className='py-4' src="/" alt="" />
          </div>

          <div className='flex flex-col py-2'>
            <h4 className='text-[20px] sm:text-[32px] font-bold mt-2'>
              Feature Comaprison
            </h4>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              To commence my research, I start by examining several competitors or analogous platforms, evaluating their user interface, user experience, user flow, and essential functionalities.
            </p>
            <img className='py-4' src="/" alt="" />
          </div>
        </div>

        {/* ---- PHASE 2 DEFINE ---- */}
        
        <div className='flex flex-col mt-10 items-center justify-center h-[240px] bg-[#EDF2FB] px-5'>
            <p className='text-[24px] text-[#072AC8] py-4 text-center font-bold sm:text-[32px]'>
              PHASE 2 : DEFINE
            </p>
        </div>
        
        <div className='p-8 max-w-[1240px] m-auto'>
          
          <div>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>Pain Points</h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              I also conducted some interviews with ten people who do transactions on daily basis.
            </p>
            <ul className='list-disc text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2 px-4'>
              <li className='py-2'>Difficulties with adding and managing payment methods.</li>
              <li className='py-2'>Security concerns related to making online transactions.</li>
              <li className='py-2'>Confusing or cumbersome user interface during the payment process.</li>
              <li className='py-2'>Payment processing errors or delays.</li>
              <li className='py-2'>Limited payment options or lack of support for certain currencies.</li>
            </ul>
            <img className='py-4' src="/" alt="" />
          </div>

          <div className='flex flex-col py-6'>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>Persona</h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              Utilizing the data obtained from the survey and interview, I developed a persona that embodies the characteristics of the intended audience.
            </p>
            <img className='py-4' src="/" alt="" />
          </div>

          <div className='flex flex-col py-2'>
            <h4 className='text-[20px] sm:text-[32px] font-bold mt-2'>
              Empathy Map
            </h4>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              Upon completion of persona creation, I constructed a comprehensive user empathy map to elucidate and convey details about the user, resulting in a deeper comprehension of the user persona.
            </p>
            <img className='py-4' src="/" alt="" />
          </div>
        </div>

        {/* ---- PHASE 3 IDEATE ---- */}
        
        <div className='flex flex-col mt-10 items-center justify-center h-[240px] bg-[#EDF2FB] px-5'>
            <p className='text-[24px] text-[#072AC8] py-4 text-center font-bold sm:text-[32px]'>
              PHASE 3 : IDEATE
            </p>
        </div>
        
        <div className='p-8 max-w-[1240px] m-auto'>

          <div className='flex flex-col py-6'>
            <h5 className='text-[20px] sm:text-[32px] font-bold'>
              User Flow - Order journey map
            </h5>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              Drawing from the insights gathered through research and aligning our objectives with the identified pain points, I have devised the order journey flow, recognizing its significance as a critical operation within the application.
            </p>
            <img className='py-4' src="/" alt="" />
          </div>

          <div className='flex flex-col py-2'>
            <h4 className='text-[20px] sm:text-[32px] font-bold mt-2'>
              Wireframes - digital
            </h4>
            <p className='text-[18px] sm:text-[20px] text-[#5F5F5F] font-medium py-2'>
              Subsequently, I converted my preliminary sketches into digital wireframes, followed by the creation of Lo-Fi prototypes using XD. I then conducted usability testing with my users.
            </p>
            <img className='py-4' src="/" alt="" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Debi