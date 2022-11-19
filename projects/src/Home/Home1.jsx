import React from 'react'
import img1 from './Image/img1.jpg'
import DesignH from '../Design-patt/DesignH'
import DesignV from '../Design-patt/DesignV'
import { BsFillBookmarkFill } from "react-icons/bs";

export default function Home1() {
    return (
        <>
            <div className='flex flex-col md:flex-row '>
                <div className='border relative  lg:w-3/4 md:w-full  flex flex-row'>
                    <div>
                        <div><DesignH /></div>
                        <div className='flex text-6xl flex-row justify-end h-80 w-full '>
                            <div className='text-start w-full flex ml-11 flex-col  '>
                                <h1>ART</h1>
                                <h1><span className='bg-red-600 text-white'>SPACE</span>LESS</h1>
                                <h1>GALLERY</h1>
                            </div>
                        </div>
                        <div className=' w-full h-52 justify-center item-center'>
                            <div className='flex flex-row mr-10 ml-10'>
                                <div className='w-48 pt-10 pl-28 '>
                                    <h2>27.03---- </h2>
                                </div>
                                <div className='text-start  pt-10'>
                                    <div className='...'>
                                        <h3><b>GABRIEL SOBIN </b></h3>
                                        <h3><b>EXPRESSION D'IMPRESSION</b></h3>
                                        <h3><b>THE SHOW WE MADE AT HOME</b></h3>
                                    </div>
                                    <div>
                                        <p>A group exhibition of word by Lara Porzak and Pierre Bonnefills</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' ml-0  w-56 h-90  border'>
                        <div className='border-b-1 overflow-hidden h-48'>
                            <img className='h-48 ' src={img1} alt="" />
                        </div>
                        <div className='m-10 mt-80  '>
                            <DesignV />
                        </div>
                    </div>
                    
                    <div className='absolute p-8 bottom-72    right-36 rotate-90 rounded-full   w-20 h-20 bg-white'>
                        <div className='w-10 h-10 bg-red-600 -m-3 p-3 rounded-full'>
                        <BsFillBookmarkFill className='text-white bg-red-600'/>
                        </div>
                        
                    </div>
                    


                </div>
                <div className='border lg:w-2/4 md:w-full  flex flex-col'>
                    <div className='flex md:w-full justify-center h-48 border'>
                        <div className='p-10 h-48  w-1/2 '>
                            <p><span><b>the Spaceless Gallery</b></span> beyond the walls of a traditional white clube apace</p>
                        </div>
                        <div className='h-48 w-1/2 bg-red-500 '>
                            <img className='h-48 w-full relative ' src={img1} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col text-center p-10 justify-center item-center '>
                        <div className=''>
                            <h3>Felicie d,Estienne s,Overess</h3>
                        </div>
                        <div className=''>
                            <h1 className='text-6xl'>HAIDER ALI</h1>
                        </div>

                    </div>
                    <div className='flex flex-row  border-2'>
                        <div className='h-72 w-1/2'>
                            <img className='h-72' src={img1} alt="" />
                        </div>
                        <div className='text-6xl w-1/2 p-16'>
                            <div>
                                <h1>20</h1>
                            </div>
                            <div>
                                <h1>21</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
