import React from 'react';

import './Section.css';

export const Section = ({ className, heading, children }) => (
  <section className="Section">
    <h3>{heading}</h3>
    <div className={className}>{children}</div>
  </section>
);

export default Section;
