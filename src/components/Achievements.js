import React, { useState } from 'react';

const ITEMS = [
  { icon:'🏆', title:'UNLV Graduate Symposium 2026', sub:'2nd Place + Prize Money · Poster Presentation, Computer Science (Graduate/PhD level)' },
  { icon:'🏆', title:'Anna University Women\'s TT Gold Medal', sub:"Gold Medalist at Anna University Table Tennis Tournament · Women's Category · State-level player" },
  { icon:'🎓', title:'Google Skill Badges', sub:'Verified public profile with completed Google learning credentials in cloud and development' },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding:'6rem 5%', background:'var(--black2)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>05 — Recognition</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2.5rem,5vw,5rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:'3rem' }}>
          Notable <span style={{color:'var(--red)'}}>Achievements</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem' }}>
          {ITEMS.map((a,i) => <AchCard key={i} {...a} delay={i*100} />)}
        </div>
      </div>
    </section>
  );
}

function AchCard({ icon, title, sub, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div data-aos="fade-right" data-aos-delay={delay}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background:'var(--black)', borderLeft:`3px solid var(--red)`, padding:'2rem',
        display:'flex', gap:'1.2rem', alignItems:'flex-start',
        transform: hov ? 'translateX(6px)' : 'none',
        transition:'all 0.35s ease',
      }}>
      <div style={{ fontSize:'1.8rem', flexShrink:0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem', letterSpacing:'0.04em', marginBottom:'0.4rem' }}>{title}</div>
        <div style={{ fontSize:'0.83rem', color:'var(--gray)', fontStyle:'italic' }}>{sub}</div>
      </div>
    </div>
  );
}

function SectionTag({ children }) {
  return (
    <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--red)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
      {children}<span style={{ width:40, height:1, background:'var(--red)', opacity:0.5, display:'inline-block' }}/>
    </div>
  );
}
