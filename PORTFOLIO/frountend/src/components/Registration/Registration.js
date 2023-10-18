import React, { useState } from 'react'
import  "../Registration/Registration.css";
import { Link, useNavigate }from 'react-router-dom';
import axios from 'axios';


const Registration = () => {

  const navigate = useNavigate();

const [values, setValues] = useState({
  name: '',
  email: '',
  password: ''
})

const [errors, setErrors] = useState({})

const handleChange = (e)=>{
  const {name,value} = e.target;
  setValues({...values, [name] : value})
}

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post("http://localhost:2001/signup", values)
  .then((response)=> {
    console.log(response);
    navigate("/login")
  }).catch(function (error){
    console.log(error);
  });
  const validationErrors = {}
  if(!values.name.trim()) {
    validationErrors.username = "*Required."
  }
  if(!values.email.trim()) {
    validationErrors.email= "*Required"
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
    validationErrors.email = "*Invalid email."
  }
  if(!values.password.trim()) {
    validationErrors.password = "*Required"
  }else if(values.password.length < 6){
    validationErrors.password="*Greater than 6 chars"
  }else if(values.password.length > 10){
    validationErrors.password="*Less than 10 chars"
  }
  setErrors(validationErrors)
  if(Object.keys(validationErrors).length === 0) {
    alert("Registered successfully")
    navigate('/Login')
  }
}
 console.log({values});
  return (
  <>
  
  <div className='container'>
    <h2>MY PORTFOLIO</h2>
   <div className='middle_container'>
    <div className='sub_middle_container'>
      <div className='profile_tag'>
        <h1>Welcome</h1><br/>To my digital<br/>portfolio..
        <p>Here's we have discribed my academic journey and skills.</p><br/>
        Build's some personal project during MCA semesters. 
      </div>
      <div className='details_container'>
      <div className='class1'>
        <form onSubmit={handleSubmit}>
        <div className='class2'>
          <div className='class3'>
            <div className='class4'><h2><h2>Registration Page</h2></h2></div>
            {/* <div className='class5'>
              <div className='class6'>
                <label for="toggle" className='toggleContainer'>
                  <div>Registration</div>
                  <div>Login dashboard</div>
                </label>
      
              </div>
            </div> */}
          </div>
          <div className='class7'>
           <div className='class8'>
            <label style={{color:'blueviolet'}}>User name:<br/>
            <input type="text" name='name' placeholder='Enter user name' onChange={handleChange} />
            {errors.username && <span className='errors'>{errors.username}</span>}
            </label>
            <label style={{color:'blueviolet'}}>Email:<br/>
            <input type="text" name='email' placeholder='Enter email id' onChange={handleChange} />
            {errors.email && <span className='errors'>{errors.email}</span>}
            </label>
            <label style={{color:'blueviolet'}}>Password:<br/>
            <input type="password" name='password' placeholder='Enter password' onChange={handleChange} autocomplete="off"/>
            {errors.password && <span className='errors'>{errors.password}</span>}
            </label>
           
           </div>
           <div className='class9'>
            <div><button onClick={()=> navigate('')} style={{background:'#0E6251',color:'white'}}>Submit</button></div>
            <Link to="login"><div className='class10' style={{color:"blue", fontSize:"20px",margin:"10px"}}>If Registered? SignIn </div></Link>
           </div>
          </div>
        </div>
        </form>
      </div>
   
      </div>
     
    </div>
   </div>
  </div>
  
  </>
  )
}

export default Registration