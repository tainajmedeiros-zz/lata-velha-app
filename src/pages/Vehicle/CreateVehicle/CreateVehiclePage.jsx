import { Button, FormControl, FormHelperText, Input, InputAdornment, InputLabel, Typography, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Select from '../../../components/Select';
import FilterSelect from '../../../components/Select';
import messages from '../messages';
import style from './style';

const CreateVehiclePage = (props) => {
  const {
    onFormSubmitHandler,
    onFormChangeHandler,
    onCancelClickHandler,
    formValues,
    errorsValidation,
    validateField,
    brandOptions,
    isEditing,
  } = props;
  const theme = useTheme();
  const classes = style(theme);
  return (
    <>
      <Typography variant="h4" component="h1">
      {!isEditing ? <FormattedMessage {...messages.createVehicleTitle} /> : <FormattedMessage {...messages.editVehicleTitle} />}
      </Typography>
      <form onSubmit={onFormSubmitHandler}>
        <Select
          options={brandOptions}
          defaultOption={messages.textBrand.defaultMessage}
          label={messages.brand.defaultMessage}
          id="select-brand"
          onChangeHandler={onFormChangeHandler}
          value={formValues.brand}
          name="brand"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="model">
            <FormattedMessage {...messages.model} />
          </InputLabel>
          <Input
            id="model"
            name="model"
            value={formValues.model}
            onChange={onFormChangeHandler}
            aria-describedby="model-text"
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="year">
            <FormattedMessage {...messages.year} />
          </InputLabel>
          <Input
            id="year"
            type="number"
            name="year"
            value={formValues.year}
            onChange={onFormChangeHandler}
            aria-describedby="year-text"
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="price">
            <FormattedMessage {...messages.price} />
          </InputLabel>
          <Input
            type="number"
            id="price"
            name="price"
            value={formValues.price}
            onBlur={validateField}
            error={!errorsValidation.price.valid}
            onChange={onFormChangeHandler}
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            aria-describedby="price-text"
            required
          />
          <FormHelperText id="price-text" aria-live="assertive">
            {errorsValidation.price.text}
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

CreateVehiclePage.propTypes = {
  onFormSubmitHandler: PropTypes.func.isRequired,
  onFormChangeHandler: PropTypes.func.isRequired,
  onCancelClickHandler: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  errorsValidation: PropTypes.object.isRequired,
  validateField: PropTypes.func.isRequired,
  brandOptions: PropTypes.array.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default CreateVehiclePage;