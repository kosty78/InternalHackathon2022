import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const OurForm = (props) => (
  <>
    <form className="ourform" action="/thankyou">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          required
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Phone</label>
        <input type="password" required className="form-control" id="exampleInputPassword1" />
      </div>
      <input type="submit" value="Book Room" className="btn btn-primary"></input>
    </form>
  </>
);

export default OurForm;
