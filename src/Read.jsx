import axios from 'axios'
import './App.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const {id}=useParams();
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3003/users/'+id)
    .then((res)=>setdata(res.data))
  },[])
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-auto border bg-white  shadow px-4 pt-3 pb-5  '>
        <h3 className='text-success'>User Details</h3>
        <div className=' text-danger mb-2'>
          <strong><h4>Name:  <span>{data.name}</span></h4></strong>
        </div>
        <div className=' text-danger mb-2'>
          <strong><h4>Email:  {data.email}</h4></strong>
        </div>
        <div className='text-danger mb-2'>
          <strong><h4>Phone:  {data.phone}</h4></strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to={'/'} className='btn btn-primary ms-3'>Back</Link>
      </div>

    </div>

    </>
  )
}

export default Read