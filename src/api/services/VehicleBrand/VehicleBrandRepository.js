import useToken from '../../../hooks/useToken';
import { BRANDS_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const VehicleBrandRepository = (httpClient) => {
  // BRANDS_PATH already has /
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${BRANDS_PATH}`;
  const { token } = useToken();

  const authHeader = {
    'Authorization': `Bearer ${token}`
  };

  const findAll = async () => {
    return await httpClient.get(URL, null, {
      ...authHeader
    });
  }

  const save = async (vehicleBrandForm) => {
    return await httpClient.post(URL, vehicleBrandForm, {
      ...authHeader,
      'Content-Type': 'application/json',
    });
  }

  const remove = async (vehicleBrandId) => {
    return await httpClient.remove(`${URL}/${vehicleBrandId}`,
      {
        ...authHeader
      });
  }

  const update = async (id, vehicleBrandForm) => {
    return await httpClient.put(`${URL}/${id}`, {
      ...authHeader,
      'Content-Type': 'application/json',
    }, vehicleBrandForm);
  }

  return {
    findAll,
    save,
    remove,
    update
  }
}

export default VehicleBrandRepository;