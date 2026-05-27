import { StrictMode, useState, useEffect, useMemo } from 'react'
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
import { createTranslator, defaultLocale } from './config/localization'


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
    // More comprehensive mobile detection that covers all phone sizes including large phones like iPhone 16 Pro Max
    const isMobile = useMediaQuery({ 
      query: '(max-width: 768px), (max-width: 1024px) and (orientation: portrait)' 
    });

    // locale is read-only from localStorage — changes trigger a full reload
    const [locale] = useState(() => localStorage.getItem('protech-locale') || defaultLocale)
    const t = useMemo(() => createTranslator(locale), [locale])

    // Changing locale saves to localStorage and reloads the page so Tidio
    // re-initializes from scratch with document.tidioChatLang already set.
    // This is the only reliable way to change Tidio's language — there is no
    // setLanguage API, and in-place script reinjection leaves stale memory state.
    const handleLocaleChange = (newLocale) => {
      localStorage.setItem('protech-locale', newLocale)
      window.location.reload()
    }

    // Load Tidio once on mount. By this point document.tidioChatLang is already
    // set (below), so Tidio picks up the correct language on first execution.
    useEffect(() => {
      document.documentElement.lang = locale
      document.tidioChatLang = locale

      const script = document.createElement('script')
      script.id = 'tidio-chat-script'
      script.src = '//code.tidio.co/zkkafcq226xojixhiercjhd1zpwmrn8q.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.querySelectorAll(
          '#tidio-chat-script, script[src*="code.tidio.co"], #tidio-chat, #tidio-chat-code, #tidio-chat-iframe, iframe[src*="tidio.co"], iframe[src*="tidio.com"]'
        ).forEach(n => n.remove())
        delete window.tidioChatApi
        delete window.tidioIdentify
        delete document.tidioChatLang
      }
    }, []) // empty deps — runs once per page load

  return (
    <MyContext.Provider value={{ isMobile, locale, setLocale: handleLocaleChange, isArabic: locale === 'ar', t }}>
      
      <RouterProvider router={protechRouter} />
    
    </MyContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)