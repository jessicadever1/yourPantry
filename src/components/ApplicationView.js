import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';

import Footer from '../components/navigation/Footer'
import MyMealPlans from './mealPlans/MyMealPlans';
import MyPantry from './pantry/MyPantry'
import MyRecipes from './recipes/MyRecipes';
import MyShop from './shop/MyShop';
import Login from './access/Login';

const ApplicationView = () => {
  const [isLoggedIn] = useState(true)

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Routes>
            <Route exact path='myRecipes' element={<MyRecipes />}></Route>
            <Route exact path='myPantry' element={<MyPantry />}></Route>
            <Route exact path='myMealPlans' element={<MyMealPlans />}></Route>
            <Route exact path='myShop' element={<MyShop />}></Route>
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