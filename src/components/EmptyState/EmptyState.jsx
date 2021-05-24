import { Typography } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import parkingLot from '../../assets/imgs/parking_lot_nobg.png';
import messages from './messages';
import styles from './style';
const EmptyState = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <img src={parkingLot} alt="" style={{
        width: '400px',
        height: 'auto',
        margin: '20px auto',
      }} />
      <Typography variant='h3' component='h1' color='textSecondary' >
        <FormattedMessage { ...messages.emptyTitle } />
      </Typography>
    </div>
  );
}

export default EmptyState;