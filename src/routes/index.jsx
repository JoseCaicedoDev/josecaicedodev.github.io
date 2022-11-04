import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import { Footer } from '../components/footer'
import Header from '../components/header'
import { Curriculum } from '../pages/curriculum'
import { Home } from '../pages/home'
import { Portfolio } from '../pages/portfolio'

function AppRoutes() {
  const { t, i18n } = useTranslation()
  const handleLanguageLng = (lng) => {
    i18n.changeLanguage(lng)

    localStorage.setItem('lng', lng)
  }

  return (
    <>
      <Header handle={handleLanguageLng} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Portfolio />} path="/portafolio" />
        <Route element={<Curriculum />} path="/curriculum" />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes
