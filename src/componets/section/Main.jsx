import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const Main = (props) => {
  return (
    <>
      <Header/>
      <main id='main' role='main'>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}
