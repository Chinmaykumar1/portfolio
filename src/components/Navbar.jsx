import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        const top = section.offsetTop - 120
        if (window.scrollY >= top) {
          current = section.getAttribute('id')
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-logo">chinmay.dev</div>
      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={active === href.slice(1) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}