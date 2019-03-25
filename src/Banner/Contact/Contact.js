// Contact
import React from 'react';

import './Contact.css';

export const Contact = ({ icon, username, label, url }) => (
  <a href={url} target='_blank' className='Contact' rel="noopener noreferrer">
    {icon}
    <span>{label}</span>
    <pre>{username}</pre>
  </a>
);

export default Contact;
