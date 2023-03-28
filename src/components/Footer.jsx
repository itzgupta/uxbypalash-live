import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='flex flex-col items-center justify-center'>
        <div className='p-8 text-center'>
            <h4 className='text-[32px] font-bold py-4'>Let's Connect.</h4>
            <p className='text-[20px] font-medium text-[#5F5F5F]'>
                Do you have a specific project or opportunity that you would like to discuss? <br />
                Let's have a pleasant conversation about it.<span className='font-bold'> You can reach me by sending <br />
                an email to my address.</span>
            </p>
        </div>
    </div>
  )
}

export default Footer