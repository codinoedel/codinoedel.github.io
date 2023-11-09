import React from 'react';
import { format } from 'date-fns';

import Section from './Section';
import List from '../List';

import experience from '../data/experience';

import './Experience.css';

const monthFormat = (sd, ed) => `${format(sd, 'MMMM')} - ${format(ed, 'MMMM')} ${format(sd, 'YYYY')}`;

const yearFormat = (sd, ed) => `${format(sd, 'MMMM YYYY')} - ${ed ? format(ed, 'MMMM YYYY') : 'Present'}`;

export const Experience = () => (
  <Section heading='Experience' className='Experience'>
    { experience.map((e) => (
      <div key={e.company} className='company'>
        <h4 className='name'>{e.company}</h4>
        <h5 className='daterange'>{ typeof e.startDate === 'object'
          ? e.startDate.map((sd, idx) => monthFormat(sd, e.endDate[idx])).join(', ')
          : yearFormat(e.startDate, e.endDate)
        }</h5>
        <h6 className="title">{e.title}</h6>
        <p className='duties'>{e.duties}</p>
        { e.achievements ? <List items={e.achievements} className='achievements' /> : null }
      </div>
    ))}
  </Section>
);

export default Experience;
