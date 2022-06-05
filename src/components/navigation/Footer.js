import React, {useState} from 'react'
import { GiMeal } from 'react-icons/gi'
import { BsFillCalendar2DayFill } from 'react-icons/bs'
import { AiOutlineShoppingCart }from 'react-icons/ai'
import { RiDoorOpenLine } from 'react-icons/ri'
import './navigation.css'
import { NavItem } from 'react-bootstrap'

const Footer = () => {
  const [selected, setSelected] = useState('Recipes')

  console.log(selected)
  const navMenuTabs = [
    {
      "name": 'Recipes',
      "icon": <GiMeal color='#023E8A' className='navIcon' />,
      "link": '/recipes'
    },
    {
      "name": 'Pantry',
      "icon": <RiDoorOpenLine color='#023E8A' className='navIcon' />,
      "link": '/pantry'
    },
    {
      "name": 'Meals',
      "icon": <BsFillCalendar2DayFill color='#023E8A' className='navIcon' />,
      "link": '/mealPlans'
    },
    {
      "name": 'Shop',
      "icon": <AiOutlineShoppingCart color='#023E8A' className='navIcon' />,
      "link": '/shop'
    },
  ]

  return (
    <>
      {navMenuTabs.map((option, index) => {
        return (
          <div key={index} className={option.name !== selected ? 'unselected' : 'selected'}>
            <NavItem className='grid25' onClick={() => {setSelected(option.name)}}>
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