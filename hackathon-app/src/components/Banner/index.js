import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Banner = ({ fields }) => (
  <>
    <h1>{fields.title}</h1>
    <div></div>
    <p>{fields.subtitle}</p>
    <a className="btn-primary" href={`${fields.buttonurl}`}>
      {fields.buttontext}
    </a>
  </>
);

export default Banner;
