import React from 'react'

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>Globalized Education Services has launched a unique career counselling program to help students to make a wise career decision. We aim at guiding the students towards a career path that best suits their interests, aptitude and capability. Globalized Education Services has been giving quality services to students for admissions in graduation and post-graduation courses since 2008.</p>
      <p>We do counselling in india and Abroaad also.Ther are so many Colleges we are tie with them.</p>
      <div>
        <h3>We guide in different Fileds .they are </h3>
        <details className='p-2 w-full h-fit mt-2 border-8 border-cyan-700  text-left fles justify-start items-start'>
          <summary className='...'>ENGINEERING</summary>
          <div>
            <p>here is some of tops colleges</p>
          </div>
          <div>
            <img src="RV COLLEGE OF ENG" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </details>

        <ul>
          <li>ENGINEERING</li>
          <li>LOW</li>
          <li>HOMOPATHIC</li>
          <li>NURCING</li>
          <li>PHARAMACY</li>
          <li>AGRICALTURE</li>
          <li>PAHRMACY</li>
          <li>MADICAL SCIENCE</li>
          <li>MANAGEMENTS</li>
        </ul>
      </div>
    </div>
  )
}
