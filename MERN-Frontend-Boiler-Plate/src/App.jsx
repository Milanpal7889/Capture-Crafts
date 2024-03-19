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
import { Photographers } from './pages/Public/Photographers/Photographers'
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
      path: "/photographers",
      exact: true,
      component: <Photographers/>,
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
