import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


function Home() {
    const [data,setdata]=useState()
    useEffect(()=>{
        axios.get('http://localhost:3003/users')
        .then((res)=>setdata(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDelete=(id)=>{
        const confirm=window.confirm("would you like to Delete?")
        if(confirm){
        axios.delete('http://localhost:3003/users/'+id)
        .then(res=>{
            location.reload()
        })
    }
    }
  return (
   <>
        <div className=' d-flex flex-column justify-content-center align-items-center bg-light  '>
             <h1>List Of Users </h1>
            <div className='w-75 rounded bg-white border shadow p-4 w-auto'> 
                    <div className='d-flex justify-content-end'>
                        <Link to='/create' className='btn btn-success'>Add</Link>
                    </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                     <tbody>
                     {
                           data? data.map((d,i)=>(
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className='btn btn-sm btn-info m-2'>Read</Link>
                                        <Link to={`/update/${d.id}`}><button className='btn btn-sm btn-primary m-2'>Edit</button></Link>
                                        <button className='btn btn-sm btn-danger' onClick={e=>handleDelete(d.id)}>Delete</button>
                                    </td>

                                </tr>
                            )):<tr><td><h1>No contacts</h1></td></tr>

                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
   </>
  )
}

export default Home