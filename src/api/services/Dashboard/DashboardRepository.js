import useToken from '../../../hooks/useToken';
import { DASHBOARD_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const DashboardRepository = (httpClient) => {
  const { token } = useToken();
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${DASHBOARD_PATH}`;

  const findAll = async () => {
    return await httpClient.get(URL, null, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  return {
    findAll,
  }
}

export default DashboardRepository;