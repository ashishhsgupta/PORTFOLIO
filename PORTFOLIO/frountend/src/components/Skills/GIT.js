//import React from 'react'
import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './Skills.css';

const GIT = () => {

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
          <h1 style={{textAlign:'center', margin:"20px"}}><b>GIT</b></h1>
        </div>
        <div className='html_content'>
        <p><b>Git</b> is a distributed version control system (DVCS) used to monitor updates to computer files. Git is often used for collaborative software development because it enables programmers to work on various components of a project simultaneously and then integrate their changes when they are finished. </p>
        <div className='git_skills'>
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
        <br/><input type='radio' checked /><b>-Skills.</b>
        <br/><input type='checkbox' checked />-<b>git init:</b> Initializes a new Git repository in the current directory.
        <br/><input type='checkbox' checked />-<b>git clone:</b>Creates a copy of a remote Git repository on your local machine.
        <br/><input type='checkbox' checked />-<b>git add:</b> Stages changes for commit.
        <br/><input type='checkbox' checked />-<b>git commit -m "message":</b> Commits staged changes with a descriptive message.
        <br/><input type='checkbox' checked />-<b>git status:</b> Shows the status of your working directory and staged changes.
        <br/><input type='checkbox' checked />-<b>git log:</b> Displays a log of all commits in the current branch.
        <br/><input type='checkbox' checked />-<b>git remote:</b> Lists all remote repositories.
        <br/><input type='checkbox' checked />-<b>git remote add "name" "url": </b>Adds a remote repository.
        <br/><input type='checkbox' checked />-<b>git push "remote" "branch":</b> Pushes your changes to a remote repository.
        <br/><input type='checkbox' checked />-<b>git pull "remote" "branch":</b> Fetches changes from a remote repository and 
        </div>
        
        </div>
      </div>
      </div>
    </>
  )
}

export default GIT
