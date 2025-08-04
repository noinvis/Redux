import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='h-[50vh]'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout