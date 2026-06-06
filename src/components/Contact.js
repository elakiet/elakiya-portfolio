import React, { useState } from 'react';

const LINKS = [
  { label:'elaki.kavin@gmail.com', href:'mailto:elaki.kavin@gmail.com' },
  { label:'github.com/elakiet', href:'https://github.com/elakiet' },
  { label:'linkedin.com/in/elakiya-rs', href:'https://linkedin.com/in/elakiya-rs-0b725722a/' },
  { label:'elakiet.github.io/Profile', href:'https://elakiet.github.io/Profile/' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding:'7rem 5%', background:'var(--red)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', bottom:'-0.1em', right:'-0.05em', fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(5rem,20vw,20rem)', color:'rgba(0,0,0,0.12)', lineHeight:1, pointerEvents:'none', userSelect:'none', letterSpacing:'0.02em' }}>HIRE</div>
      <div style={{ maxWidth:1300, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', position:'relative', zIndex:1 }} className="contact-grid">
        <div data-aos="fade-right">
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(3rem,6vw,7rem)', lineHeight:0.92, letterSpacing:'0.04em', color:'#fff', marginBottom:'1.5rem' }}>
            Let's Work<br/>Together
          </h2>
          <p style={{ color:'rgba(255,255,255,0.75)', lineHeight:1.8, marginBottom:'2rem' }}>
            Open to research collaborations, full-stack engineering roles, and blockchain projects. Let's build something meaningful.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
            {LINKS.map(l => <ContactItem key={l.label} {...l} />)}
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(2rem,3.5vw,3.5rem)', lineHeight:1.1, letterSpacing:'0.04em', color:'#fff', marginBottom:'2rem' }}>
            "Build elegant solutions to complex problems."
          </div>
          <p style={{ color:'rgba(255,255,255,0.7)', lineHeight:1.8, fontSize:'0.92rem', marginBottom:'2.5rem' }}>
            Currently pursuing MS in Computer Science at UNLV while actively conducting research on AI automation pipelines. Based in Las Vegas — open to remote opportunities worldwide.
          </p>
          <DarkBtn href="mailto:elaki.kavin@gmail.com">Send a Message →</DarkBtn>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function ContactItem({ label, href }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display:'flex', alignItems:'center', gap:'1rem',
        fontFamily:"'JetBrains Mono',monospace", fontSize:'0.78rem',
        color: h ? '#fff' : 'rgba(255,255,255,0.75)',
        padding:'0.8rem 0', borderBottom:'1px solid rgba(255,255,255,0.1)',
        transition:'color 0.3s',
      }}>
      <div style={{ width:8, height:8, background: h ? 'var(--black)' : '#fff', rotate:'45deg', flexShrink:0, transition:'background 0.3s' }}/>
      {label}
    </a>
  );
}

function DarkBtn({ children, href }) {
  const [h, setH] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display:'inline-block', background: h ? 'var(--black2)' : 'var(--black)',
        color:'#fff', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem',
        letterSpacing:'0.12em', textTransform:'uppercase', padding:'0.9rem 2.2rem',
        transform: h ? 'translateY(-3px)' : 'none', transition:'all 0.3s ease',
      }}>{children}</a>
  );
}
