import React from 'react';
import { VscAccount } from 'react-icons/vsc'

const Header = (props) => {
  
  return (
    <>
      <div className='headerBar'>
        <header>{props.name}</header>
        <VscAccount color='white' className='accountIcon' size='2x' />
      </div>
    </>
  )
}

export default Header;