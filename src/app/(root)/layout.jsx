import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout