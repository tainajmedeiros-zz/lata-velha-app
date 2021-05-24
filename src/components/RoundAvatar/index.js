import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const RoundAvatar = ({ imgSrc, imgAlt }) => {
  const classes = style();
  return (
    <div className={classes.container}>
      <img src={imgSrc} alt={imgAlt} className={classes.avatarImage} data-testid="round-avatar-img" />
    </div>
  );
};

RoundAvatar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default RoundAvatar;
