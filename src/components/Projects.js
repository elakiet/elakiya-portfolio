import React, { useState } from 'react';

const PROJECTS = [
  { num:'01', title:'MoodBeatz', desc:'AI-driven music recommendation system using facial emotion analysis for personalized playlists. Deep learning models for emotion classification and adaptive playlist generation.', stack:['ML / AI','Mediapipe','Flask','Python'], link:'https://github.com/elakiet/MoodBeatz/tree/main' },
  { num:'02', title:'Blockchain Token', desc:'Deployed secure ERC-20 & ERC-721 tokens on Polygon network using OpenZeppelin libraries. Optimized for fast transactions and low gas fees on Polygon blockchain.', stack:['Solidity','RemixIDE','Metamask','Polygon'], link:'https://github.com/elakiet/ERCToken' },
  { num:'03', title:'Quiz App', desc:'Interactive quiz application with user-selected categories, difficulty levels, and customizable timers. Visual progress bar with real-time score updates and instant answer feedback.', stack:['JavaScript','HTML','CSS'] },
  { num:'04', title:'Candy Crush Clone', desc:'Interactive Candy Crush game using JavaScript with drag-and-drop candies on an 8×8 grid. Real-time score updates via DOM manipulation for dynamic player tracking.', stack:['JavaScript','HTML','CSS','DOM API'] },
  { num:'05', title:'AI Automation Pipeline', desc:'Research project at UNLV — processes incoming data sources, applies AI-based extraction logic, and delivers structured outputs to downstream systems with real-time notifications.', stack:['Python','AI/ML','Research'] },
  { num:'06', title:'Enterprise Logistics', desc:'Contributed to eFreight, Atlas, Tririga, Red Prairie & Command Center platforms at Flex Ltd. IT automation practices for operational efficiency improvements.', stack:['Snowflake','ELK','ReactJS','NodeJS'] },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding:'6rem 5%', background:'var(--black)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>04 — Work</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2.5rem,5vw,5rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:'3rem' }}>
          Selected <span style={{color:'var(--red)'}}>Projects</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.5px' }}>
          {PROJECTS.map((p,i) => <ProjectCard key={p.num} {...p} delay={i%3*100} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ num, title, desc, stack, link, delay }) {
  const [hov, setHov] = useState(false);
  const Tag = link ? 'a' : 'div';
  return (
    <Tag href={link} target={link ? '_blank' : undefined} rel={link ? 'noreferrer' : undefined}
      data-aos="fade-up" data-aos-delay={delay}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background:'var(--black2)', padding:'2.5rem', position:'relative', overflow:'hidden',
        transform: hov ? 'translateY(-8px)' : 'none',
        boxShadow: hov ? '0 20px 60px rgba(0,0,0,0.4)' : 'none',
        borderBottom: `3px solid ${hov ? 'var(--red)' : 'transparent'}`,
        transition:'all 0.35s ease', cursor: link ? 'pointer' : 'default',
        display:'block', color:'inherit',
      }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(227,0,15,0.04),transparent)', opacity: hov ? 1 : 0, transition:'opacity 0.4s' }}/>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'4rem', lineHeight:1, color: hov ? 'rgba(227,0,15,0.2)':'rgba(227,0,15,0.1)', marginBottom:'0.8rem', transition:'color 0.3s' }}>{num}</div>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.6rem', letterSpacing:'0.04em', marginBottom:'0.8rem', color:'var(--white)' }}>{title}</div>
      <div style={{ color:'var(--gray)', fontSize:'0.85rem', lineHeight:1.8, marginBottom:'1.5rem' }}>{desc}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
        {stack.map(s => (
          <span key={s} style={{
            fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', padding:'0.25rem 0.6rem',
            border:'1px solid rgba(227,0,15,0.3)', color:'var(--red)',
            letterSpacing:'0.06em', background: hov ? 'rgba(227,0,15,0.08)' : 'transparent',
            transition:'background 0.25s',
          }}>{s}</span>
        ))}
      </div>
    </Tag>
  );
}

function SectionTag({ children }) {
  return (
    <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--red)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
      {children}<span style={{ width:40, height:1, background:'var(--red)', opacity:0.5, display:'inline-block' }}/>
    </div>
  );
}
