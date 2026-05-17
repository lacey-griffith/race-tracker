import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import styles from './Navbar.module.css'

export default function Navbar({ onRegisterClick }) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          RACE<span>TRACKER</span>
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          <NavLink to="/races"    className={({ isActive }) => isActive ? styles.linkActive : styles.link}>Find Races</NavLink>
          <NavLink to="/director" className={({ isActive }) => isActive ? styles.linkActive : styles.link}>Race Directors</NavLink>
          <NavLink to="/results"  className={({ isActive }) => isActive ? styles.linkActive : styles.link}>Results</NavLink>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={`btn btn-ghost ${styles.themeBtn}`} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>Sign In</button>
          <button className="btn btn-primary" onClick={onRegisterClick} style={{ fontSize: '0.85rem' }}>
            Register Now
          </button>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink to="/races"    onClick={() => setMenuOpen(false)}>Find Races</NavLink>
          <NavLink to="/director" onClick={() => setMenuOpen(false)}>Race Directors</NavLink>
          <NavLink to="/results"  onClick={() => setMenuOpen(false)}>Results</NavLink>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={() => { onRegisterClick(); setMenuOpen(false) }}>
            Register Now
          </button>
        </div>
      )}
    </nav>
  )
}
