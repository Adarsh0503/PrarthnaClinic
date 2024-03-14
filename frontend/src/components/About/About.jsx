

import React from 'react'
import aboutImage from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

                {/*  ===============about img ==============   */}

                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                    <img src={aboutImage} alt="" />

                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                {/*  ============  About content =============== */}

                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order2 ">
                    <h2 className='heading'>Leading in exceptional healthcare services</h2>
                    <p className="text__para">
                    Delhi-NCR's most highly rated and people's favorite clinic, celebrated for exceptional healthcare. 
                    Our commitment to patient well-being has earned us widespread 
                    acclaim and trust in the region.
                    </p>
                    
                    <p className="text__para mt-[30px] ">
                    Striving for excellence daily, our commitment is unwavering to provide optimal healthcare. 
                    Focused on our patients, we look ahead to tomorrow's opportunities rather than dwelling on past accomplishments. 
                    Emphasizing continuous improvement, we dedicate ourselves to ensuring your well-being through quality and 
                    compassionate care.
                    </p>

                    <Link to="/ ">
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About