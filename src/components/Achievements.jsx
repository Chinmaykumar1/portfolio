import { useReveal } from '../hooks/useReveal'
import './Achievements.css'

const ACHIEVEMENTS = [
  {
    icon: '\uD83C\uDFC6',
    title: 'ACE Developer Award',
    desc: 'Awarded at Accenture for delivering high-impact features ahead of schedule with exceptional quality.',
  },
  {
    icon: '\uD83E\uDD16',
    title: 'Shell.AI Hackathon',
    desc: 'Rank 1st (Southern Region) and 4th Nationwide \u2014 won \u20B950,000 prize in a competitive AI-focused hackathon.',
  },
  {
    icon: '\uD83C\uDFAF',
    title: 'Top 1% \u2014 JEE Main',
    desc: 'Scored in the top 1 percentile among 1.2 million+ candidates in one of India\u2019s toughest engineering entrance exams.',
  },
]

function RevealDiv({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function Achievements() {
  return (
    <section id="achievements">
      <RevealDiv>
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Achievements</h2>
          <div className="section-line" />
        </div>
      </RevealDiv>

      <div className="achv-grid">
        {ACHIEVEMENTS.map((a) => (
          <RevealDiv key={a.title} className="achv-card">
            <div className="achv-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}
