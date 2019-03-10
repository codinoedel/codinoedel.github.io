import React from 'react';
import classnames from 'classnames';

import './List.css';

export const List = ({ className, items }) => (
  <ul className={classnames('List', className)}>
    { items.map((i, idx) => (
      <li key={idx}>
        <p>{i.value}</p>
        { i.resource ? <a href={i.resource}>{i.resource}</a> : null }
      </li>
    )) }
  </ul>
);

export default List;
