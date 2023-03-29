/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Debi = () => {
  return (
    <div className=''>
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
                <div>
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
              
              <div>
                <div>
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Debi