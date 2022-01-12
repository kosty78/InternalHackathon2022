import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Banner from '../Banner/index';
import { Helmet } from 'react-helmet';

const Hero = ({ fields }) => (
  <React.Fragment>
    <header className="defaultHero">
      <div className="banner">
        <Banner
          fields={{
            title: fields.title.value,
            subtitle: fields.subtitle.value,
            buttonurl: fields.buttonurl.value,
            buttontext: fields.buttontext.value,
          }}
        ></Banner>
      </div>
    </header>
  </React.Fragment>
);

export default Hero;
