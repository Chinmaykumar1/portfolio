import RevealDiv from './RevealDiv'
import './Experience.css'

const EXPERIENCES = [
  {
    role: 'Senior Software Engineer',
    company: 'UnitedHealth Group — Optum',
    location: 'Bengaluru',
    date: 'Jul 2024 — Present',
    bullets: [
      'Developed REST APIs in Spring Boot for healthcare claims processing — improved API response times by ~20% through query optimization and caching.',
      'Built customer file upload enhancement using AWS S3 pre-signed URLs — reduced upload latency by ~40% and enabled concurrent batch uploads.',
      'Owned the reconciliation flow end-to-end: designed scheduled jobs to cross-validate claims data across upstream/downstream systems, identifying and auto-resolving discrepancies in daily transaction batches.',
      'Set up Dynatrace dashboards and alerting — reduced mean time to detection for P1 incidents from ~30 min to under 5 min.',
      'Configured CI/CD pipelines using Jenkins and JFrog Artifactory across dev, QA, staging, and production environments.',
      'Collaborated with cross-functional teams (product, QA, data engineering) in Agile sprints; participated in design reviews, code reviews, and on-call rotations.',
    ],
    tags: ['Spring Boot', 'AWS S3', 'Dynatrace', 'Jenkins', 'REST APIs', 'Microservices'],
  },
  {
    role: 'Software Engineer',
    company: 'Accenture (Intuit QuickBooks)',
    location: 'Bengaluru',
    date: 'Sep 2022 — Jun 2024',
    bullets: [
      'Built backend services in Java/Spring Boot with Hibernate ORM for payroll subscription management; integrated REST and SOAP APIs consumed by web and mobile clients.',
      'Developed frontend modules using React & Redux — improved page load performance by ~20% through code splitting and lazy loading.',
      'Implemented OAuth 2.0 authentication and role-based access control for payroll API endpoints; ensured compliance with internal security audits.',
      'Optimized PostgreSQL queries via indexing, query plan analysis, and table partitioning — achieved ~25% improvement in p95 query latency for high-traffic endpoints.',
      'Maintained 85%+ code coverage with JUnit/Mockito and Playwright end-to-end test automation.',
    ],
    tags: ['Java', 'React', 'Redux', 'PostgreSQL', 'OAuth 2.0', 'Hibernate', 'Playwright'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <RevealDiv>
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>
      </RevealDiv>

      {EXPERIENCES.map((exp) => (
        <RevealDiv key={exp.date} className="exp-card">
          <div className="exp-top">
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company} · {exp.location}</div>
            </div>
            <div className="exp-date">{exp.date}</div>
          </div>
          <ul className="exp-bullets">
            {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="exp-tags">
            {exp.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </RevealDiv>
      ))}
    </section>
  )
}