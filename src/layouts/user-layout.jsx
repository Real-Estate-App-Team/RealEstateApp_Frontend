import { Outlet } from 'react-router-dom'
import NavSection from '../components/common/navbar'
import Footer from '../components/common/footer'

const UserLayout = () => {
  return (
      <>
          <NavSection />
          <Outlet />
          <Footer />
      </>
  )
}

export default UserLayout