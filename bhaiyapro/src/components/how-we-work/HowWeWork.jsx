import React from 'react';
import counciling from "../../Image/counciling.png"
import aboutus from "../../Image/About-Us.png"
import aducationDoc from "../../Image/Aplicatio-DOC.png"
import joincollege from "../../Image/Join-college.png"

const HowWeWork = () => {
    return (
        <div className='m-10'>

            <div className='text-5xl text-gray-100 bg-emerald-700'>
                <h2 className='p-2'>HOW WE WORK</h2>
            </div>
            <div className='flex  mt-5 flex-col md:flex-row gap-5'>
                <div className='lg:w-1/2 md:w-full flex flex-row justify-center items-center'>
                    <div className='w-3/5'>
                        <h3 className='text-xl text-emerald-500 '>Meeting</h3>
                        <p className='text-justify p-2'>First we meet and try to understande you problem then we help you to overcome the problem</p>
                    </div>

                    <div className='w-2/5 flex justify-center border-emerald-500 border-2'>
                        <img className='w-44 h-auto' src={aboutus} alt="" />
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-full flex flex-row justify-center gap-2 items-center'>
                    <div className='w-2/5 flex justify-center border-emerald-500 border-2'>
                        <img src={counciling} alt="" />
                    </div>
                    <div className='w-3/5'>
                        <h3 className='text-xl text-emerald-500'>Education Guidence</h3>
                        <p className='text-justify p-2'>In this phase we will guid you regardin to the colleges,education fess,education system ,placements and other things.</p>
                    </div>
                </div>

            </div>

            <div className='flex mt-5 flex-col md:flex-row gap-5'>
                <div className='lg:w-1/2 md:w-full flex flex-row justify-center items-center'>
                    <div className='w-3/5'>
                        <h3 className='text-xl text-emerald-500'>Aplication And Documents</h3>
                        <p className=' text-justify p-2'>Once you select your college then we go throught the Documents as per the College Administration.We fill the aplication doucuments and submite the documents </p>
                    </div>
                    <div className='w-2/5 flex  justify-center border-emerald-500 border-2'>
                        <img  src={aducationDoc} alt="" />
                    </div>
                </div>

                <div className='lg:w-1/2 md:w-full flex flex-row justify-center items-center '>
                    <div className='w-52 flex justify-center border-emerald-500 border-2'>
                        <img className='w-36' src={joincollege} alt="" />
                    </div>
                    <div className='w-3/5'>
                        <h1 className='text-2xl text-emerald-500'>Joid the college</h1>
                        <p className=' text-justify p-2'>Once we submit the document you can joind the college after submiting the fess</p>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default HowWeWork;
