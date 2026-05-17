import styles from './RaceCard.module.css'

export default function RaceCard({ race, onRegister }) {
  const registered = race.capacity - race.spots
  const pct = Math.round((registered / race.capacity) * 100)

  return (
    <div className={`card ${styles.card}`} onClick={() => onRegister(race)}>
      {race.featured && <div className={styles.featuredBadge}>Featured</div>}

      <div className={styles.banner} style={{ background: `linear-gradient(135deg, ${race.accentColor}, var(--bg))` }}>
        <div className={styles.emoji}>{race.emoji}</div>
        <div className={styles.distanceBadge}>
          {race.distances.join(' · ')}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{race.name}</h3>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {race.date}
          </div>
          <div className={styles.metaItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {race.location}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>
            ${race.prices[0]}
            <span className={styles.priceSub}> and up</span>
          </div>
          <div className={styles.spots}>
            <span className={styles.spotsNum}>{registered}</span>/{race.capacity} registered
            <div className={styles.bar}><div className={styles.fill} style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
