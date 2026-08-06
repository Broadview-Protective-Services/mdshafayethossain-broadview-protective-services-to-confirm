import React from 'react';

function BrandLogo({ footer = false, onClick }) {
  return (
    <a
      className={footer ? 'brand-logo brand-logo-footer brand-logo-glow' : 'brand-logo brand-logo-glow'}
      href="#home"
      onClick={onClick}
      aria-label="Broadview Protective Services — Home"
    >
      <img
        src="/images/broadview-logo.png"
        alt="Broadview Protective Services logo"
        className="brand-logo-img"
        width="280"
        height="80"
        loading="eager"
      />
    </a>
  );
}

export default BrandLogo;
