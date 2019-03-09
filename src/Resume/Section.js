import React from 'react';

export const Section = ({ heading, children }) => (
  <section>
    <h4>{heading}</h4>
    <div>{children}</div>
  </section>
);

export default Section;
