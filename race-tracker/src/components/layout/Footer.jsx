import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>RACE<span>TRACKER</span></div>
            <p>The free, open platform for endurance events. Powering race registration, websites, fundraising, and race-day technology for events of all sizes.</p>
          </div>
          <div>
            <div className={styles.colTitle}>Participants</div>
            <ul className={styles.linkList}>
              <li><Link to="/races">Find a Race</Link></li>
              <li><a href="#">My Registrations</a></li>
              <li><Link to="/results">Race Results</Link></li>
              <li><a href="#">Training Plans</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Race Directors</div>
            <ul className={styles.linkList}>
              <li><Link to="/director">Dashboard</Link></li>
              <li><a href="#">Create a Race</a></li>
              <li><a href="#">Website Builder</a></li>
              <li><a href="#">Email Marketing</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.linkList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Race Tracker. All rights reserved.</span>
          <span className={styles.mono}>FREE PLATFORM</span>
        </div>
      </div>
    </footer>
  )
}
