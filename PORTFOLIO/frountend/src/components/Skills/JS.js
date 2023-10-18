// import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css'

const JS = () => {
  
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedSkill, setEditedSkill] = useState("");

  const addSkills = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, { name: newSkill, isEditing: false }]);
      setNewSkill("");
    }
  };

  const editSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].isEditing = true;
    setSkills(updatedSkills);
    setEditIndex(index);
    setEditedSkill(updatedSkills[index].name);
  };

  const saveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].name = editedSkill;
    updatedSkills[index].isEditing = false;
    setSkills(updatedSkills);
    setEditIndex(null);
  };

  const deleteSkill = (index) => {
    const newColumns = [...skills];
    newColumns.splice(index, 1);
    setSkills(newColumns);
  };

  return (
    <>
       <Header/>
      <div className='page_flex'>
        <Sidebar/>
        <div className='html_model'>
        <div className='html_submodel'>
          <h1 style={{textAlign:'center', margin:"20px"}}><b>JAVASCRIPT</b></h1>
        </div>
        <div className='html_content'>
        <p>Websites and web applications can be enhanced using it to provide functionality, interactivity, and dynamic behavior. Due to its ability to manipulate
         web page content and engage users, JavaScript is frequently referred to as a "client-side" language.</p>
         <br/><input type='radio' checked /><b>-Skills:</b>
         <div className='add_skills' style={{textAlign:'left'}}>
      <div className='skill_column'>
        <input
          type="text"
          placeholder="Add more skills"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkills}>Skills +</button>
      </div>
      <ul>
        {skills.map((column, index) => (
          <li key={index}>
            {column.isEditing ? (
              <div className='skill_column'>
                <input
                  type="text"
                  value={editedSkill}
                  onChange={(e) => setEditedSkill(e.target.value)}
                />
                <button onClick={() => saveSkill(index)}>Save</button>
              </div>
            ) : (
              <span>{column.name}</span>
            )}
            <div className='skill_column'>
            <button onClick={() => editSkill(index)}>Edit</button>
            <button onClick={() => deleteSkill(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
        <div className='html_para'>
        <p><b>1.Client-site scripting:-</b>The majority of JavaScript's execution occurs on the client-side, which means that rather than taking place on a server, it does so in the user's web browser.
         As a result, there is no need to contact a server for each action, enabling real-time interaction.</p>
        </div>
        <p><b>2.Web development:-</b>
        A fundamental tool for creating websites is JavaScript. Form validation, animations, sliders, image galleries, and other interactive and dynamic features are made possible by this technique.
        Additionally, it can be utilized to change web page content without necessitating a complete page reload by obtaining data from servers via AJAX.</p>
        <p><b>3.Programming language:-</b>A complete programming language, avaScript supports variables, data types, functions, loops, conditionals, and more. Its versatility and capability enable developers to create intricate applications.</p>
        <p><b>4.Integretion:-</b>JavaScript is a necessary component of front-end web development since it is simple to incorporate into HTML and CSS. To construct full-stack web applications, it's frequently used in conjunction with back-end technologies like Node.js.</p>
        
        
        </div>
      </div>
      </div>
    </>
  )
}

export default JS
