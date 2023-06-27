import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to = "/Code" >💻CODE</NavLink>
        <NavLink to = "/Eat">🍕EAT</NavLink>
        <NavLink to = "/Sleep">😴SLEEP</NavLink>
        <NavLink to ="/Users">🧑‍🦰Users</NavLink>
    </nav>
  )
}

export default Navbar