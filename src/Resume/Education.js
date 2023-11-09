import React from 'react';
import { format } from 'date-fns';

import List from '../List';
import Section from './Section';

import education from '../data/education';

import './Education.css';

export const Education = () => (
  <Section heading='Education' className='Education'>
    { education.map((e) => (
      <div key={e.school} className='school'>
        <h4 className='name'>{e.school}</h4>
        <h5 className='daterange'>{format(e.completionDate, 'MMMM YYYY')}</h5>
        <h6 className='degree'>{e.degree}</h6>
        { e.achievements ? <List items={e.achievements} className='achievements' /> : null }
      </div>
    ))}
  </Section>
);

export default Education;
