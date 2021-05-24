import useToken from '../../../hooks/useToken';
import { PRICE_RANGES_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const PriceRepository = (httpClient) => {
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${PRICE_RANGES_PATH}`;
  const { token } = useToken();

  const authHeader = {
    'Authorization': `Bearer ${token}`
  };

  const findAll = async () => {
    return await httpClient.get(URL, null, {
      ...authHeader
    });
  }

  return {
    findAll
  }
}

export default PriceRepository;