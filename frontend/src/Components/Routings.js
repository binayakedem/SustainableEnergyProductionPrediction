import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Output from './Output'
import Home from './Home'
const Routings = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route to='/' element={Home}/>
            <Route to='/output' element={Output}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Routings