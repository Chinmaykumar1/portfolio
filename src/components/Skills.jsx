import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const SKILL_GROUPS = [
  {
    icon: '</>', title: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    icon: '\u2699', title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring MVC', 'Hibernate', 'React', 'Redux', 'Node.js', 'JUnit', 'Mockito'],
  },
  {
    icon: '\u2601', title: 'Cloud & DevOps',
    items: ['AWS S3', 'EC2', 'Lambda', 'Docker', 'Jenkins', 'JFrog', 'Dynatrace'],
  },
  {
    icon: '\uD83D\uDDC4', title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    icon: '\uD83D\uDD27', title: 'Tools & Practices',
    items: ['Git', 'Maven', 'Kafka', 'REST APIs', 'GraphQL', 'Microservices', 'CI/CD', 'Agile'],
  },
]

function RevealDiv({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function Skills() {
  return (
    <section id="skills">
      <RevealDiv>
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line" />
        </div>
      </RevealDiv>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <RevealDiv key={group.title} className="skill-card">
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.title}</h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <span className="skill-pill" key={item}>{item}</span>
              ))}
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}