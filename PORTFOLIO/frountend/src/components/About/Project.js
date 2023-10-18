import React from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './About.css';




const Project = () => {



  return (
    <>
    
     <Header/>
      <div className='page_flex'>
        <Sidebar/>
        <div className='project_data'>
          <div className='project_subdata'>
        <h2 style={{textAlign:'center'}}>Our Projects:</h2>
        <div>
          <p><b>1.</b><span>I have build one personal project like- Ticketing tool for helpdesk
            using full stack technologies React.JS, Node.JS and MongooseDB. and also uploaded on Github repository,
            </span></p>
        </div>
        <div>
          <p><b>2.</b> <span>I have build some personal project like- MYPORTPHOLOI
            using full stack technologies using React.JS, Node.JS and MongooseDB. and also uploaded on Github repository.</span></p>
        </div>
        <div>
        <p><b>3.</b> <span>Build a frountend page (<b>mi clone</b>) using React.js</span></p>
        </div>
        <div>
          <p><b>4.</b> <span>Build a frountend page using React.js</span></p>
        </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default Project
