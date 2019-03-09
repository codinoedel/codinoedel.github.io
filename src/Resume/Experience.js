import React from 'react';

import Section from './Section';

import experience from 'data/experience';

export const Experience = () => (
  <Section heading='Experience'>
    { experience.map((e) => (
      <div key={e.company}>
        <h4>{e.company}</h4>
      </div>
    ))}
  </Section>
);

export default Experience;
