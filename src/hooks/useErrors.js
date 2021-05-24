/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState } from 'react';

function createCurrentState(validations) {
  const currentState = {};

  for (const field in validations) {
    currentState[field] = { valid: true, text: '' };
  }

  return currentState;
}

function useErrors(validations) {
  const currentState = createCurrentState(validations);
  const [errors, setErrors] = useState(currentState);

  function validateField(event) {
    const { name, value } = event.target;
    const newState = { ...errors };

    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function formIsValid() {
    for (const erro in errors) {
      if (!errors[erro].valid) {
        return false;
      }
    }

    return true;
  }

  return [errors, validateField, formIsValid];
}

export default useErrors;
