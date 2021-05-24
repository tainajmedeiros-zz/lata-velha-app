import { useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import PrivateRoute from './components/PrivateRoute';
import FormValidations from "./contexts/formValidations";
import HttpContext from './contexts/HttpContext';
import useToken from './hooks/useToken';
import {
  validateName,
  validatePassword,
  validatePrice, 
  validateSelect
} from "./models/form";
import NotFoundPage from "./pages/NotFound";
import { routes, subroutes } from './routes';
import { VEHICLES_PATH } from "./routes/constants";
import style from "./style";
import HttpClient from "./utils/HttpClient";

function App() {
  const { token, setToken } = useToken();

  const httpClient = HttpClient();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = style(theme);
  const validations = {
    name: validateName,
    oldPassword: validatePassword,
    password: validatePassword,
    passwordConfirmation: validatePassword,
    brand: validateSelect,
    price: validatePrice,
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderRoutes = (routes) => {
    return routes.map(({ path, Component, isPrivate }, key) =>
      <PrivateRoute path={path} component={(props) => <Component setToken={setToken} {...props} />} key={key} token={token} isPrivate={isPrivate} exact />
    );
  }

  return (
    <HttpContext.Provider value={httpClient}>
      <FormValidations.Provider
        value={validations}>
        <IntlProvider locale="en" defaultLocale="en">
          <Router>
            <div className={classes.root}>
              <Header handleDrawerToggle={handleDrawerToggle} />
              <Menu
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
                setToken={setToken}
                token={token}
              />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <ToastContainer />
                <Switch>
                  {renderRoutes(routes)}
                  {renderRoutes(subroutes)}
                  <Route path="/" exact>
                    <Redirect to={VEHICLES_PATH} />
                  </Route>
                  <Route>
                    <NotFoundPage />
                  </Route>
                </Switch>
              </main>
            </div>
          </Router>
        </IntlProvider>
      </FormValidations.Provider>
    </HttpContext.Provider>
  );
}

export default App;
