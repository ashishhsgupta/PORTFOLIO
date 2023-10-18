// import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css'

const NODE = () => {

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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>NODE JS</b></h1>
        </div>
        <div className='html_content'>
        <p>JavaScript code can be run outside of a web browser using Node.js, an open-source, cross-platform runtime environment. It is suited especially well for creating server-side and network applications and is developed for creating scalable network applications.</p>
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
        <p><b>1.NPM (Node package manager):-</b>Npm, a package manager that gives users access to a sizable ecosystem of open-source libraries and modules, is a component of Node.js. To increase the functionality of their Node.js apps, developers may easily install, manage, and distribute packages.</p>
        </div>
        <p><b>2.Server side development:-</b>Server-side applications like web servers, RESTful APIs, real-time apps (like chat applications and online games), and microservices are frequently created with Node.js.</p>
        <p><b>3.Scalability:-</b>Scalable apps can be created with Node.js because of its reputation for handling numerous concurrent connections effectively. To spread incoming requests across several Node.js instances or processes, it is frequently used in conjunction with load balancing and clustering techniques.</p>
        
        </div>
      </div>
      </div>
    </>
  )
}

export default NODE
