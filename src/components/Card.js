import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const { children, className } = props;
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

Card.propTypes = {
  children: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};
export default Card;
