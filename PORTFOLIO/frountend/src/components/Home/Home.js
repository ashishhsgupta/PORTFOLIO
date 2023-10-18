import React from 'react'
import "./Home.css";
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import { useNavigate } from 'react-router';





const Home = () => {
  const navigate = useNavigate();
 

  return (
    <>
     
    <Header />
    <div className="home_container">
      <Sidebar />
     <div className='bg_img'>
     <div className='round'></div>
     <div className='middle_round'>
<div>
<div style={{fontSize:'40px', color:'white'}}>Ashish Kumar Gupta</div>
<div style={{fontSize:'30px', color:'white'}}>Front-End Developer</div>
<div className='vProfile'>
    <button onClick={()=>navigate('/profile')}>View Profile</button>
    <a href="https://www.linkedin.com/in/ashishhsgupta11/" target='_blank' rel="noreferrer" style={{background:'none', marginLeft:'40px'}}>
   <button style={{background:'none', marginLeft:'40px'}} >Connect Me</button>
   </a>
</div>
</div>
<div className='round2'></div>
<div className='round3'></div>

</div>
<div className='round4'></div>       
</div>
</div>
    
    </>
  )
}

export default Home

