import React from 'react';
import { VscAccount } from 'react-icons/vsc'

const Header = () => {

  return (
    <>
      <div className='headerBar'>
        <header>myRecipe</header>
        <VscAccount color='white' className='accountIcon' size='2x' />
      </div>
    </>
  )
}

export default Header;