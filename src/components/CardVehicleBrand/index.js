import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const CardVehicleBrand = ({ name, brandLogoUrl, onEditClick, onDeleteClick }) => {
  const classes = style();

  return (
    <Card className={classes.root} data-testid="card-vehicle-brand">
      <CardHeader
        avatar={(
          <Avatar 
            aria-label="recipe" 
            src={brandLogoUrl}
          />
        )}
        title={(
          <Typography variant="h5" component="h2" className={classes.name}>
            {name}
          </Typography>
        )}
      />
      <CardActions className={classes.cardActions} data-testid="card-vehicle-brand_buttons">
        <IconButton aria-label={`editar marca ${name}`} onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label={`deletar marca ${name}`} onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardVehicleBrand;

CardVehicleBrand.propTypes = {
  name: PropTypes.string.isRequired,
  brandLogoUrl: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
