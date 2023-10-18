import React from 'react'
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import HTML_logo from '../../Images/HTML_logo.png';
import CSS_logo from '../../Images/CSS_logo.png';
import BOOT_logo from '../../Images/BOOT_logo.png';
import JS_logo from '../../Images/JS_logo.png';
import REACT_logo from '../../Images/REACT_logo.png';
import MYSQL_logo from '../../Images/MYSQL_logo.png';
import NODE_logo from '../../Images/NODE_logo.png';
import GIT_logo from '../../Images/GIT_logo.png';



const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='sidebar_container'>
        <nav className='sidebar_nav'>
            <ul className='sidebar_userlist'>
                <div className='sidebar_link' onClick={() => navigate("/html")} >
                <img src={HTML_logo} alt="Not" width={"80px"} />
                <li className='sidebar_list'>HTML</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/css")}>
                <img src={CSS_logo} alt="Not" width={"80px"} />
                <li className='sidebar_list'>CSS</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/boot")}>
                <img src={BOOT_logo} alt="Not" width={"80px"} />
                <li className='sidebar_list'>BOOTSTRAP</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/js")}>
                <img src={JS_logo} alt="Not" width={"80px"} />
                <li className='sidebar_list'>JAVA SCRIPT</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/react")}>
                <img src={REACT_logo} alt="Not" width={"80px"} />
                <li className='sidebar_list'>REACT JS</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/database")}>
                <img src={MYSQL_logo} alt="Not" width={"80px"} />
                <li className='sidebar_list'>DATABASE</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/node")}>
                <img src={NODE_logo} alt="Not" width={"80px"} /><li className='sidebar_list'>NODE JS</li>
                </div>
                <div className='sidebar_link' onClick={() => navigate("/git")}>
                <img src={GIT_logo} alt="Not" width={"80px"} /><li className='sidebar_list'>GIT</li>
                </div>
            </ul>
        </nav>
    </div>
    
    </>
  )
}

export default Sidebar