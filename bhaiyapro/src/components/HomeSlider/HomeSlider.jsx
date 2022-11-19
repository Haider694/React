import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import cover1 from "../../Image/cover1.jpg"
import cover2 from "../../Image/cover2.jpg"
import cover3 from "../../Image/cover3.jpg"


export default function HomeSlider() {
    const [image, setimage] = useState([cover1, cover2, cover3])
    const [textSlider, settextSlider] = useState(["haider", "ali", "khan"])

    const [index, setIndex] = useState(0);

    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    function interval() {
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === image.length - 1 ? 0 : prevIndex + 1
                ),
            2000
        );
    }


    useEffect(() => {
        resetTimeout();
        interval();
        return () => {
            resetTimeout();
        };
    }, [index]);

    const next=() => {
        if (index < image.length - 1) {
            setIndex(index + 1);
            resetTimeout();
        }
        else{
            setIndex(0);
            resetTimeout();
        }
        
    }


    return (


        <div>
            <div className='relative cursor-pointer ' >
                <div className='relative overflow-hidden w-full  h-64 lg:h-96 ' key={index} >
                    <div className='absolute flex text-7xl bg-black/30 justify-center items-center w-full h-full  text-white'>
                        <h1>{textSlider[index]}</h1>
                    </div>
                    <img className='block w-full  h-64 lg:h-96 rounded-lg' src={image[index]} alt={image[index]} />
                </div>
                <div className='h-full lg:pt-40 pt-28 flex flex-row w-full  absolute top-0 ' onMouseOver={resetTimeout} onMouseLeave={interval}>
                    <div className='w-1/2 ' onMouseOver={resetTimeout} onMouseLeave={interval}>
                        <FiChevronRight fontSize={40} className='text-white cursor-pointer' onMouseOver={resetTimeout} onMouseLeave={interval}
                        onClick={next}                   
                        />
                    </div>
                    <div className='flex justify-end -end w-1/2' onMouseOver={resetTimeout} onMouseLeave={interval} >
                        <FiChevronLeft fontSize={40} className='text-white cursor-pointer' onMouseOver={resetTimeout} onMouseLeave={interval}
                            onClick={() => {
                                if (index >0) {
                                    setIndex(index - 1)
                                }
                                else{
                                    setIndex(image.length-1)
                                }
                                resetTimeout()
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
