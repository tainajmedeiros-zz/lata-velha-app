import { AUTH_PATH_SIGN_IN, AUTH_PATH_SIGN_UP } from '../../../routes/constants';
import { config as apiConfig } from '../../config';
import useToken from '../../../hooks/useToken';

const AuthRepository = (httpClient) => {
  const { token } = useToken();
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}`;

  const save = async (authForm) => {
    const SIGNUP = URL + `${AUTH_PATH_SIGN_UP}`
    return await httpClient.post(SIGNUP, authForm, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
 
  const login = async (loginForm) => {
    const SIGNIN = URL + `${AUTH_PATH_SIGN_IN}`
    return await httpClient.post(SIGNIN, loginForm, {
      'Content-Type': 'application/json',
    });
  }
  return {
    save,
    login
  }
}

export default AuthRepository;