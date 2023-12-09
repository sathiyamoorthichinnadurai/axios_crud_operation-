import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Ubdate() {
  const {id}=useParams();
  //const [data,setdata]=useState([])
  const [value,setvalue]=useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3003/users/'+id)
    .then((res)=>{
      setvalue(res.data)
    })
  },[])

  const handleupdate =(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3003/users/'+id,value)
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
          <h1>Update a User </h1>
          <form  onSubmit={handleupdate}>
            <div className='mb-2'>
              <label htmlFor="name"><h3 className='text-danger'>Name</h3></label>
              <input type="text" name='name' className='form-control' placeholder='Enter a Name' value={value.name} onChange={e=>setvalue({...value,name:e.target.value})}/>
            </div>
            <div className='mb-2'>
              <label htmlFor="email"><h3 className='text-danger'>Email</h3></label>
              <input type="email" name='email' className='form-control' placeholder='Enter a email' value={value.email} onChange={e=>setvalue({...value,email:e.target.value})}/>
            </div>
            <div className='mb-2'>
              <label htmlFor="text"><h3 className='text-danger'>Phone</h3></label>
              <input type="text" name='phone' className='form-control' placeholder='Enter a Phonenumber' value={value.phone} onChange={e=>setvalue({...value,phone:e.target.value})}/>
            </div>
            <button  className='btn btn-success'>Ubdate</button>
            <Link to='/' className='btn btn-primary ms-2'>Back</Link>
          </form>
        </div>
      </div> 
    </>
  )
}

export default Ubdate