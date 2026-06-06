import React, { useState } from 'react';

const JOBS = [
  { period:'Summer 2026 — Present', role:'Research Assistant', company:'University of Nevada, Las Vegas', desc:'Developing an automation pipeline that processes incoming data sources, applies AI-based extraction logic, and delivers structured outputs to downstream systems with real-time notifications.' },
  { period:'07/2025 — 12/2025', role:'System Analyst', company:'Flex Ltd. · Chennai, India', desc:'Worked on enterprise logistics platforms including eFreight, Atlas, Tririga, Red Prairie, and Command Center. Leveraged IT tools and automation practices to improve operational efficiency.' },
  { period:'02/2025 — 04/2025', role:'Associate Software Engineer', company:'Flex Ltd. · Chennai, India (Internship)', desc:'Part of the Snowflake and ELK support team. Contributed to internal projects by developing full-stack web applications with ReactJS frontends and scalable NodeJS backends.' },
  { period:'01/2023 — 02/2023', role:'CyberSecurity Intern', company:'Zybeak Technologies · Chennai', desc:'Completed a comprehensive cybersecurity internship, gaining practical knowledge in identifying and mitigating security threats.' },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding:'6rem 5%', background:'var(--black2)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>03 — Career</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2.5rem,5vw,5rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:'3rem' }}>
          Work <span style={{color:'var(--red)'}}>Experience</span>
        </h2>
        <div style={{ position:'relative', paddingLeft:'3rem' }}>
          <div style={{ position:'absolute', left:8, top:0, bottom:0, width:1, background:'linear-gradient(to bottom, var(--red), transparent)' }}/>
          {JOBS.map((j,i) => <TimelineItem key={i} {...j} delay={i*100} />)}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ period, role, company, desc, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div data-aos="fade-left" data-aos-delay={delay}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position:'relative', marginBottom:'3.5rem' }}>
      <div style={{
        position:'absolute', left:'-2.6rem', top:'0.4rem',
        width:16, height:16,
        border:'2px solid var(--red)', background: hov ? 'var(--red)' : 'var(--black2)',
        rotate:'45deg', transition:'background 0.3s',
      }}/>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', letterSpacing:'0.12em', color:'var(--red)', marginBottom:'0.4rem' }}>{period}</div>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.8rem', letterSpacing:'0.04em', marginBottom:'0.2rem' }}>{role}</div>
      <div style={{ fontSize:'0.85rem', color:'var(--gray)', fontStyle:'italic', marginBottom:'0.8rem' }}>{company}</div>
      <div style={{ color:'var(--gray)', fontSize:'0.88rem', lineHeight:1.8, maxWidth:680 }}>{desc}</div>
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
