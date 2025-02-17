import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

// common components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// pages:
import Home from "./pages/home/index.jsx"
import ContactUs from './pages/contactUs/index.jsx';
import AboutUs from './pages/aboutUs/index.jsx';
import ServicesPage from './pages/services/index.jsx';
import SiteWorksPage from './pages/siteWorks/index.jsx';

// other stuff
import MyContext from "./config/contextFile.jsx"
import { useMediaQuery } from 'react-responsive'


// as we require Header and Footer in every page and we dont wish to recreate them,
// we could introduce our layout component like this:
function Layout(props){
    return (
      <>
        <Header />
          <Outlet /> {/* basically the routes as child here */}
        <Footer />
      </>
    );
}

// setting up the routes for the web-app with a layout component:
const protechRouter = createHashRouter(
  [
  {
    element: <Layout />, // every route will follow this layout
    children:[
      {path:"/",element: <Home />},
      {path:"/contact-us", element: <ContactUs />},
      {path:"/about-us", element: <AboutUs />},
      {path:"/services", element: <ServicesPage />},
      {path:"/site-works", element: <SiteWorksPage />},
    ]
  }
]
)

const MyApp = props => {

    // we'll use window.matchMedia method to check if the website is opened in mobile
    // const [isMobile,setIsMobile] = useState( window.innerWidth<=750 );
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    // useEffect(() => {
    //   window.matchMedia("(max-width: 750px)")
    //   .addEventListener("change", e=>setIsMobile(e.matches)) // we also add eventlisteners incase the window is resized 
    // }, [])

  return (
    <MyContext.Provider value={ {isMobile:isMobile} }> {/* wrapping everything under our context */}
      
      {/* <Header /> */} {/* We cannot simply use this here as it would not have access to the router functions like Link,etc... */}
      {/* Using our router: */}
      <RouterProvider router={protechRouter} />
    
    </MyContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
