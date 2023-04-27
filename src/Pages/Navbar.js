import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import css from './Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className={`navbar-brand ${css.logoBrand}`}>
          Ship<span>mate</span>
        </Link>
        <div>
          {
            !isLoggedIn && (
              <>
              <Link>
                <div onClick={() => setisLoggedIn(true)} className={`btn btn-primary p-0 py-1 px-4 ${css.loginBtn}`}>Login</div>
              </Link>
              <div className={`btn btn-outline-primary p-0 py-1 px-4 ms-3 ${css.signUpBtn}`}>Learn More</div>
            </>
            ) 
          }
          {
            isLoggedIn && (
              <>
                <Link to='/'>
                  <div onClick={() => setisLoggedIn(false)} title='logout' className={`btn btn-outline-primary p-0 px-2 me-2 ${css.payBtn}`}><i class="ri-logout-box-line"></i></div>
                </Link>
                <div className={`btn btn-outline-primary p-0 px-2 ${css.payBtn}`}>$</div>
                <Link to='/booking'>
                  <div className={`btn btn-primary p-0 py-1 px-2 ms-3 ${css.loginBtn}`}>Track Shipment</div>
                </Link>
              </>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar