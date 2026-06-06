import React, { useState, useEffect } from 'react';

const NAV_LINKS = ['Home','About','Skills','Experience','Projects','Contact'];
const SECTION_IDS = { Home:'hero', About:'about', Skills:'skills', Experience:'experience', Projects:'projects', Contact:'contact' };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '0 5%', height: 70,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(227,0,15,0.15)',
        boxShadow: scrolled ? '0 4px 30px rgba(227,0,15,0.1)' : 'none',
        transition: 'all 0.35s ease',
      }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.1em', color: 'var(--white)', cursor: 'pointer' }}
          onClick={() => scrollTo('hero')}>
          Ela<span style={{ color: 'var(--red)' }}>.</span>
        </div>

        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}
          className="nav-desktop-links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <NavLink label={link} onClick={() => scrollTo(SECTION_IDS[link])} />
            </li>
          ))}
        </ul>

        <button onClick={() => scrollTo('contact')} style={{
          background: 'var(--red)', color: '#fff', border: 'none', cursor: 'pointer',
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
          letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.55rem 1.4rem',
          transition: 'background 0.3s, transform 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = 'var(--red-dark)'}
          onMouseLeave={e => e.target.style.background = 'var(--red)'}
          className="nav-hire">
          Hire Me
        </button>

        {/* Hamburger */}
        <div onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 5,
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2, background: 'var(--white)',
              transition: 'all 0.3s',
              transform: menuOpen
                ? (i===0 ? 'translateY(7px) rotate(45deg)' : i===2 ? 'translateY(-7px) rotate(-45deg)' : 'none')
                : 'none',
              opacity: menuOpen && i===1 ? 0 : 1,
            }} />
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 70, left: 0, right: 0, zIndex: 499,
        background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)',
        padding: '2rem 5%', flexDirection: 'column', gap: '1.5rem',
        borderBottom: '1px solid rgba(227,0,15,0.2)',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
      }} className="mobile-menu">
        {NAV_LINKS.map(link => (
          <button key={link} onClick={() => scrollTo(SECTION_IDS[link])} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--gray)', padding: '0.5rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'left', transition: 'color 0.3s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--red)'}
            onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            {link}
          </button>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          .nav-desktop-links{display:none!important}
          .nav-hire{display:none!important}
          .hamburger{display:flex!important}
          .mobile-menu{display:flex!important}
        }
        @media(min-width:769px){
          .mobile-menu{display:none!important}
        }
      `}</style>
    </>
  );
}

function NavLink({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: hovered ? 'var(--white)' : 'var(--gray)',
        transition: 'color 0.3s', padding: '4px 0',
        position: 'relative',
      }}>
      {label}
      <span style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1.5px', background: 'var(--red)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: hovered ? 'left' : 'right',
        transition: 'transform 0.3s ease',
        display: 'block',
      }} />
    </button>
  );
}
