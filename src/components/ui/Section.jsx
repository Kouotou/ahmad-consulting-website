import React from 'react';

const Section = ({ children, className = '', id, background = 'light' }) => {
  const bgClass = `section-${background}`; // matches .section-light, .section-dark, etc. in index.css
  return (
    <section id={id} className={`section ${bgClass} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
