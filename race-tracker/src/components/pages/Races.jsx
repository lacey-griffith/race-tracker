import { useState } from 'react'
import { Search } from 'lucide-react'
import { RACES } from '../../data/races'
import RaceCard from '../ui/RaceCard'
import styles from './Races.module.css'

const CATEGORIES = ['All', '5K', '10K', 'Half', 'Marathon', 'Ultra', 'Trail', 'Virtual']

export default function Races({ onRegister }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [distance, setDistance] = useState('')
  const [dateRange, setDateRange] = useState('')

  const filtered = RACES.filter(r => {
    const matchQuery = !query || r.name.toLowerCase().includes(query.toLowerCase()) || r.location.toLowerCase().includes(query.toLowerCase())
    const matchCat = category === 'All' || r.category === category || r.distances.some(d => d.toLowerCase().includes(category.toLowerCase()))
    return matchQuery && matchCat
  })

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Page header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Find Your Race</h1>
          <p className={styles.pageSub}>Search from thousands of 5Ks, marathons, trail runs, and more</p>
        </div>

        {/* Search bar */}
        <div className={styles.searchWrap}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search by race name, city, or keyword..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <select className={styles.searchSelect} value={distance} onChange={e => setDistance(e.target.value)}>
              <option value="">All Distances</option>
              <option>5K</option><option>10K</option><option>Half Marathon</option>
              <option>Marathon</option><option>Ultra</option><option>Trail Run</option>
            </select>
            <select className={styles.searchSelect} value={dateRange} onChange={e => setDateRange(e.target.value)}>
              <option value="">Any Date</option>
              <option>This Month</option><option>Next 3 Months</option><option>Next 6 Months</option>
            </select>
            <button className={`btn btn-primary ${styles.searchBtn}`}>Search</button>
          </div>
        </div>

        {/* Category pills */}
        <div className={styles.pills}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`${styles.pill} ${category === c ? styles.pillActive : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className={styles.resultsCount}>
          <span className={styles.count}>{filtered.length}</span> races found
        </div>

        {/* Race grid */}
        <div className={styles.grid}>
          {filtered.map(r => (
            <RaceCard key={r.id} race={r} onRegister={onRegister} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🔍</div>
            <div className={styles.emptyText}>No races match your search</div>
            <button className="btn btn-ghost" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters</button>
          </div>
        )}
      </div>
    </div>
  )
}
