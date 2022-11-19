import React from 'react'
import logo from '../../Image/Logo-2.png'
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navdata = [
    { id: 1, to: '/', list: 'Home' },
    { id: 3, to: '/about', list: 'About Us' },
    { id: 2, to: '/blog', list: 'Blog' },
    { id: 5, to: '/contectus', list: 'Contect Us' }
  ]
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=" w-full md:bg-emerald-700 m-5 flex md:justify-center lg:justify-between  item-center  p-4">
      <div className=" md:flex-[0.5] flex p-0 m-0 justify-start items-start">
        <img className='h-16 w-24' src={logo} alt="" />
      </div>
      <div className='mt-5'>
        <ul className=" md:flex hidden  list-none flex-row justify-between item-center flex-initial " >
          {
            navdata.map((nav) => {
              return (
                <li className='mx-4 cursor-pointer hover:text-emerald-700' key={nav.id}>
                  <NavLink to={nav.to}>{nav.list}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='flex m-5 justify-end items-end w-full lg:w-0 relative'>
        {
          toggleMenu
            ? <AiOutlineClose fontSize={28} className='text-white hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
            : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <ul className='text-white bg-emerald-800/50 z-10 fixed top-0 -left-0 p-3 w-full h-screen 
            shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md ' >
              <li className='text-xl w-full my-2'>
                <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
              </li>
              {
                navdata.map((nav) => {
                  return (
                    <li className='mx-4 cursor-pointer ' key={nav.id}>
                      <NavLink to={nav.to} className='my-2 text-5xl' onClick={() => setToggleMenu(false)} >{nav.list}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          )
        }


      </div>
    </nav>
  )
}
