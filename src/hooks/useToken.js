import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('lataVelhaToken');
    const token = JSON.parse(tokenString);

    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if(userToken) {
      localStorage.setItem('lataVelhaToken', JSON.stringify(userToken));
    } else {
      localStorage.removeItem('lataVelhaToken');
    }

    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  }
}