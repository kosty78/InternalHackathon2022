import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Banner3 = ({ fields }) => (
  <>
    <h1>{fields.title2}</h1>
    <div></div>
    <p>{fields.price2}</p>
    <a className="btn-primary" href={`${fields.buttonurl2}`}>
      {fields.buttontext2}
    </a>
  </>
);

export default Banner3;
