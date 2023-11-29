import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Home from './components/Home';
import Users from './components/Users';
import Edit from './components/Edit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<Create/>} path='/create'/>
        <Route element={<Users/>}  path='/users'/>
        <Route element={<Edit/>} path='/edit/:abc' />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
