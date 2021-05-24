import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  useTheme,
} from '@material-ui/core';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';
import messages from '../messages';
import HttpContext from '../../../contexts/HttpContext';
import AuthRepository from '../../../api/services/Auth/AuthRepository';
import AuthService from '../../../api/services/Auth/AuthService';
import { toast } from 'react-toastify';
import style from './style';

const SignUp = () => {
  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);

  const initialFormState = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };
  const [form, setFormState] = useState(initialFormState);
  const history = useHistory();

  const theme = useTheme();
  const classes = style(theme);

  const httpClient = useContext(HttpContext);

  const authRepository = AuthRepository(httpClient);
  const authService = AuthService(authRepository);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formIsValid()) {
        const { name, email, password } = form;
        const apiResponse = await authService.create({
          name, email, password,
        });
        if (apiResponse.success) {
          resetFormStates();
          toast.success(messages.userCreated.defaultMessage);
        }
      }
    } catch(err) {
      toast.error(err.message);
    }
  };

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
    <>
    <Typography variant="h4" component="h1"><FormattedMessage {...messages.signUpTitle} /></Typography>
    <form
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="name">
          <FormattedMessage {...messages.name} />
        </InputLabel>
        <Input
          id="name"
          name="name"
          onBlur={validateField}
          error={!errors.name.valid}
          value={form.name}
          onChange={onFormChange}
          required
          autoComplete="off"
          aria-describedby="name-text"
        />
        <FormHelperText id="name-text" aria-live="assertive">
          {errors.name.text}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">
          <FormattedMessage {...messages.email} />
        </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={onFormChange}
          required
          autoComplete="off"
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
          value={form.password}
          onChange={onFormChange}
          required
          aria-describedby="password-text"
        />
        <FormHelperText id="password-text" aria-live="assertive">
          {errors.password.text}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password-confirmation">
          <FormattedMessage {...messages.confirmPassword} />
        </InputLabel>
        <Input
          id="password-confirmation"
          name="passwordConfirmation"
          type="password"
          onBlur={validateField}
          error={!errors.passwordConfirmation.valid}
          value={form.passwordConfirmation}
          onChange={onFormChange}
          aria-describedby="password-confirmation-text"
          required
        />
        <FormHelperText id="password-confirmation-text" aria-live="assertive">
          {
          errors.passwordConfirmation.text || 
          <FormattedMessage {...messages.textConfirmPassword} />  
          }
        </FormHelperText>
      </FormControl>

      <Button
          className={classes.formButton}
          variant="contained"
          color="default"
          type="button"
          onClick={onCancelClick}
        >
          <FormattedMessage {...messages.buttonCancel} />
        </Button>
      <Button 
        className={classes.formButton}
        variant="contained" 
        color="primary" 
        type="submit">
        <FormattedMessage {...messages.buttonCad} />
      </Button>
    </form>
    </>
  );
};

export default SignUp;
