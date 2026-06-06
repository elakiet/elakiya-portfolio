import React from 'react';
import profileImg2 from '../assets/profile2.jpg';
import trophyImg from '../assets/trophy.jpg';

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 5%', background: 'var(--black2)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
        
        <div style={{ position: 'relative' }} data-aos="fade-right">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
            <img src={profileImg2} alt="Elakiya RS" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(227,0,15,0.1))', pointerEvents: 'none' }} />
            
          </div>
          <StatBadge top="2rem" right="-2rem" bg="var(--red)" num="8.5" label="BE CGPA" />
<div style={{
  position: 'absolute', bottom: '2rem', left: '-2rem',
  background: 'var(--black)', padding: '0.7rem 1rem',
  fontFamily: "'JetBrains Mono', monospace",
  display: 'flex', alignItems: 'center', gap: '0.6rem',
}}>
  <img src={trophyImg} alt="UNLV Symposium 2nd Place" style={{ width: 48, height: 48, objectFit: 'contain' }} />
  <div>
    <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>UNLV Project Symposium</span> 
  </div>
</div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <Tag>01 — About Me</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,5vw,5rem)', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Hi, my name is <span style={{ color: 'var(--red)' }}>ELAKIYA</span>
          </h2>
          {['A passionate Computer Science graduate student at UNLV, dedicated to crafting clean, functional, and highly scalable web applications and AI pipelines.',
            'With experience at Flex Ltd. as both a System Analyst and Associate Software Engineer, I\'ve worked across enterprise logistics platforms, ELK/Snowflake data systems, and built full-stack applications from the ground up.',
            'Currently researching AI automation pipelines at UNLV, while being a state-level table tennis player and Anna University Women\'s TT gold medalist outside the lab.'
          ].map((p, i) => (
            <p key={i} style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '0.95rem' }}>{p}</p>
          ))}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {[['GitHub →', 'https://github.com/elakiet'], ['LinkedIn →', 'https://linkedin.com/in/elakiya-rs-0b725722a/']].map(([label, url]) => (
              <Pill key={label} href={url}>{label}</Pill>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .about-grid{grid-template-columns:1fr!important; } }
      `}</style>
    </section>
  );
}

function StatBadge({ top, bottom, left, right, bg, num, label }) {
  return (
    <div style={{
      position: 'absolute', top, bottom, left, right,
      background: bg, padding: '0.7rem 1rem',
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', display: 'block' }}>{num}</span>
      <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{label}</span>
    </div>
  );
}

function Tag({ children }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
      {children}
      <span style={{ width: 40, height: 1, background: 'var(--red)', opacity: 0.5, display: 'inline-block' }} />
    </div>
  );
}

function Pill({ children, href }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        padding: '0.6rem 1.2rem', border: `1px solid ${h ? 'var(--red)' : 'var(--gray2)'}`,
        color: h ? 'var(--red)' : 'var(--gray)',
        transform: h ? 'translateY(-2px)' : 'none',
        transition: 'all 0.3s ease',
      }}>{children}</a>
  );
}
