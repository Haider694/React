import logo from './logo.svg';
import './App.css';
import Home1 from './Home/Home1';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

function App() {

  const list = [

    { navli: "Home" }, { navli: "Projects" }, { navli: "About" }, { navli: "Press" }, { navli: "Store" }
  ]
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div >
      <div className='flex p-10 justify-center item-center '>
        <div className='w-80 lg:w-1/5'>
          <h1>the<b>Spaceless</b>Gallery</h1>
        </div>
        <nav className='lg:w-4/5 flex md:flex hidden justify-center'>
          <ul className=' flex-row gap-11 justify-between item-center flex-initial'>
            {
              list.map((lis) => {
                return (
                  <li className="">{lis.navli}</li>
                )

              })
            }
          </ul>
          <div className=' w-56 lg:w-1/4  flex justify-end pl-26 '>
          <button className='border-red-600 border border-solid rounded-lg p-2'>Sign up</button>

        </div>
        </nav>
        <div className='flex  justify-end items-end lg:w-0 relative'>
        {
          toggleMenu
            ? <AiOutlineClose fontSize={28} className='text-black hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
            : <AiOutlineMenu fontSize={28} className='text-black md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <ul className='text-white bg-red-800/50 z-10 fixed top-0 -left-0 p-3 w-full h-screen 
            shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md ' >
              <li className='text-xl w-full my-2'>
                <AiOutlineMenu fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
              </li>
            </ul>
          )
        }


      </div>
      </div>
      
      <div>
        <Home1 />
      </div>


    </div>
  );
}

export default App;
