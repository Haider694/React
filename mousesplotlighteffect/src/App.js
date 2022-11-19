import { useEffect, useState,useRef } from 'react';
import './App.css';
import { Circ, gsap } from "gsap";
export default function App() {
  const [mousePos, setMousePos] = useState({});
  const box = useRef()
  


  useEffect(() => {
    const handleMouseMove = (event) => {
      const overlay=document.querySelector('.overlay');
      const x=(event.clientX/overlay.clientWidth)*100;
      const y=(event.clientY/overlay.clientHeight)*100;
      gsap.to(overlay,{
        '--x':`${x}%`,
        '--y':`${y}%`,
        duration:0.3,
        ease:'sine.out'
      })

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove',handleMouseMove);
    };
  }, []);

  return (
    <div>
    <div className=' h-56'>
      <div className='w-full h-56 text-8xl absolute'>
        <h1>HI I AM HIST</h1>
      </div>
      <div ref={box} className='overlay w-full bg-black  h-56  absolute text-white text-8xl t-0'  >
        <h1>HI I AM HIST</h1>
      </div>
    </div>
  </div>
  );
}