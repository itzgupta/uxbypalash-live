import React from 'react'
import Link from 'next/link'


const Cases = () => {
  return (
    <div>
        <div>
            <h2>Case Studies / Interfaces</h2>
            <p>
                Discover my product design projects that aim to enhance user experience through potential feature identification. <br />
                Check out my <span>Dribbble</span> and <span>Instagram</span> for my hobby explorations of color palettes and UI trends.
            </p>
        </div>

        <div>
            <div>
                <Link href='/'><img src="./assets/Debicover.svg" alt="" /></Link>
                <h5>Debi - A Safe transaction Application</h5>
                <p>
                    Debi is the faster, safer way to send and receive money or make <br />
                    an online payment. Get started or create a merchant account to <br />
                    accept payments.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cases