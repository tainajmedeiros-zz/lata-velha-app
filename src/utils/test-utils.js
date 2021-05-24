import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <IntlProvider locale="en" defaultLocale="en">{ui}</IntlProvider>, 
    { wrapper: BrowserRouter }
  );
}

export default renderWithRouter;