import React from 'react';
import classnames from 'classnames';

import Section from './Section';

import skills, { SKILL_LEVELS } from 'data/skills';

import './Skills.css';

const Skill = ({ name, level, freshness }) => (
  <div className='Skill'>
    <div className='name'>{name}</div>
    <div className={classnames('ranking', freshness)}>
      { SKILL_LEVELS.map((sl) => (
        <div className={classnames({yes: sl <= level }, 'level')} key={sl} />
      )) }
    </div>
  </div>
);

export const Skills = () => (
  <Section heading='Skills' className='Skills'>
    { skills.map((s) => <Skill name={s.name} level={s.level} freshness={s.freshness} key={s.name} />) }
  </Section>
);

export default Skills;
