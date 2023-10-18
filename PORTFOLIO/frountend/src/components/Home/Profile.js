import React from 'react'
import "./Home.css";
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import myPhoto from '../../Images/myPhoto.png';
import {Link} from "react-router-dom";
import Axios from "axios";
import FileDownload from "js-file-download";




const Profile = () => {

  const download = (e)=>{
    e.preventDefault()
    Axios({
      url:"http://localhost:3000",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      FileDownload(res.data,"resume.pdf")
    })
  }


  return (
    <>
    <Header />
    <div className="home_container">
      <Sidebar />
      <div className='home_class1'>
        <div className='home_class2'><img src={myPhoto} alt='Not' /></div>
        <div className='home_class3'>
          <span>Ashish Kumar Gupta</span><br/>
          <span>Web Developer (React + Node)</span>
        </div>
        <div className='home_class4'>
          <div className='home_address' style={{cursor:"pointer"}}>ashishhsgupta11@gmail.com</div>
          <div className='home_address'>+918928039177</div>
          <div className='home_address'>Vashi Navi Mumbai 400703</div>
        </div>
        <div className='home_class5'>
          <div className='social_link'><b>heroku:</b>ashishProject</div>
          <div className='social_link'><b>LinkdIn:</b>www.linkedin.com/in/ashishhsgupta11</div>
          <div className='social_link'><b>Github:</b>https://github.com/ashishhsgupta</div>
        </div>
        <div className='home_class6'>
          <span style={{fontSize:"23px" }}>About me:-</span><br/>
          <span>
          Pursuing post graduate(MCA) with a degree in computer science. Abreast in coding languages like HTML, CSS, JS, and DATABASE. Advanced expertise in developing and constructing computer networks and systems. Developed skills to manage projects under pressure during college.
          A driven and committed person looking for a job to utilize and further develop these skills.”
          </span>
        </div>
        <div className='home_class7'>
          <span><b>Skills:-</b> HTML, CSS, JAVA SCRIPT, REACT JS, DATABASE, NODE JS, GITHUB. </span>
          <br/> <span><b>Education:-</b>  Pursuing MCA (2022).</span>
        </div>
        <Link to="" className='resume' onClick={(e)=>download(e)}>Download Resume</Link>
    </div>
    </div>
    
    </>
  )
}

export default Profile