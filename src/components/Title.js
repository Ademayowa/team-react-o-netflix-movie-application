import React, { Fragment } from 'react';

const Title = ({ title, info }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{info}</p>
    </Fragment>
  );
};

export default Title;
