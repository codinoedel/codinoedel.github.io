// Contact
import React from 'react';

import './Contact.css';

export const Contact = ({ icon, label, url }) => (
  <a href={url} target='_blank' className='Contact' rel="noopener noreferrer">
    {icon}<span>{label}</span>
  </a>
);

export default Contact;
