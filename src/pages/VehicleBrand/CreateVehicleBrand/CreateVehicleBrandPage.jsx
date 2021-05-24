import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import styles from './style';

const CreateVehicleBrandPage = (props) => {
  const {
    onFormSubmitHandler,
    onFormChangeHandler,
    onCancelClickHandler,
    isEditing,
    brandValue
  } = props;

  const classes = styles();
  return (
    <>
      <Typography variant="h4" component="h1">
        {!isEditing ? <FormattedMessage {...messages.createVehicleBrandTitle} /> : <FormattedMessage {...messages.editVehicleBrandTitle} />}
      </Typography>
      <form
        onSubmit={onFormSubmitHandler}
      >
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="brand">
            <FormattedMessage {...messages.brand} />
          </InputLabel>
          <Input
            id="brand"
            value={brandValue}
            onChange={onFormChangeHandler}
            aria-describedby="brand-text"
            required
          />
          <FormHelperText id="brand-text">
            <FormattedMessage {...messages.textBrand} />
          </FormHelperText>
        </FormControl>

        <Button
          className={classes.formButton}
          variant="contained"
          color="default"
          type="button"
          onClick={onCancelClickHandler}
        >
          <FormattedMessage {...messages.buttonCancel} />
        </Button>
        <Button
          className={classes.formButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          {!isEditing ? <FormattedMessage {...messages.buttonCad} /> : <FormattedMessage {...messages.buttonEdit} />}
        </Button>
      </form>
    </>
  );
}

CreateVehicleBrandPage.propTypes = {
  onFormSubmitHandler: PropTypes.func.isRequired,
  onFormChangeHandler: PropTypes.func.isRequired,
  onCancelClickHandler: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  brandValue: PropTypes.string.isRequired,
}

export default CreateVehicleBrandPage;