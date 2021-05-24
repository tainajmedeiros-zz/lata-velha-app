import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button, useTheme } from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import style from './style';
import messages from './messages';

const ActionBar = () => {
  const path = useLocation().pathname;
  const theme = useTheme();
  const classes = style(theme);

  return (
    <div className={classes.actionBar}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        component={Link}
        to={`${path}/add`}
        className={classes.addButton}
        data-testid="add-button"
      >
        <FormattedMessage {...messages.addButton} />
      </Button>
    </div>
  );
};

export default ActionBar;
