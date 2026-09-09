import { useState } from 'react'

function Header({ title, subtitle, navLinks }) {
  const [active, setActive] = useState(navLinks[0])

  return (
    <header className="header">
      <h1 className="hero-title">{title}</h1>
      <p className="tagline">{subtitle}</p>

      <nav className="navbar">
        {navLinks.map((link) => (
          <button
            key={link}
            type="button"
            className={`nav-link ${active === link ? 'nav-link--active' : ''}`}
            onClick={() => setActive(link)}
          >
            {link}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header