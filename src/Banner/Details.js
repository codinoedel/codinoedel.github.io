import React from 'react';

import BasicInfo from 'data/basicinfo';

import './Details.css';

export const Details = () => (
  <div className="Details">
    <div className="Details-header">
      <h3>{BasicInfo.title}</h3>
      <h3>{BasicInfo.location}</h3>
    </div>
    <div className="Details-bio">
      {BasicInfo.bio}
    </div>
  </div>
);

export default Details;
