import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Create() {
  const [values,  setValues]= useState({
    name:'',
    email:''
  })
  const navigagate= useNavigate();

  const handleSubmit = (e) => {
    e .preventDefault();
    axios.post('http://localhost:6400/student',values)
    .then(res =>{
      console.log(res);
      navigagate('/')
    })
    .catch(err  => console.log(err))
  }
    
  return (
     <div className='d-flex vh-100 bg-primary  justify-content-center aliignn-items-center'>
        <div className ='w100 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
           <h2> Add  Student</h2>
           <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' 
            onChange={e => setValues({...values, name:  e.target.value})}/>
           </div>
           <div className='mb-2'>
           <label htmlFor="">Email</label>
           <input type="email" placeholder='Enter Email' className='form-control'
           onChange={e => setValues({...values, email:  e.target.value})}/>
           </div>
           
            <button className='btn btn-success'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Create

