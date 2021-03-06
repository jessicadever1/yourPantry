import React from 'react'
import { GiMeal } from 'react-icons/gi'
import { BsFillCalendar2DayFill } from 'react-icons/bs'
import { AiOutlineShoppingCart }from 'react-icons/ai'
import { RiDoorOpenLine } from 'react-icons/ri'
import './navigation.css'
import { NavItem } from 'react-bootstrap'

const Footer = () => {
  
  const navMenuTabs = [
    {
      "name": 'Recipes',
      "icon": <GiMeal color='#023E8A' className='navIcon' size='2x' />,
      "link": '/myRecipes'
    },
    {
      "name": 'Pantry',
      "icon": <RiDoorOpenLine color='#023E8A' className='navIcon' size='2x' />,
      "link": '/myPantry'
    },
    {
      "name": 'Meals',
      "icon": <BsFillCalendar2DayFill color='#023E8A' className='navIcon' size='2x' />,
      "link": '/myMealPlans'
    },
    {
      "name": 'Shop',
      "icon": <AiOutlineShoppingCart color='#023E8A' className='navIcon' size='2x' />,
      "link": '/myShop'
    },
  ]

  

  return (
    <>
      {navMenuTabs.map((option, index) => {
        return (
          <div key={index} className={''}>
            <NavItem className='grid25' onClick={() => {}}>
              <a href={option.link}>{option.icon}</a>
              <div>{option.name}</div>
            </NavItem>
          </div>
        )
      })}
    </>
  )
}

export default Footer;