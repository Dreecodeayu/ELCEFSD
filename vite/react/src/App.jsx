import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from 'react';
import MainLayout from './components/MainLayout';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Login from './components/Login';
/*
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import pic1 from "./images/aa.jpg";
import pic2 from "./images/abes.jpg";
import Card from "./components/Card";
import Child1 from "./components/Child1";
import Child2 from './components/Child2';
import State1 from './components/State1';
import State3 from './components/State3';
*/
function App() {
  /*
  const [count, setCount] = useState(0)
  const user = {
      name: "Ayush Pathak",
      Id: 27, 
      hobbies: ["reading", "travelling"],
      isMember: true,
  */
  const [store , setStore] = useState("");  

  return (
    <>{/* 
      <div className='aa'>
      <Card name = "Ayush Pathak" roll = "2200320230008" pic = {pic1}/>
      <Card name = "Ayush Pathak" roll = "2200320230008" pic = {pic2}/>
      </div>
      <Child1
        name = "ABES Engineering college"
        year = {["1st " , "2nd " , "3rd " , "4th "]}
        date = {new Date().toLocaleDateString()}
      />

      <Child2 user = {user}/>

      <State1/>
      <State3/>
    */}
    <div>
    {JSON.stringify(store)}
    <BrowserRouter>
    <Routes>
      <Route  path = "/" element = {<MainLayout/>}>
      <Route  path = "/login" element = {<Login/>}></Route>
      <Route  path = "/registration" element = {<Registration regData = {setStore}/>}></Route>
      <Route  path = "/dash" element = {<Dashboard/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App
