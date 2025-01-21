import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Kids from './Kids';
import Men from './Men';
import Women from './Women'
import Home from './Home'
import Signin from './Signin ';
import Register from './Register'
import CartUI from './CartUI';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/signin' element = {<Signin/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/men' element = {<Men/>}/>
          <Route path='/women' element = {<Women/>}/>
          <Route path='/kids' element = {<Kids/>}/>
          <Route path='/cartUI' element = {<CartUI/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
