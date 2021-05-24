import React from 'react';
import { CardActions, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@material-ui/icons';
import RoundAvatar from '../RoundAvatar';
import style from './style';

const CardUser = (
  {
    name,
    email,
    onEditClick,
    onDeleteClick,
  }) => {
  const classes = style();

  return (
    <Card className={classes.root} data-testid={email}>
      <CardActionArea>
        <RoundAvatar imgAlt="Awesome User Avatar" imgSrc="https://www.w3schools.com/howto/img_avatar.png" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions} data-testid="card-user_buttons">
        <IconButton aria-label={`editar ${name}`} onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label={`deletar ${name}`} onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

CardUser.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default injectIntl(CardUser);
