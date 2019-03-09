import React from 'react';

import { Email, Github } from './Contact';

import BasicInfo from 'data/basicinfo';

import codi from './codi.jpg';
import './Card.css';

export const Card = () => (
  <div className="Card">
    <img src={codi} alt="A headshot of Codi" />
    <h1>{BasicInfo.name}</h1>
    <div className="Card-contact">
      <Github />
      <Email />
    </div>
  </div>
);

export default Card;
