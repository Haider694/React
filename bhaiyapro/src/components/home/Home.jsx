import React from 'react'
import img from "../../Image/About.png"
import interSet from "../../Image/interior-set.png"
import sofa from "../../Image/green-armchair-with-pillow.png";
import Services from '../services/Services'
import HowWeWork from '../how-we-work/HowWeWork';
import HomeSlider from '../HomeSlider/HomeSlider'


export default function Home() {
  return (
    <div>
      <div>
        <HomeSlider/>
      </div>
               
      <div className="flex m-10  w- flex-col md:flex-row gap-10">

        <div className='bg-gray-300  relative overflow-hidden h-96 md:w-full lg:w-1/2 '>
          <div className='w-full h-40 bg-emerald-700 absolute '></div>
          <div className='absolute top-20  left-28'>
          <img src={sofa} alt="" />
          </div>
          <div className='absolute -top-10 mt  right-28'>
          <img src={interSet} alt="" />
          </div>
          <div className='absolute top-24 left-28'>
          <img src={img} alt=""  />
          </div>
    
        </div>

        <div className="border-2 border-red-600  relative md:w-full lg:w-1/2">
          <div className='text-5xl m-3'>
            <h1>About Us</h1>
          </div>
          <div className='text-justify p-5'>
            <p>We have a dedicated team to look after students and guide them to choose the best career options for them. Our team is available 24*7 to help students.</p>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
      <Services/>
      <HowWeWork/>
    </div>
  )
}
