// Email
import React from 'react';
import MailIcon from 'react-feather/dist/icons/mail';

import Contact from './Contact';
import BasicInfo from 'data/basicinfo';

export const Email = () => (
  <Contact
    icon={<MailIcon />}
    label='Email'
    username={BasicInfo.email}
    url={`mailto:${BasicInfo.email}`}
  />
);

export default Email;
