const AuthService = (authRepository) => {
  const create = async (authForm) => {
    const newUser = await authRepository.save(authForm);

    return newUser;
  }

  const login = async (loginForm) => {
    const user = await authRepository.login(loginForm);

    return user;
  }
  return {
    create,
    login,
  }
}

export default AuthService;