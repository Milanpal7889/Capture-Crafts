import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Public/Home/Home'
import { NavbarBs } from './commonComponents/Navbar/Navbar'
// import { Footer } from './commonComponents/Footer/Footer'
import { Citys } from './pages/Public/Cities/Cities'
import {Login} from './pages/Auth/Login/Login'
import { Signup } from './pages/Auth/Signup/Signup'
import { Aboutus } from './pages/Public/Aboutus/Aboutus'
import { Footer } from './commonComponents/Footer/Footer'
import { Categories } from './pages/Public/Categories/Categories'
import Complaint from './pages/Public/Complaint/Complaint'
import ManageUsers from './pages/admin/ManageUsers'
import { ManageBooking } from './pages/admin/ManageUsers'
function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      component: <Home/>,
    },
    {
      path: "/cities",
      exact: true,
      component: <Citys/>,
    },
    {
      path: "/categories",
      exact: true,
      component: <Categories />,
    },
    {
      path: "/aboutus",
      exact: true,
      component: <Aboutus/>,
    },
    {
      path: "/login",
      exact: true,
      component: <Login/>,
    },
    {
      path: "/signup",
      exact: true,
      component: <Signup/>,
    },
    {
      path: "/complaint",
      exact: true,
      component: <Complaint/>,
    },
    {
      path: "/manageall",
      exact: true,
      component: < ManageUsers/> ,
    },
    {
      path: "/*",
      exact: true,
      component: <div>url not found <br/> Error 404</div>,
    },
    {
      path: "/something",
      exact: true,
      component: <ManageBooking/>,
    }
  ]
  return (
  <>
    <BrowserRouter>
    <NavbarBs/>
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.component}
            />
        )
      })}
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App
