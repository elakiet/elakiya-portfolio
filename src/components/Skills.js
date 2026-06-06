import React, { useState } from 'react';

const SKILLS = [
  { num:'01', cat:'Languages', tags:['Python','Java','C','C++','Solidity'] },
  { num:'02', cat:'Frontend', tags:['React.js','HTML','CSS','JavaScript'] },
  { num:'03', cat:'Backend', tags:['Node.js','Spring Boot','Flask','SQL','Firebase'] },
  { num:'04', cat:'AI / Blockchain', tags:['ML / AI','Mediapipe','ERC-20/721','OpenZeppelin','Polygon'] },
  { num:'05', cat:'Data & Cloud', tags:['Snowflake','ELK Stack','Firebase','Tririga','Red Prairie'] },
  { num:'06', cat:'Soft Skills', tags:['Leadership','Problem Solving','Communication','Adaptable','Collaborative'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 5%', background: 'var(--black)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <SectionTag data-aos="fade-up">02 — Capabilities</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2.5rem,5vw,5rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:'3rem' }}>
          Technical <span style={{color:'var(--red)'}}>Skills</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.5px' }}>
          {SKILLS.map((s, i) => <SkillCard key={s.num} {...s} delay={i%3*80} />)}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ num, cat, tags, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <div data-aos="fade-up" data-aos-delay={delay}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background:'var(--black2)', padding:'2rem', position:'relative', overflow:'hidden',
        transform: hov ? 'translateY(-6px)' : 'none',
        transition:'transform 0.35s ease', cursor:'default',
      }}>
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:3, background:'var(--red)',
        transform: hov ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left',
        transition:'transform 0.4s ease',
      }}/>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'3.5rem', color: hov ? 'rgba(227,0,15,0.18)':'rgba(227,0,15,0.08)', lineHeight:1, marginBottom:'0.5rem', transition:'color 0.3s' }}>{num}</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--red)', marginBottom:'1rem' }}>{cat}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
        {tags.map(t => (
          <span key={t} style={{
            fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', padding:'0.3rem 0.7rem',
            background: hov ? 'rgba(227,0,15,0.06)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${hov ? 'rgba(227,0,15,0.3)':'rgba(255,255,255,0.08)'}`,
            color:'var(--white)', letterSpacing:'0.05em', transition:'all 0.25s',
          }}>{t}</span>
        ))}
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
