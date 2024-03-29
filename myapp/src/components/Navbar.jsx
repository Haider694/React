import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div className='container'>
            <Link className="navbar-brand fw-bold fs-4" to="/">COLLECTION</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
              </ul>
              <div className='"buttons'>
                <Link to="/login" className="btn btn-outline-dark">
                  <i className="fafa-sign-in me-1">Login</i>
                </Link>
                <Link to="/signup" className="btn btn-outline-dark">
                  <i className="fafa-user-plus me-1">Register</i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
