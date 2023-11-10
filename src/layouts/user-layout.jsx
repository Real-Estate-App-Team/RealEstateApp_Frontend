import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
      <>
          <header>Header</header>
          <Outlet />
          <footer>Footer</footer>
      </>
  )
}

export default UserLayout