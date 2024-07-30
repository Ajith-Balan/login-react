import {useState} from 'react'
import contact from './components/contact';
import Add from './components/add'


import React,{Component} from "react";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import auth from './components/user';
import Fpwd from './components/Fpwd';
function App(){

const [count,setCount]=useState(0)
return(
<>
<BrowserRouter>
<Routes>
<Route path='/contact' Component={contact}/>
<Route path='/add' Component={Add}/>
<Route path='/' Component={auth}/>
<Route path='/fpwd' Component={Fpwd}/>





</Routes>


</BrowserRouter>
</>
)

 
}
export default App;