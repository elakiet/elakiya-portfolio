import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background:'var(--black)', padding:'2rem 5%',
      display:'flex', justifyContent:'space-between', alignItems:'center',
      borderTop:'1px solid rgba(227,0,15,0.15)',
      fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem',
      letterSpacing:'0.08em', color:'var(--gray2)', flexWrap:'wrap', gap:'1rem',
    }}>
      <span style={{ color:'var(--red)' }}>Elakiya RS</span>
      <span>© 2026 — All Rights Reserved</span>
      <span>Las Vegas, NV</span>
    </footer>
  );
}
