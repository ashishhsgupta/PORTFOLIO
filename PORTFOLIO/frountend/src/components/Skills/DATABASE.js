// import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css'

const DATABASE = () => {

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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>DATABASE</b></h1>
        </div>
        <div className='html_content'>
        <p>(DBMS) is a group of applications that give users the ability to access databases, work with data, and produce reports and visual representations of data. Controlling database access also benefits from it.</p>
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
        <p><b>1.SQL:-</b>The language used to communicate with relational databases is called SQL. It enables users to carry out actions including data querying, record insertion, record updating, and record deletion from the database.</p>
        </div>
        <p><b>2.DBMS:-</b>A database management system (DBMS) is a piece of software that gives users and programs access to a database interface. It oversees operations like data retrieval, security, and integrity. Oracle Database, Microsoft SQL Server, MySQL, PostgreSQL, and other well-known DBMSs</p>
        <p><b>3.Table:-</b>The most popular kind of database is relational, and it organizes data into tables. Every table has rows and columns, where each row corresponds to a single record or data entry and each column to a particular attribute or field.</p>
        <p><b>4.Schema:-</b>The database schema specifies the database's structure, including the tables, columns, data types, restrictions, and connections between the tables. It serves as a manual for how data is arranged and kept.</p>
        
        </div>
      </div>
      </div>
  </>
  )
}

export default DATABASE
