import { createContext } from 'react';

function withoutValidation() {
  return { valid: true, text: '' };
}

const FormValidations = createContext({
  name: withoutValidation,
  oldPassword: withoutValidation,
  password: withoutValidation,
  passwordConfirmation: withoutValidation,
});

export default FormValidations;
