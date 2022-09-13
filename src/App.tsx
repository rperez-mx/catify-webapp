import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Feed from './components/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/feed" element={<Feed />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App