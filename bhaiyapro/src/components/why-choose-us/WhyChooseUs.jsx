import React from 'react'
import Globalized from "../../Image/Globalized.jpg"

export default function WhyChooseUs() {
    return (
        <div className='flex p-10 flex-col text-xl  mt-5'>
            <div className='text-5xl bg-slate-600'>
                <h1 className='p-2 text-white'>Why Choose Us</h1>
            </div>

            <details className='p-2 w-full h-fit mt-2 border-8 border-cyan-700  text-left fles justify-start items-start'>
                <summary className='...'>Top Colleges</summary>
                <p>We are provide you  intan top colleges from accross the India .</p>
            </details>

            <details className='p-2 w-full h-fit mt-2 border-8 border-cyan-700 text-left fles justify-start items-start'>
                <summary className='...'>Education Guidance</summary>
                <p>We are hear to guide you and your's childreen to get the colleges from accross the india.We guide reguaring to cources,fess,,placements and many more things </p>
            </details>

            <details className='p-2 w-full h-fit mt-2 border-8 border-cyan-700 text-left fles justify-start items-start'>
                <summary className='...'>NRI kota Admission</summary>
                <p>We also provide you college through NRI KOTA Admission </p>
            </details>

            <details className='p-2 w-full h-fit mt-2 border-8 border-cyan-700 text-left fles justify-start items-start'>
                <summary className='...'>Low Budget Package</summary>
                <p>If have low budget then we will also guide you under your budget</p>
            </details>

            <details className='p-2 w-full h-fit mt-2 border-8 border-cyan-700 text-left fles justify-start items-start'>
                <summary className=' ...'>Certifide Consuitancy</summary>
                <p>Most of pepole ask us that we are certifide Consultancy service are or not .then we are govermont certifide company </p>
            </details>
            <div className='flex justify-center m-10'>
                <img src={Globalized} alt="" />
            </div>

        </div>
    )
}
