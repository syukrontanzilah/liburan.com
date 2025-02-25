"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

const NavbarResponsive = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav = {handleShowNav}/>
      <NavbarMobile showNav = {showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default NavbarResponsive
