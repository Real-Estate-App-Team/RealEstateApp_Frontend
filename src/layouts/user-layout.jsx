import { Outlet } from 'react-router-dom'
import NavSection from '../components/common/navbar'

const UserLayout = () => {
  return (
      <>
          <NavSection />
          <Outlet />
          <footer>Footer</footer>
      </>
  )
}

export default UserLayout