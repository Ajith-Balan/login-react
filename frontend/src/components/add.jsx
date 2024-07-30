import { useEffect, useState } from 'react'


import axios from 'axios';


function Add() {


const [contact,setContact]=useState({
name:"",
number:""

})
const handleChange=(e)=>{
  setContact((pre)=>({...pre,[e.target.name]:e.target.value}))
}





  const addTask=async()=>{
    const token=localStorage.getItem("user");
 const res=await axios.post("http://localhost:3000/api/add",contact,{headers:{'Authorization':`Bearer ${token}`}});
 console.log(res.status);

}



    return (
    <>
   

      <div className="container">
   
   <div className="info">


    

<div className="name">
<label htmlFor="name"> Name:<br></br>  </label>
<input name='name' type="text" id='name' onChange={handleChange}  /> <br></br></div>

<label htmlFor="Number">Number:<br></br></label>

<input name='number' type="Number" id='number' onChange={handleChange} />
<br></br>

<button id='add' onClick={addTask}>Add contact</button>

   </div>


</div>



    </>
  )
}

export default Add
