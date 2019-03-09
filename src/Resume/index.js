import React from 'react';
import classnames from 'classnames';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export const Resume = ({ className }) => (
  <div className={classnames(className)}>
    <Experience />
    <Skills />
    <Education />
  </div>
);

export default Resume;
