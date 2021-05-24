import React, { useContext, useEffect, useState } from 'react';
import ListVehicleBrandPage from './ListVehicleBrandPage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import { EDIT_BRANDS_PATH } from '../../../routes/constants';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import messages from '../messages';

const ListVehicleBrand = () => {
  const httpClient = useContext(HttpContext);
  const vehicleBrandRepository = VehicleBrandRepository(httpClient);
  const vehicleBrandService = VehicleBrandService(vehicleBrandRepository);

  const history = useHistory();
  // todo: remember to user observable pattern!!!
  const [vehicleBrandsList, setVehichleBrandsList] = useState([]);
  useEffect(() => {
    try {
      vehicleBrandService.listAll().then(list => {
        setVehichleBrandsList(list);
      });
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const onEditHandler = (brand) => {
    history.push(EDIT_BRANDS_PATH.replace(':id', brand.id), { form: brand });
  }

  const onDeleteHandler = async (vehicleBrandId) => {
    try {
      const apiResponse = await vehicleBrandService.remove(vehicleBrandId);
      if (apiResponse) {
        const updatedList = await vehicleBrandService.listAll();
        setVehichleBrandsList(updatedList);
        toast.success(messages.vehicleBrandDeleted.defaultMessage);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <ListVehicleBrandPage 
      vehicleBrandsList={vehicleBrandsList} 
      onEditHandler={onEditHandler} 
      onDeleteHandler={onDeleteHandler}
    />
  );
};

export default ListVehicleBrand;
