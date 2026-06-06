import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/profile.jpg';

const ROLES = ['Full Stack Developer', 'AI/ML Engineer', 'Blockchain Developer', 'Research Assistant'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setTyped(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 55);
      } else {
        setDeleting(false);
        setRoleIdx(r => (r + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, charIdx, deleting, roleIdx]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', background: 'var(--red)',
      display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '80px 5% 0',
    }}>
      {/* BG watermark */}
      <div style={{
        position: 'absolute', bottom: '-0.05em', left: 0, right: 0,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(5rem,18vw,17rem)',
        color: 'rgba(0,0,0,0.12)', letterSpacing: '0.02em',
        whiteSpace: 'nowrap', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
      }}>ELAKIYA</div>

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'flex-end', gap: '2rem',
        width: '100%', maxWidth: 1400, margin: '0 auto',
      }} className="hero-grid">

        {/* Left */}
        <div style={{ paddingBottom: '5rem' }} className="hero-left">
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
            marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem',
          }}>
            <span style={{ width: 30, height: 1, background: 'rgba(255,255,255,0.5)', display: 'inline-block' }} />
            MS Computer Science · UNLV · Las Vegas
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.5rem,9vw,9rem)',
            lineHeight: 0.92, letterSpacing: '0.02em', color: '#fff', marginBottom: '1.2rem',
          }}>
            Elakiya<br />
            <span style={{ color: 'rgba(255,255,255,0.15)', WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>R.S.</span>
          </h1>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.75rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.06em', marginBottom: '2rem', minHeight: '1.5em',
          }}>
            {typed}<span style={{ opacity: blink ? 1 : 0, color: '#fff', transition: 'opacity 0.1s' }}>|</span>
          </div>
          <p style={{
            fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)',
            maxWidth: 460, marginBottom: '2.5rem',
          }}>
            Building elegant full-stack solutions and AI-driven pipelines. From Solidity smart contracts to React frontends — I engineer with curiosity and precision.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-btns">
            <HeroBtn primary onClick={() => scrollTo('projects')}>View My Work</HeroBtn>
            <HeroBtn onClick={() => scrollTo('contact')}>Contact Me</HeroBtn>
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} className="hero-right">
          <div style={{ position: 'relative', width: 'clamp(220px,36vw,440px)' }}>
            <img src={profileImg} alt="Elakiya RS" style={{
              width: '100%', display: 'block',
              objectFit: 'cover', objectPosition: 'top center',
              filter: 'contrast(1.08) brightness(0.95)',
            }} />
            <FloatCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
      }}>
        <span>Scroll</span>
        <ScrollLine />
      </div>

      <style>{`
        @media(max-width:1024px){
          .hero-grid{grid-template-columns:1fr!important}
          .hero-right{justify-content:center!important;order:-1;margin-top:1rem}
          .hero-left{padding-bottom:2rem!important}
          .hero-right img{max-width:min(300px,65vw)!important}
        }
        @media(max-width:480px){
          .hero-btns{flex-direction:column!important}
          .hero-btns button{width:100%!important}
        }
      `}</style>
    </section>
  );
}

function HeroBtn({ children, primary, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: primary ? (h ? 'var(--black)' : '#fff') : 'transparent',
        color: primary ? (h ? '#fff' : 'var(--red)') : '#fff',
        border: primary ? 'none' : `1.5px solid ${h ? '#fff' : 'rgba(255,255,255,0.5)'}`,
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        padding: '0.85rem 2rem', cursor: 'pointer', fontWeight: 600,
        transform: h ? 'translateY(-3px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
      {children}
    </button>
  );
}

function FloatCard() {
  const [y, setY] = useState(0);
  const dir = useRef(1);
  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += dir.current * 0.3;
      if (v >= 8 || v <= 0) dir.current *= -1;
      setY(v);
    }, 30);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{
      position: 'absolute', bottom: '2rem', left: '-1.5rem',
      background: 'var(--black)', padding: '0.7rem 1rem',
      borderLeft: '3px solid var(--red)',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      transform: `translateY(${-y}px)`, transition: 'transform 0.03s linear',
    }}>
      <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--red)', display: 'block' }}>6mo</span>
      Full-time Exp
    </div>
  );
}

function ScrollLine() {
  const [p, setP] = useState(0);
  const [phase, setPhase] = useState('grow');
  useEffect(() => {
    const id = setInterval(() => {
      setP(prev => {
        if (phase === 'grow' && prev < 1) return prev + 0.04;
        if (phase === 'shrink' && prev > 0) return prev - 0.04;
        return prev;
      });
    }, 30);
    return () => clearInterval(id);
  }, [phase]);
  useEffect(() => {
    if (p >= 1) setPhase('shrink');
    if (p <= 0 && phase === 'shrink') setPhase('grow');
  }, [p, phase]);
  return (
    <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(255,255,255,0.6)',
        height: `${p * 100}%`,
        transformOrigin: phase === 'grow' ? 'top' : 'bottom',
        transition: 'none',
      }} />
    </div>
  );
}
