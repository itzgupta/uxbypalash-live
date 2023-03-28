import React from 'react'

const Otherskill = () => {
  return (
    <div className='bg-[#F8F7FF] border-b-[1px] border-[#D4D4D4]'>
      <div className='p-8 max-w-[1240px] m-auto'>
        <div className='flex flex-col'>
          <h4 className='text-[32px] font-bold'>Other Skills</h4>
          <img className='py-4' src="./assets/Skills.svg" alt="" />
        </div>

        <div>
          <h4 className='text-[32px] font-bold py-4'>Experience in</h4>

          <div className='flex flex-row gap-4'>
            <div>
              <h5 className='text-[20px] font-bold'>Music Producer</h5>
              <p className='text-[20px] text-[#5F5F5F] font-medium py-2'>
                Created, produced and collaborated with various artists to bring <br />
                their creative vision to life as a music producer, specializing in <br />
                sound design, mixing, and mastering.
              </p>
            </div>
            <div>
              <h5 className='text-[24px] font-bold'>Social Media Manager (SMM)</h5>
              <p className='text-[20px] text-[#5F5F5F] font-medium py-2'>
                As a Social Media Manager, I have developed and executed <br />
                social media strategies, created and curated content and <br />
                engaged with followers to grow the brand's online presence <br />
                and increase engagement.
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <div>
              <h5 className='text-[20px] font-bold'>Design Consultant</h5>
              <p className='text-[20px] text-[#5F5F5F] font-medium py-2'>
                As a design consultant, I worked with clients to develop <br />
                creative solutions that met their business objectives. <br />
                I used my expertise in design principles and industry <br />
                trends to create visually appealing and functional designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otherskill