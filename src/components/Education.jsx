import RevealDiv from './RevealDiv'
import './Education.css'

export default function Education() {
  return (
    <section id="education">
      <RevealDiv>
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
      </RevealDiv>

      <RevealDiv className="edu-card">
        <div className="edu-info">
          <h3>National Institute of Technology Karnataka, Surathkal</h3>
          <p>B.Tech &middot; Ranked 3rd among all NITs (NIRF) &middot; 2018 &ndash; 2022</p>
        </div>
        <div className="edu-badge">NIT-K &middot; Mangalore</div>
      </RevealDiv>
    </section>
  )
}
