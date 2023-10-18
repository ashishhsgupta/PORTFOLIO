// import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css'

const CSS = () => {

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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>CSS</b></h1>
        </div>
        <div className='html_content'>
        <p>Cascading Style Sheet (CSS) is used to set the style in web pages that contain HTML elements. It sets the background color, font-size, font-family, color, … etc.</p>
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
        <p><b>1.Inline CSS:-</b>Inline CSS is a style sheet format that includes a CSS attribute in the body of an element. In an HTML tag, the style attribute is used to provide this kind of style.</p>
        </div>
        <p><b>2.Internal CSS:-</b>When only one HTML document needs to be styled differently, this can be utilized. The head part of the HTML document should contain the CSS rule set, which is done by embedding the CSS within the style tag.</p>
        <p><b>3.Externam CSS:-</b>The use of tag attributes, such as class, id, header, etc., allows external CSS to contain independent CSS files that simply contain style properties. The HTML text should be linked to the CSS property 
        using a link tag since it is written in a separate file with the.css extension. It implies that a single style setting will be used across all web pages for each element.</p>
        
        </div>
      </div>
      </div>
    </>
  )
}

export default CSS
