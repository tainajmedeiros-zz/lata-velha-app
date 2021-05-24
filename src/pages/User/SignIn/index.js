import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';
import HttpContext from '../../../contexts/HttpContext';
import AuthRepository from '../../../api/services/Auth/AuthRepository';
import AuthService from '../../../api/services/Auth/AuthService';
import messages from '../messages';
import { useHistory } from 'react-router';
import { VEHICLES_PATH } from '../../../routes/constants';
import { toast } from 'react-toastify';

const SignIn = ({ setToken }) => {
  const httpClient = useContext(HttpContext);
  const authRepository = AuthRepository(httpClient);
  const authService = AuthService(authRepository);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);

  const handleSubmit = async(data) => {
    try {
      const response = await authService.login(data)
      setToken(response.jwtAuthenticationResponse.accessToken);
      const isAuthenticated = typeof response.jwtAuthenticationResponse.accessToken !== "undefined";
      // redirect to list of vehicles
      if (isAuthenticated) {
        history.push(VEHICLES_PATH);
      }
    } catch(err) {
      toast.error(err.message);
    }
  };

  return (
    <>
    <Typography variant="h4" component="h1"><FormattedMessage {...messages.signInTitle} /></Typography>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (formIsValid()) {
          handleSubmit({ email, password });
        }
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">
          <FormattedMessage {...messages.email} />  
        </InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">
          <FormattedMessage {...messages.password} />  
        </InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onBlur={validateField}
          error={!errors.password.valid}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="password-text"
          required
        />
        <FormHelperText id="password-text" aria-live="assertive">
          {
            errors.password.text
          }
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        <FormattedMessage {...messages.buttonLogin} />  
      </Button>
    </form>
    </>
  );
};

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
}

export default SignIn;