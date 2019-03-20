import React from 'react';
import classnames from 'classnames';

import './Section.css';

export const Section = ({ className, heading, secondaryHeading, children }) => (
  <section className="Section">
    <div className="Heading">
      <h3>{heading}</h3>
      <div>{ secondaryHeading ? secondaryHeading : null }</div>
    </div>
    <div className={classnames('content', className)}>{children}</div>
  </section>
);

export default Section;
