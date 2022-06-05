import React from 'react'
import { GiMeal } from 'react-icons/gi'
import { BsFillCalendar2DayFill } from 'react-icons/bs'
import { AiOutlineShoppingCart }from 'react-icons/ai'
import { RiDoorOpenLine } from 'react-icons/ri'
import './access.css'

const Footer = () => {

  const navMenuTabs = [
    {
      "name": 'Recipes',
      "icon": <GiMeal color='#023E8A' className='navIcon' />,
      "link": ''
    },
    {
      "name": 'Pantry',
      "icon": <RiDoorOpenLine color='#023E8A' className='navIcon' />,
      "link": ''
    },
    {
      "name": 'Meals',
      "icon": <BsFillCalendar2DayFill color='#023E8A' className='navIcon' />,
      "link": ''
    },
    {
      "name": 'Shop',
      "icon": <AiOutlineShoppingCart color='#023E8A' className='navIcon' />,
      "link": ''
    },
  ]

  return (
    <>
      {navMenuTabs.map((option, index) => {
        return (
          <div key={index} className=''>
            <div className='grid25'>
              <a href={option.link}>{option.icon}</a>
              <div>{option.name}</div>
            </div>
        </div>
        )
      })}
    </>
  )
}

export default Footer;