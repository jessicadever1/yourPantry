import React from 'react'
import Header from './navigation/Header';
import Footer from './navigation/Footer'
import '../App.css'

const ApplicationView = () => {
  return (
    <>
      <div className='col'>
        <Header />
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ApplicationView;