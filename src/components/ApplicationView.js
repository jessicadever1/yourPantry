import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import MyRecipes from './recipes/MyRecipes';
import Login from './access/Login';
import Header from '../components/navigation/Header'
import Footer from '../components/navigation/Footer'

const ApplicationView = () => {
  const [isLoggedIn] = useState(true)
  const [header, setHeader] = useState('myRecipes')
  console.log(header)
  
  return (
    <>
      {isLoggedIn ? (
        <div>
          <div className='mobileHeaderMenu'>
            <Header name={header} />
          </div>
          <Routes>
            <Route exact path='myRecipes' element={<MyRecipes />}></Route>
          </Routes>
          <div className='mobileFooterMenu'>
            <Footer />
          </div>
        </div>
        ) : (
          <Routes>
            <Route exact path='login' element={<Login />}></Route>
          </Routes>
        )}
    </>
  )
}

export default ApplicationView;