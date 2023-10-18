//import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css'




const HTML = () => {


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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>HTML</b></h1>
        </div>
        <div className='html_content'>
        <p>It is the standard markup language used to create web pages and is an essential technology for building websites.</p>
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
        <p><b>1.HTML Form:-</b>Users can interact with a web page by entering data and using html. It allows for the collection of user data, including text,
        numbers, checkboxes, radio buttons, and more, and the transmission of that data to a web server for processing. On websites, forms are utilized for a 
        variety of functions, such as user registration, login, search functionality, data submission, and much more.
        Ex."form,input,textarea,select,button,label,fieldset,legend.</p></div>
        <p><b>2.HTML Graphics:-</b>HTML is largely used to structure a web page's content, which can include text, graphics, and other types of media.Ex- image, SVG, src.</p>
        <p><b>3.HTML Media:-</b>HTML offers a number of elements for including and displaying media material, including interactive features, audio, video, and photos, within web pages.
        Ex- Images, Audio, Video, canvas etc.</p>
        <p><b>4.HTML Semantic:-</b>HTML tags known as semantic elements provide information about the organization and content of a web page.</p>
        header, nav,main, article,section, aside, footer,figure,figcaption,time, mark etc.
        
        
        </div>
      </div>
      </div>
    </>
  )
}

export default HTML
