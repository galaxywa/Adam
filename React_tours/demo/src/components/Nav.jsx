import React from 'react'
import logo from '../images/logo.svg';
import PageLinks from './PageLinks';

import IconLinks from './IconLinks';
function Nav() {
return (<>
    <nav className='navbar'>
    <div className='nav-logo'>
        <a href='#home'>
            <img src= {logo} className='logo-link' alt='logo' />
        </a>
    </div>

    <div className='nav-links'>
        <PageLinks parentClass='nav-list' itemClass='nav-link' id='nav-list' />

    </div>
    <div className='nav-icons'>
   
    <IconLinks parentClass='nav-icons-list' itemClass='nav-icon' /> 
  
    </div>

    <div className='nav-mobile'>
        <button type='button' className='nav-mobile-toggle' id='nav-mobile-toggle'>
        
            <i className='fa-solid fa-bars'></i>
        </button>
        <PageLinks parentClass='mobile-nav-list' itemClass='mobile-nav-link' id='mobile-nav-list' />
       
    </div>
</nav>
</>
  )
}

export default Nav