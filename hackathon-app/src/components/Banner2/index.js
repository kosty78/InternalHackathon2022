import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Banner2 = ({ fields }) => (
  <>
    <h1>{fields.title}</h1>
    <div></div>
    <p>{fields.price}</p>
    <a className="btn-primary" href={`${fields.buttonurl}`}>
      {fields.buttontext}
    </a>
  </>
);

export default Banner2;
