import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Feed from './components/Feed'
import { useAppDispatch } from './app/hooks'
import { getCat } from './app/features/cats/catSlice'
import { setUser, user } from './app/features/user/userSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getCat())
    const isLogged = localStorage.getItem('isLogged')
    if(isLogged=='true'){
      const loggedUser = localStorage.getItem('user') 
      const user : user = JSON.parse(loggedUser) as user
      dispatch(setUser(user))
    } else {
      console.log('aint logged')
    }
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