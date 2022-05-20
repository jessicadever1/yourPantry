import React from 'react'
import { GiMeal } from 'react-icons/gi'
import { BsFillCalendar2DayFill } from 'react-icons/bs'
import { AiOutlineShoppingCart }from 'react-icons/ai'
import { RiDoorOpenLine } from 'react-icons/ri'
import './access.css'

const Footer = () => {
  return (
    <>
      <section className='row text topPad1 botPad1'>
        <div className='grid25'>
          <GiMeal color='#023E8A' className='navIcon' />
          <div>Recipes</div>
        </div>

        <div className='grid25'>
          <RiDoorOpenLine color='#023E8A' className='navIcon' />
          <div>Pantry</div>
        </div>

        <div className='grid25'>
          <BsFillCalendar2DayFill color='#023E8A' className='navIcon' />
          <div>Meals</div>
        </div>

        <div className='grid25'>
          <AiOutlineShoppingCart color='#023E8A' className='navIcon' />
          <div>Shop</div>
        </div>
        
      </section>
    </>
  )
}

export default Footer;