import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import CookieBanner from '../components/layout/CookieBanner'
import QuickActions from '../components/layout/QuickActions'
import RestaurantSchema from '../components/seo/RestaurantSchema'

function MainLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="app-shell">
      <RestaurantSchema />
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>
      <Header />
      <main
        id="main-content"
        className={`container site-main${isHome ? ' site-main--home' : ''}`}
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <QuickActions />
    </div>
  )
}

export default MainLayout
