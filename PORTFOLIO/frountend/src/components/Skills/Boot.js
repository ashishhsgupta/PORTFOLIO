// import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css';


const Boot = () => {

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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>BOOTSTRAP</b></h1>
        </div>
        <div className='html_content'>
        <p>To make it simple and quick for developers to create responsive and aesthetically pleasing websites and online apps, Bootstrap offers a library of pre-designed HTML, CSS, and JavaScript components and templates. </p>
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
        <p><b>1.Responsive design:-</b>The responsive design features of Bootstrap are well recognized. It has a responsive grid system that enables programmers to design layouts that fit various screen sizes and gadgets, guaranteeing a consistent and user-friendly experience on computers, tablets, and mobile devices.</p>
        </div>
        <p><b>2.Pre-designed Componenets:-</b>There are many pre-designed UI elements included with Bootstrap, including navigation bars, buttons, forms, modals, alerts, carousels, and more. Developers can save a lot of time with these components because they are easily customizable and integrated into web projects.</p>
        <p><b>3.CSS Framework:-</b>With a selection of predefined classes and styles, Bootstrap offers an extensive CSS framework. HTML elements can be given these classes to modify their look and function. As a result, less specific CSS coding is required and design consistency is maintained.</p>
        
       </div>
      </div>
      </div>
    </>
  )
}

export default Boot
