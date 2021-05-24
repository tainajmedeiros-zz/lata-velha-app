import { Typography } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import notFoundImg from '../../assets/imgs/404_nobg.png';
import style from './style';
import messages from './messages';
const NotFoundPage = () => {
  const classes = style();
  return (
    <div className={classes.container}>
      <img src={notFoundImg} alt="" style={{
        width: '400px',
        height: 'auto',
        margin: '20px auto',
      }} />
      <Typography variant='h3' component='h1' color='textSecondary' >
        <FormattedMessage { ...messages.notFoundTitle } />
      </Typography>
    </div>
  );
}

export default NotFoundPage;