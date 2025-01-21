import React from 'react'

import Offer from './Offer';
import NewArrivals from './NewArrivals';
import Kids from './Kids';
import Men from './Men';
import Women from './Women'
import Home from './Home'

import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Signin from './Signin ';
import Register from './Register'
import CartUI from './CartUI';
import { useState } from 'react';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/Head'>{<Head/>}</Route> */}
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/Signin' element = {<Signin/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/Men' element = {<Men/>}/>
          <Route path='/Women' element = {<Women/>}/>
          <Route path='/Kids' element = {<Kids/>}/>
          <Route path='/CartUI' element = {<CartUI/>}/>
        </Routes>
      </BrowserRouter>


      

      


      {/* 
      <Men></Men>
      <Women></Women>

      <Kids></Kids>






      <NewArrivals></NewArrivals>
      <Offer></Offer> */}




    </div>

  )
}

export default App
