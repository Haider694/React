import React from 'react'
import WhyChooseUs from '../why-choose-us/WhyChooseUs'

export default function About() {
  return (
    <div>
      <div className="border-2 border-red-600-50 relative md:w-full lg:w-1/2">
        <div className='text-5xl m-3'>
          <h1>About Us</h1>
        </div>
        <div className='text-justify p-5'>
          <p>Globalized Education Services is an innovative Education Consultants across India providing solutions to students for pursuing their Under Graduation and Post-Graduation.</p>
          <p>Globalized Education Services was established in the year 2008. We are one of the leading education consultants across India representing over 300+ premier universities/colleges all over India. Our roots have spread wide to all major cities in India. Our head office located in Bengaluru.</p>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  )
}
