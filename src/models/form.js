function validateName(name) {
  if (name.length <= 2) {
    return { valid: false, text: 'Campo de nome inválido. O nome deve ter no minimo 2 caracteres' };
  }

  return { valid: true, text: '' };
}

function validatePassword(password) {
  if (password.length < 6 || password.length > 72) {
    return { valid: false, text: 'Campo de senha inválido. A senha deve ter entre 6 e 72 digitos' };
  }

  return { valid: true, text: '' };
}

function validateSelect(select) {
  if (select === '_') {
    return { valid: false, text: 'Escolha uma marca' };
  }

  return { valid: true, text: '' };
}

function validatePrice(price) {
  if (price <= 0) {
    return { valid: false, text: 'Valor deve ser maior que 0' };
  }

  return { valid: true, text: '' };
}

export {
  validateName, validatePassword, validateSelect, validatePrice,
};
