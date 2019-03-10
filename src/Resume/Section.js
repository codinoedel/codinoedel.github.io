import React from 'react';
import classnames from 'classnames';

import './Section.css';

export const Section = ({ className, heading, children }) => (
  <section className="Section">
    <h3>{heading}</h3>
    <div className={classnames('content', className)}>{children}</div>
  </section>
);

export default Section;
