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
              <div>
                <h5 className='text-[20px]'><span className='text-[#0116E9] font-bold'>Role :</span> UI/UX Designer</h5>
                <h5 className='text-[20px]'><span className='text-[#0116E9] font-bold'>Project Type :</span> Personal Project</h5>
                <h5 className='text-[20px]'><span className='text-[#0116E9] font-bold'>Duration :</span> 4 weeks</h5>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Debi