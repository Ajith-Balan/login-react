import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Fpwd = () => {

const [email,setUserName]=useState('')
const submit=async ()=>{
console.log(email);
const res=await axios.post("http://localhost:3000/api/fpwd",{email:email})
console.log(res);

}





  return (
    <div>
 Enter your email
 <input type="text" onChange={(e)=>setUserName(e.target.value)} name='' />
 <button onClick={submit}>get otp</button>

 {/* <input type="text" onChange={(e)=>setUserotp(e.target.value)} placeholder='enter otp' name='' />
<button onClick={validate}>
submit
</button> */}
    </div>


  )
}

export default Fpwd
