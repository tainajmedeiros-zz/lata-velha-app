import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import useVehicleBrandService from '../../../hooks/useVehicleBrandService';
import VehicleBrand from '../../../models/VehicleBrand/VehicleBrand';
import messages from '../messages';
import CreateVehicleBrandPage from './CreateVehicleBrandPage';

const CreateVehicleBrand = ({ location }) => {

  const editForm = location.state?.form;
  const [brand, setBrand] = useState(editForm?.name ?? '');
  
  const brandService = useVehicleBrandService();
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing()) {
      console.log('here');
      editVehicleBrand();
    } else {
      createVehicleBrand();
    }
  };

  const createVehicleBrand = async () => {
    try {
      const apiResponse = await brandService.create(
        VehicleBrand(brand)
      );
      if (apiResponse.success) {
        resetFormStates();
        toast.success(messages.vehicleBrandCreated.defaultMessage);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const editVehicleBrand = async () => {
    try {
        const vehicleBrand = VehicleBrand(brand);
        const { id } = editForm;
        const apiResponse = await brandService.update(id, vehicleBrand);
        if (apiResponse) {
          resetFormStates();
          toast.success(messages.vehicleBrandUpdated.defaultMessage);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const isEditing = () => {
    return typeof editForm !== 'undefined';
  }

  const resetFormStates = () => {
    setBrand('');
  }

  const onCancelClick = () => {
    history.goBack();
  }

  //   <CreateVehiclePage
  //   onFormSubmitHandler={onFormSubmit}
  //   onFormChangeHandler={onFormChange}
  //   onCancelClickHandler={onCancelClick}
  //   errorsValidation={errors}
  //   validateField={validateField}
  //   brandOptions={brandOptions}
  //   formValues={form}
  //   isEditing={isEditing()}
  // />
  return (
    <CreateVehicleBrandPage
      onFormSubmitHandler={onFormSubmit}
      onFormChangeHandler={(e) => setBrand(e.target.value)}
      onCancelClickHandler={onCancelClick}
      brandValue={brand}
      isEditing={isEditing()}
    />
  )
};

CreateVehicleBrand.propTypes = {
  location: PropTypes.object
};
export default CreateVehicleBrand;
