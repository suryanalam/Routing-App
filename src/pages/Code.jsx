import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
const Code = () => {
  return (
    <div>
      <h2>Code Now</h2>
      <NavLink  to = 'Debug' >DEBUG</NavLink>
      <NavLink  to = 'Test' >TEST</NavLink>
      <Outlet/>
    </div>
  )
}

export default Code