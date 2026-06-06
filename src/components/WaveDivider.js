import React from 'react';

const BG_MAP = {
  red: 'var(--red)',
  black: 'var(--black)',
  black2: 'var(--black2)',
};

export default function WaveDivider({ from, to, flip = false }) {
  return (
    <div style={{ position: 'relative', height: 80, overflow: 'hidden', background: BG_MAP[from], lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute', bottom: 0, width: '100%', height: '100%',
          transform: flip ? 'scaleX(-1)' : 'none',
        }}>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={BG_MAP[to]} />
      </svg>
    </div>
  );
}
