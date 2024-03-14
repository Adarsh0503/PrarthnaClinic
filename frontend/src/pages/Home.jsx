import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import faqImg from "../assets/images/faq1.png"


import {Link} from 'react-router-dom'
import {BsArrowRight, } from 'react-icons/bs'
import About from '../components/About/About'
import ServicesList from '../components/Services/ServicesList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer/Footer'



const Home = () => {
  return (
    <>
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className="container">

        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

          {/* === hero content ===== */}
          <div>
            <div className='lg:w-[570px]'> 
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
            md:leading-[70px]'>
            We support people to live a long, healthy life.</h1>
              <p className='text__para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Maiores, hic. Rem quos sit quod hic quis excepturi repellat. 
                Ipsa, providentwnsnf sncb sbc bsndad ddjakdsadk.
                </p>

            <button className='btn'>Book Appointment</button>

            </div>
        {/*     =============hero counter=========================*/}
        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
        <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
           text-headingColor '>
            30+
           </h2>
           <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] '></span>
           <p className='text__para'>Years of experience</p>
        </div>

        <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
           text-headingColor '>
            2+
           </h2>
           <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] '></span>
           <p className='text__para'>Locations</p>
        </div>

        <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
           text-headingColor '>
            100%
           </h2>
           <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] '></span>
           <p className='text__para'>Patient Satisfaction</p>
        </div>

        


      </div>
      </div>

          {/* === hero content ===== */}

          <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-full' src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02}alt=""  className='w-full mb-[30px]'/>
              <img src={heroImg03}alt=""  className='w-full'/>

            </div>
          </div>

      </div>
      </div>
    </section>

    {/*  ==== hero section ends====   */}

    <section>

      <div className="container">
        <div className='lg:w-[470px] mx-auto '>
          <h2 className='heading text-center'>Excellence in every patient experience
          </h2>
          <p className='text__para text-center'>
          Streamlined appointments, personalized care – your well-being, our commitment to 
          excellence every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center "> <img src={  icon1} alt="" />
          </div>

          <div className="mt-[30px] ">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
              Find your Doc
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            Delivering unparalleled, expert healthcare for all. Our world-class system ensures unmatched well-being.
            </p>

            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
            </Link>
          </div>

        </div>
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center "> <img src={  icon2} alt="" />
          </div>

          <div className="mt-[30px] ">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
              Find Locations
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            Delivering unparalleled, expert healthcare for all. Our world-class system ensures unmatched well-being.
            </p>

            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
            </Link>
          </div>

        </div>


        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center "> <img src={ icon3} alt="" />
          </div>

          <div className="mt-[30px] ">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
              Schedule  Appointment
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            Delivering unparalleled, expert healthcare for all. Our world-class system ensures unmatched well-being.
            </p>

            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
            </Link>
          </div>

        </div>


        </div>
      </div>
      
    </section>



    {/* a========== about section starts here=================  */}


    <About />

 {/* a========== about section ends here=================  */}


        {/* a========== services section starts here=================  */}
<section>
<div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className='text__para text-center'>
            Our healthcare system provides unparalleled, expert medical services.
            </p>
        </div>
    

    <ServicesList />
    </div>
    </section>
        

        {/* a========== doctors section starts here=================  */}


        <section>


          <div className="container">

          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Meet the doctors</h2>
            <p className='text__para text-center'>
            Our healthcare system provides unparalleled, expert medical services.
            </p>
        </div>
        <DoctorList />
          </div>
        </section>


      {/* a========== doctors section ends here=================  */}



      {/* =========FAQ section stars here============= */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className='w-1/2 hidden md:block'> 
            <img src={faqImg} alt="" />
            </div>

            <div className='w-full md:w-1/2 '>
            <h2 className='heading '>Common queries from our valued patients</h2>

            <FaqList />
            </div>
          </div>
        </div>
      </section>


      {/* =========FAQ section stars here============= */}


      {/* =================Testimonial section================ */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our patients experience</h2>
            <p className='text__para text-center'>
            Our healthcare system provides unparalleled, expert medical services.
            </p>
        </div>

        <Testimonial /> 

        </div>

      </section>

      {/* =================Testimonial section ends================ */}


      
    </>
  )
}

export default Home