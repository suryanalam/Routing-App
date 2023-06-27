import React, { useState, useEffect } from 'react'
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom'

const Users = () => {

  const [data, setData] = useState({
    mail: '',
    pass: '',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => { return { ...data, [name]: value } })
  }

  const handleSearch = (e) => {
    e.preventDefault(); // to prevent the default behaviour of the form
    console.log(data);  // to see the data in the console
    setSearchParams(data); // to set the search params
  }

  useEffect(() => {
    console.log(location);
    console.log(searchParams.get('mail'));
    console.log(searchParams.get('pass'));
  }, [searchParams, location]);

  return (
    <>

      <form onSubmit={handleSearch}>

        <label htmlFor='mail'>Email Id: </label>
        <input type='email' name='mail' onChange={handleChange} />{' '}

        <label htmlFor='pass'>Password: </label>
        <input type='password' name='pass' onChange={handleChange} /><br />

        <input type='submit' value='Submit' />
        <input type='reset' value='Reset' onClick={()=> setSearchParams({}) }/>

      </form>

      <h2>No of Users:</h2>
      <p><Link to='1'>User 1</Link></p>
      <p><Link to='2'>User 2</Link></p>
      <p><Link to='3'>User 3</Link></p>

      <Outlet />

    </>
  )
}

export default Users