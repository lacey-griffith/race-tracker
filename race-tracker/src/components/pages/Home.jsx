import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const FEATURES = [
  { icon: '🏁', name: 'Smart Registration',  desc: 'Wave pricing, promo codes, team registration, corral management, and custom questions — all built in.' },
  { icon: '🌐', name: 'Race Websites V2',     desc: 'Drag-and-drop builder with unlimited pages, custom domains, slideshows, countdown clocks, and live results.' },
  { icon: '📧', name: 'Email Marketing',      desc: 'Next-gen email with smart lists, automated sends, and deep integration with your participant data.' },
  { icon: '📡', name: 'RaceDay Real-Time',    desc: 'Live tracking, real-time scoring, spectator alerts, and finish line results — updated in milliseconds.' },
  { icon: '💰', name: 'Fundraising Tools',    desc: 'Goal thermometers, donor pages, and automated receipts. Raise more, do it all for free.' },
  { icon: '📱', name: 'RaceDay Apps',         desc: 'Participant check-in, mobile timing, spectator tracking — race day covered end-to-end.' },
]

export default function Home({ onRegisterClick }) {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroEyebrow}>// The Free Platform for Endurance Events</div>
        <h1 className={styles.heroHeadline}>
          Race.<br />Register.<br /><em>Win.</em>
        </h1>
        <p className={styles.heroSub}>
          The all-in-one platform powering 39,000+ events, 12 million annual participants,
          and over $3 billion raised for good causes.
        </p>
        <div className={styles.heroCtas}>
          <Link to="/races" className={`btn btn-primary btn-lg`}>Find Your Race</Link>
          <Link to="/director" className={`btn btn-ghost btn-lg`}>Host an Event</Link>
        </div>
      </section>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {[
          { num: '39K+', label: 'Events Powered' },
          { num: '12M',  label: 'Annual Participants' },
          { num: '$3B+', label: 'Raised for Causes' },
          { num: '100%', label: 'Free Platform' },
        ].map(s => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Everything a Race Needs</h2>
            <p className={styles.featuresSub}>No subscriptions. No monthly fees. Just a complete platform that works.</p>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURES.map(f => (
              <div key={f.name} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureName}>{f.name}</div>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Race?</h2>
          <p className={styles.ctaSub}>Find your next event or create one. It's completely free.</p>
          <div className={styles.ctaBtns}>
            <Link to="/races" className="btn btn-primary btn-lg">Browse Races</Link>
            <Link to="/director" className="btn btn-ghost btn-lg">Create a Race</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
