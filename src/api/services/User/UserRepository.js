import useToken from '../../../hooks/useToken';
import { USERS_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const UserRepository = (httpClient) => {
  const { token } = useToken();
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${USERS_PATH}`;

  const findAll = async () => {
    return await httpClient.get(URL, null, {
      'Authorization': `Bearer ${token}`
    })
  }

  const remove = async (userId) => {
    return await httpClient.remove(`${URL}/${userId}`, {
      'Authorization': `Bearer ${token}`
    });
  }

  return {
    findAll,
    remove
  }
}

export default UserRepository;