import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
// import  useState  from 'react';

const Header = () => {


  return (
    <>
    <div className='container1'>
      <div className='sub_container1'>
        <div className='header_search'>
        <h3>Ashish kumar gupta</h3>
        <input type='search' placeholder='Search here...' />
        
        </div>
        <div className='middle_sub_container1'>
          <nav className='nav_bar'>
            <ul className='nav_list'>
                <li className='nav_link'><Link to="/home" className='linklist'>Home</Link></li>
                <li className='nav_link'><Link to="/qualification"  className='linklist'>Qualifications</Link></li>
                <li className='nav_link'><Link to="/certification" className='linklist'>Certifications</Link></li>
                <li className='nav_link'><Link to="/project" className='linklist'>Project</Link></li>
                <li className='nav_link'><Link to="/login" className='logout'>Logout</Link></li>
            </ul>
        </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header