import './Stats.css'

const STATS = [
  { number: '3+', label: 'Years Experience' },
  { number: 'NIT-K', label: 'B.Tech Graduate' },
  { number: 'Top 1%', label: 'JEE Main' },
  { number: '4th', label: 'Shell.AI Nationwide' },
]

export default function Stats() {
  return (
    <div className="stats-bar">
      {STATS.map(({ number, label }) => (
        <div className="stat-item" key={label}>
          <span className="stat-number">{number}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  )
}