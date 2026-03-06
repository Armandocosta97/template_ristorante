import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CookiePage from './pages/CookiePage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import PrivacyPage from './pages/PrivacyPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/eventi" element={<EventsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
