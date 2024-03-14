import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2
            '>
                About 
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Dr Paritosh Mishra
                </span>
            </h3>
            <p className="text__para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem, molestias enim numquam debitis fugiat 
                architecto laudantium quod earum sunt veniam itaque adipisci, eaque beatae hic tempore, doloremque nemo 
                distinctio magni? Dolores tempora pariatur, ipsum et inventore ut sunt debitis esse laboriosam sequi 
                assumenda odit magnam soluta praesentium ullam consectetur quae modi. Nesciunt, rerum quasi quod aperiam 
                odio explicabo fuga!
            </p>
        </div>

        <div className="mt-12 ">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className="pt-4 md:p-5 ">
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]  '>

                    <div className="">
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold '>
                            {formateDate('03-05-2003')} - {formateDate('03-05-2008')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor '>MD in Medicine</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor '>Artemis Hospital, Gurgaon.</p>

                </li>

                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]  '>

                <div className="">
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold '>
                    {formateDate('05-16-2006')} - {formateDate('03-05-2010')}

                    </span>
                <p className='text-[16px] leading-6 font-medium text-textColor '>
                    MD in Medicine
                    </p>
            </div>

                <p className='text-[14px] leading-5 font-medium text-textColor '>Artemis Hospital, Gurgaon.</p>

                </li>
            </ul>
        </div>


        <div className="mt-12 ">

        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">

                <li className='p-4 rounded bg-[#fff9ea]'> 
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate('03-05-2003')} - {formateDate('03-05-2008')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor '>
                    Head Physician 
                </p>

                <p className='text-[14px] leading-5 font-medium text-textColor '>
                    Artemis Hospital, Gurgaon.
                </p>

                </li>

                <li className='p-4 rounded bg-[#fff9ea]'> 
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate('03-05-2003')} - {formateDate('03-05-2008')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor '>
                    Head Physician 
                </p>

                <p className='text-[14px] leading-5 font-medium text-textColor '>
                    Artemis Hospital, Gurgaon.
                </p>

                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout