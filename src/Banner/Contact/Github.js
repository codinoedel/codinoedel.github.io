// Github
import React from 'react';
import GithubIcon from 'react-feather/dist/icons/github';

import Contact from './Contact';
import BasicInfo from '../../data/basicinfo';

export const Github = () => (
  <Contact
    icon={<GithubIcon />}
    label='Github'
    username={BasicInfo.github}
    url={`https://github.com/${BasicInfo.github}`}
  />
);

export default Github;
