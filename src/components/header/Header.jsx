import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-white h-[80px] shadow-md'>
        <nav className='h-full flex items-center justify-center gap-[50px] text-[20px]'>
            <NavLink to={'/'} className="link">Home</NavLink>
            <NavLink to={'/about'} className="link">About</NavLink>
        </nav>
    </header>
  )
}

export default Header