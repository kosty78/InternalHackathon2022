import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Banner2 from '../Banner2/index';
import Banner3 from '../Banner3/index';

const Hero2 = ({ fields }) => (
  <React.Fragment>
    <header className="defaultHero1">
      <div className="banner-internal">
        <Banner2
          fields={{
            title: fields.title.value,
            price: fields.price.value,
            buttonurl: fields.buttonurl.value,
            buttontext: fields.buttontext.value,
          }}
        ></Banner2>
      </div>
      <div className="banner-internal2">
        <Banner3
          fields={{
            title2: fields.title2.value,
            price2: fields.price2.value,
            buttonurl2: fields.buttonurl2.value,
            buttontext2: fields.buttontext2.value,
          }}
        ></Banner3>
      </div>
    </header>
  </React.Fragment>
);

export default Hero2;
