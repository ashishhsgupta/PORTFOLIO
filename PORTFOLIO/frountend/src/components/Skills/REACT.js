// import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css'

const REACT = () => {

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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>REACT</b></h1>
        </div>
        <div className='html_content'>
        <p>ReactJS is a free JavaScript library used to create front-end programs and user interfaces (UIs). One of the most well-liked and commonly used front-end libraries for developing websites is React.</p>
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
        <p><b>1.Component-based:-</b>Utilizing reusable components, React apps are created. These parts contain the logic and rendering for a specific section of the user interface. Applications are simpler to manage and scale because to this modular design.</p>
        </div>
        <p><b>2.JSX:-</b>JSX is a JavaScript syntactic extension that enables you to construct HTML-like code inside of JavaScript. It is simpler to explain the UI structure and the interactions between components when writing React components using JSX.</p>
        <p><b>3.React Router:-</b>React Router is frequently used to create single-page applications with many views or pages. It offers a method for controlling and switching between various routes or views in a React application.</p>
        <p><b>4.State management:-</b>The state of components can be updated and managed with React. React will automatically re-render the component if a component's state changes, making sure that the user interface (UI) reflects the new state.</p>
        
        
        </div>
      </div>
      </div>
    </>
  )
}

export default REACT
