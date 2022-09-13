import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Feed from './components/Feed'
import { useAppDispatch } from './app/hooks'
import { getCats } from './app/features/cats/catSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getCats())
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/" element={<Feed />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App