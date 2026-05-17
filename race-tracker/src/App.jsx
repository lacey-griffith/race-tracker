import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Races from './components/pages/Races'
import Director from './components/pages/Director'
import Results from './components/pages/Results'
import RegistrationModal from './components/registration/RegistrationModal'
import './styles/globals.css'

export default function App() {
  const [modalRace, setModalRace] = useState(null)

  const openModal = (race) => setModalRace(race)
  const closeModal = () => setModalRace(null)

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar onRegisterClick={() => openModal({ id: 0, name: 'Race Tracker', date: 'Select a Race', location: '—', distances: ['5K', '10K', 'Half Marathon', 'Marathon'], prices: [25, 35, 65, 85], emoji: '🏃', accentColor: '#1a1a2a' })} />
        <main>
          <Routes>
            <Route path="/"         element={<Home onRegisterClick={openModal} />} />
            <Route path="/races"    element={<Races onRegister={openModal} />} />
            <Route path="/director" element={<Director />} />
            <Route path="/results"  element={<Results />} />
          </Routes>
        </main>
        <Footer />
        {modalRace && <RegistrationModal race={modalRace} onClose={closeModal} />}
      </BrowserRouter>
    </ThemeProvider>
  )
}
