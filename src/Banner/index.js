import React from 'react';
import classnames from 'classnames';

import Card from './Card';
import Details from './Details';

import './Banner.css';

export const Banner = ({ className }) => (
  <div className={classnames(className, "Banner")}>
    <div className="Banner-content">
      <Card />
      <Details />
    </div>
  </div>
);

export default Banner;
