import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';

import Footer from '../components/navigation/Footer'
import Header from '../components/navigation/Header'
import MyMealPlans from './mealPlans/MyMealPlans';
import MyPantry from './pantry/MyPantry'
import MyRecipes from './recipes/MyRecipes';
import MyShop from './shop/MyShop';
import Login from './access/Login';

const ApplicationView = () => {
  const [isLoggedIn] = useState(true)
  const [header, setHeader] = useState('')
  console.log(header)
  
  return (
    <>
      {isLoggedIn ? (
        <div>
          <div className='mobileHeaderMenu'>
            <Header name={header} />
          </div>
          <Routes>
            <Route exact path='myRecipes' element={<MyRecipes onClick={() => {setHeader('myRecipes')}} />}></Route>
            <Route exact path='myPantry' element={<MyPantry onClick={() => {setHeader('myPantry')}} />}></Route>
            <Route exact path='myMealPlans' element={<MyMealPlans onClick={() => {setHeader('myMealPlans')}} />}></Route>
            <Route exact path='myShop' element={<MyShop onClick={() => {setHeader('myShop')}} />}></Route>
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