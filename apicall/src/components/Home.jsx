import React from 'react'
import ProdectList from './ProdectList'

export default function Home() {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white  border-0">
        <img src="../images.jpg" className="card-img" alt="Backgoung" height={450} />
        <div className="card-img-overlay">
          <div className='container'>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <ProdectList />
    </div>


  )
}
