import { REGISTRANTS } from '../../data/races'
import styles from './Director.module.css'

const STATS = [
  { val: '1,847', label: 'Registered',  green: true },
  { val: '2,500', label: 'Capacity',    green: false },
  { val: '$92,350', label: 'Revenue',   green: true },
  { val: '43',    label: 'Days Until Race', green: false },
]

export default function Director() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Race Director Dashboard</h1>
            <p className={styles.sub}>Austin Marathon Series 2026</p>
          </div>
          <button className="btn btn-primary">+ Create New Race</button>
        </div>

        {/* Dashboard stats */}
        <div className={styles.statsGrid}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statCard}>
              <div className={`${styles.statVal} ${s.green ? styles.statGreen : ''}`}>{s.val}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Registrant table */}
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.tableTitle}>Recent Registrations</div>
            <button className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>Export CSV</button>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Bib #</th>
                  <th>Name</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {REGISTRANTS.map(r => (
                  <tr key={r.bib}>
                    <td className={styles.bibCell}>{r.bib}</td>
                    <td className={styles.nameCell}>{r.name}</td>
                    <td>{r.event}</td>
                    <td className={styles.mutedCell}>{r.date}</td>
                    <td>
                      <span className={`badge ${r.status === 'confirmed' ? 'badge-green' : 'badge-orange'}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className={styles.amountCell}>{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
