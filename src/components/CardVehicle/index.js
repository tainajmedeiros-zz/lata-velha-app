import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  AttachMoney as AttachMoneyIcon,
  CalendarToday as CalendarTodayIcon,
} from '@material-ui/icons';
import formatFloatToBrazilianCurrency from '../../utils/currency';
import style from './style';
import messages from './messages';

const CardVehicle = (props) => {
  const {
    model,
    price,
    year,
    brandName,
    brandLogoUrl,
    onEditClick,
    onDeleteClick,
  } = props;
  const theme = useTheme();
  const classes = style(theme);
  const [checked, setChecked] = useState(false);

  return (
    <Card data-testid={"card-vehicle"}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" src={brandLogoUrl} alt={`${messages.defaultAlt.defaultMessage} ${brandName}`} />
        )}
        title={(
          <>
            <Typography variant="h6" component="h2" className={classes.model}>
              {model}
            </Typography>
          </>
        )}
        subheader={brandName}
      />
      <Divider />
      <CardContent className={classes.cardContent}>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AttachMoneyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={
              <Typography variant="h6" component="h3">{`${formatFloatToBrazilianCurrency(price)}`}</Typography>} secondary={messages.currentPrice.defaultMessage} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CalendarTodayIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={year} secondary={messages.vehicleYear.defaultMessage} />
          </ListItem>
        </List>
      </CardContent>
      <CardActions className={classes.cardActions} data-testid="card-vehicle_buttons">
        <IconButton aria-label={`editar veiculo ${model}`} onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label={`deletar veiculo ${model}`} onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

CardVehicle.propTypes = {
  model: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brandName: PropTypes.string.isRequired,
  brandLogoUrl: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default injectIntl(CardVehicle);
