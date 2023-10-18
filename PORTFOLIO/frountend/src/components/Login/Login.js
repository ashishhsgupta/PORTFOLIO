import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

const navigate = useNavigate()

const [formData, setFormData] = useState({
  email: '', 
  password:'',
})

const [errors, setErrors] = useState({})

const handleChange = (e) =>{
  const {name,value}= e.target;
  setFormData({...formData, [name]: value})
}

const handleSubmit =(e) =>{
  e.preventDefault()
  const validationErrors = {}
  if(!formData.email.trim()){
    validationErrors.email="*Required"
  }else if(!/\S+@\S+\.\S+/.test(formData.email)){
    validationErrors.email='*Invalid Email'
  }
  if(!formData.password.trim()){
    validationErrors.password="*Required"
  }else if(formData.password.length < 6){
    validationErrors.password= '*Must be 6 characters.'
  }else if(formData.password.length > 10){
    validationErrors.password= '*Less than 10 characters.'
  }
  setErrors(validationErrors)
  if(Object.keys(validationErrors).length===0){
    alert("Login successfully")
    navigate('/Home')
  }
}

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
            <div className='class4'><h2><h2>Login Page</h2></h2></div>
            <div className='class5'>
            </div>
          </div>
          <div className='class7'>
           <div className='class8'>
            <label style={{color:'blueviolet'}}>Email:<br/>
            <input type="text" name='email' placeholder='Enter email id' onChange={handleChange} />
            </label>
            {errors.email && (<span className='errors'>{errors.email}</span>)}
            <label style={{color:'blueviolet'}}>Password:<br/>
            <input type="password" name='password' placeholder='Enter password' onChange={handleChange} autocomplete="off"/>
            </label>
            { errors.password && (<span className='errors'>{errors.password}</span>)}
           </div>
           <div className='class9'>
            <div><button onClick={()=>navigate('')} style={{background:'#0E6251',color:'white'}}>Submit</button></div>
           <Link to="/"><div className='class10' style={{color:"blue",fontSize:"20px",margin:"10px"}}>If not Registered? Signup </div></Link> 
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

export default Login