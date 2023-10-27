import React from 'react'
import {Routes,Route} from "react-router-dom"
import Output from './Output'
import Body from './Body'
const Routings = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/' exact Component={Body}/>
            <Route path='/output' Component={Output}/>
        </Routes>
        
       
    </div>
  )
}

export default Routings