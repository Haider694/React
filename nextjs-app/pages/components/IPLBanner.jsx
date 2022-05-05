import React from 'react'
import Image from "next/image";
import PrizeTable from './PrizeTable'
import style from './IPLBanner.module.css'
import Modal from 'react-modal'
import {useState} from 'react';
import c from 'clsx';
export default function IPLBanner() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  return (

    <div className={c(style.container, "d-flex mb-3 p-3 justify-content-center")}>
      <div className="p-2">
        <Image src="/images/global.png" className=" float-start " alt="ipl" height={100} width={90} />
      </div>

      <div className='fw-bold w-50'>
        <h3>mGamer Fantasy IPL League</h3>
        <h3 className='mb-2 fs-xl-2'>
          Prize Pool : 10,000
        </h3>
        <button onClick={() => setModelIsOpen(true)} type="button" className={c(style.button)} colorScheme={"brand"}>
          Rank Wise Prize Distrinution
        </button>
        <Modal height={50} style={{ width:"80%" }} isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)}>
          <div className="container">
          <div className="btn-close float-end" onClick={() => setModelIsOpen(false)}></div>
            <PrizeTable/>
          </div>
               
        </Modal>

      </div>
    </div>

  )
}
