import React from 'react';

import Section from './Section';

import education from 'data/education';

export const Education = () => (
  <Section heading='Education'>
    { education.map((e) => (
      <div key={e.school}>
        <h4>{e.school}</h4>
      </div>
    ))}
  </Section>
);

export default Education;
