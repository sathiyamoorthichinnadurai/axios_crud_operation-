import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Create() {
  const navigate=useNavigate()
  const [value,setvalue]=useState({
    name:'',
    email:'',
    phone:''
  })
 const handlesubmit =(event)=>{
   event.preventDefault();
  axios.post('http://localhost:3003/users',value)
   .then((res)=>{
      console.log(res)
      navigate('/')
  })
  .catch(err=>console.log(err));
}
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center ' >
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded w-100 '>
          <h1>Add a User </h1>
          <form  onSubmit={handlesubmit}>
            <div className='mb-2'>
              <label htmlFor="name"><h3 className='text-danger'>Name</h3></label>
              <input type="text" name='name' className='form-control' placeholder='Enter a Name'  onChange={e=>setvalue({...value,name:e.target.value})}/>
            </div>
            <div className='mb-2'>
              <label htmlFor="email"><h3 className='text-danger'>Email</h3></label>
              <input type="email" name='email' className='form-control' placeholder='Enter a email' onChange={e=>setvalue({...value,email:e.target.value})}/>
            </div>
            <div className='mb-2'>
              <label htmlFor="text"><h3 className='text-danger'>Phone</h3></label>
              <input type="text" name='phone' className='form-control' placeholder='Enter a Phonenumber'  onChange={e=>setvalue({...value,phone:e.target.value})}/>
            </div>
            <button  className='btn btn-success'>Submit</button>
            <Link to='/' className='btn btn-primary ms-2'>Back</Link>
          </form>
        </div>
      </div> 
    </>
  )
}

export default Create