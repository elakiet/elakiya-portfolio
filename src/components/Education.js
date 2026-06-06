import React, { useState } from 'react';

const EDU = [
  { deg:'MS Computer Science', school:'University of Nevada, Las Vegas', year:'January 2026 — Present · GPA 3.66/4.0 (Sem 1)' },
  { deg:'B.E. Computer Science & Engineering', school:'Saveetha Engineering College', year:'2021 — 2025 · CGPA 8.5' },
];

export default function Education() {
  return (
    <section id="education" style={{ padding:'6rem 5%', background:'var(--black)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>06 — Academia</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2.5rem,5vw,5rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:'3rem' }}>
          My <span style={{color:'var(--red)'}}>Education</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5px' }}>
          {EDU.map((e,i) => <EduCard key={i} {...e} delay={i*100} />)}
        </div>
      </div>
    </section>
  );
}

function EduCard({ deg, school, year, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div data-aos="flip-left" data-aos-delay={delay}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background:'var(--black2)', padding:'2.5rem', position:'relative', overflow:'hidden',
        transform: hov ? 'translateY(-5px)' : 'none', transition:'transform 0.35s ease',
      }}>
      <div style={{
        position:'absolute', bottom:0, left:0, right:0, height:2, background:'var(--red)',
        transform: hov ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: hov ? 'left' : 'right', transition:'transform 0.4s ease',
      }}/>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.5rem', letterSpacing:'0.04em', marginBottom:'0.4rem' }}>{deg}</div>
      <div style={{ fontSize:'0.88rem', color:'var(--red)', fontStyle:'italic', marginBottom:'0.5rem' }}>{school}</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', letterSpacing:'0.1em', color:'var(--gray)' }}>{year}</div>
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
