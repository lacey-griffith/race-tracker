import { useState } from 'react'
import { Search } from 'lucide-react'
import { RESULTS } from '../../data/races'
import styles from './Results.module.css'

export default function Results() {
  const [query, setQuery] = useState('')
  const filtered = RESULTS.filter(r =>
    !query || r.name.toLowerCase().includes(query.toLowerCase()) || r.bib.includes(query)
  )

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Race Results</h1>
        <p className={styles.sub}>Official timing results from recent events</p>

        <div className={styles.searchBar}>
          <Search size={17} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search by name or bib number..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.tableCard}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Bib</th>
                <th>Race</th>
                <th>Time</th>
                <th>Pace</th>
                <th>Age Group</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.bib}>
                  <td className={`${styles.placeCell} ${r.place <= 3 ? styles.topPlace : ''}`}>
                    {r.place <= 3 ? ['🥇','🥈','🥉'][r.place-1] : `#${r.place}`}
                  </td>
                  <td className={styles.nameCell}>{r.name}</td>
                  <td className={styles.bibCell}>{r.bib}</td>
                  <td className={styles.mutedCell}>{r.race}</td>
                  <td className={styles.timeCell}>{r.time}</td>
                  <td className={styles.mutedCell}>{r.pace}</td>
                  <td className={styles.agCell}>{r.ag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
