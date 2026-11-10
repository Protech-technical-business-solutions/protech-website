import { StrictMode, useState, useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pages/pages.css'

import { createHashRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";

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


const LOCALE_KEY = 'pertech-locale'
function readStoredLocale() {
  try {
    return localStorage.getItem(LOCALE_KEY) || localStorage.getItem('protech-locale')
  } catch {
    return null
  }
}

// Arabic uses Bootstrap's RTL build so rows, margins and alignment mirror correctly.
if (readStoredLocale() === 'ar') {
  const bootstrapCss = document.getElementById('bootstrap-css')
  if (bootstrapCss) bootstrapCss.href = bootstrapCss.href.replace('bootstrap.min.css', 'bootstrap.rtl.min.css')
}

// as we require Header and Footer in every page and we dont wish to recreate them,
// we could introduce our layout component like this:
function Layout(props){
    return (
      <>
        <ScrollToTop />
        <Header />
          <main><Outlet /></main> {/* basically the routes as child here */}
        <Footer />
      </>
    );
}

// setting up the routes for the web-app with a layout component:
const pertechRouter = createHashRouter(
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

// scroll to top on route change (hash links to a section are handled by HashLink)
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0) }, [pathname, hash])
  return null
}

const MyApp = props => {
    // More comprehensive mobile detection that covers all phone sizes including large phones like iPhone 16 Pro Max
    const isMobile = useMediaQuery({ 
      query: '(max-width: 768px), (max-width: 1024px) and (orientation: portrait)' 
    });

    // locale is read-only from localStorage — changes trigger a full reload
    // ('protech-locale' is the pre-rebrand key — still read so returning visitors keep their language)
    const [locale] = useState(() => readStoredLocale() || defaultLocale)
    const t = useMemo(() => createTranslator(locale), [locale])

    // Changing locale saves to localStorage and reloads the page so Tidio
    // re-initializes from scratch with document.tidioChatLang already set.
    // This is the only reliable way to change Tidio's language — there is no
    // setLanguage API, and in-place script reinjection leaves stale memory state.
    const handleLocaleChange = (newLocale) => {
      try { localStorage.setItem(LOCALE_KEY, newLocale) } catch { /* storage blocked */ }
      window.location.reload()
    }

    // Load Tidio once on mount. By this point document.tidioChatLang is already
    // set (below), so Tidio picks up the correct language on first execution.
    useEffect(() => {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
      document.body.dir = locale === 'ar' ? 'rtl' : 'ltr'
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
      
      <RouterProvider router={pertechRouter} />
    
    </MyContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)