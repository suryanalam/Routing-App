import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = () => {
    const {id} = useParams();
  return (
    <div>User {id} Details </div>
  )
}

export default UserDetails