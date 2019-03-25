// Github
import React from 'react';
import CodepenIcon from 'react-feather/dist/icons/codepen';

import Contact from './Contact';
import BasicInfo from 'data/basicinfo';

export const Codepen = () => (
  <Contact
    icon={<CodepenIcon />}
    label='Codepen'
    username={BasicInfo.codepen}
    url={`https://codepen.io/${BasicInfo.codepen}`}
  />
);

export default Codepen;
