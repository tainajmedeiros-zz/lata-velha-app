import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import FormValidations from '../../../contexts/formValidations';
import useErrors from '../../../hooks/useErrors';
import useVehicleBrandService from '../../../hooks/useVehicleBrandService';
import useVehicleService from '../../../hooks/useVehicleService';
import Vehicle from '../../../models/Vehicle/VehicleForm';
import messages from '../messages';
import CreateVehiclePage from './CreateVehiclePage';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';


const CreateVehicle = ({ location }) => {
  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);
  const initialFormState = {
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    brand: '_'
  };
  const editForm = location.state?.form;

  const [form, setFormState] = useState(editForm ?? initialFormState);
  const [brandOptions, setBrandOptions] = useState([{ id: 0, name: '_' }]);

  const brandService = useVehicleBrandService();
  const vehicleService = useVehicleService();
  const history = useHistory();

  useEffect(() => {
    loadBrandsList();
  }, []);

  const loadBrandsList = async () => {
    try {
      const listOfBrands = await brandService.listAll();
      setBrandOptions(listOfBrands);
    } catch (error) {
      toast.error(messages.listError.defaultMessage);
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (isEditing()) {
      editVehicle();
    } else {
      createVehicle();
    }
  };

  const createVehicle = async () => {
    try {
      if (formIsValid()) {
        const { model, brand, year, price } = form;
        const apiResponse = await vehicleService.create(
          Vehicle(model, brand, year, price)
        );
        if (apiResponse.success) {
          resetFormStates();
          toast.success(messages.vehicleCreated.defaultMessage);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const editVehicle = async () => {
    try {
      if (formIsValid()) {
        const { model, brand, year, price } = form;
        const vehicle = Vehicle(model, brand, year, price);
        const { id } = editForm;
        const apiResponse = await vehicleService.update(id, vehicle);

        if (apiResponse) {
          resetFormStates();
          toast.success(messages.vehicleUpdated.defaultMessage);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const isEditing = () => {
    return typeof editForm !== 'undefined';
  }

  const resetFormStates = () => {
    setFormState({ ...initialFormState });
  }

  const onFormChange = (e) => {
    const { name, value } = e.target;
    const newFormState = { ...form };
    newFormState[name] = value;
    setFormState(newFormState);
  }

  const onCancelClick = () => {
    history.goBack();
  }

  return (
    <CreateVehiclePage
      onFormSubmitHandler={onFormSubmit}
      onFormChangeHandler={onFormChange}
      onCancelClickHandler={onCancelClick}
      errorsValidation={errors}
      validateField={validateField}
      brandOptions={brandOptions}
      formValues={form}
      isEditing={isEditing()}
    />
  );
};

CreateVehicle.propTypes = {
  location: PropTypes.object
};

export default CreateVehicle;
