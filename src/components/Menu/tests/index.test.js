import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import Menu from '../index';
import renderWithRouter from '../../../utils/test-utils';
import routes from '../../../routes/index';

describe('<Menu />', () => {
  const mockedHandleDrawerToggle = jest.fn();
  const menuComponent = <Menu 
    handleDrawerToggle={mockedHandleDrawerToggle} 
    mobileOpen={false}
  />
  
  it('should render Menu', () => {
    renderWithRouter(menuComponent)

    const menuElement = screen.getByTestId("menu");

    expect(menuElement).not.toBe(null);
  })

  it('should render all links', () => {
    const { container } = renderWithRouter(menuComponent)
    const navLinks = container.querySelector('ul')

    expect(navLinks).not.toBe(null);
    expect(navLinks.children.length).toBe(routes.length);
  })

  it('should navigate to path on click', () => {
    const { container } = renderWithRouter(menuComponent)
    const navLinks = container.querySelector('ul')
    
    routes.forEach(({ path }, index) => {
      fireEvent.click(navLinks.children[index]);
      
      expect(window.location.pathname).toBe(path);
    });
  });
});