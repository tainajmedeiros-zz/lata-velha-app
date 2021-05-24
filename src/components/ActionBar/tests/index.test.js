import React from 'react';
import { screen } from '@testing-library/react'
import ActionBar from '..';
import renderWithRouter from '../../../utils/test-utils';
import { VEHICLES_PATH, USERS_PATH } from '../../../routes/constants';

describe('<ActionBar />', () => {
  it('should render All Buttons', () => {
    renderWithRouter(<ActionBar />, { route: VEHICLES_PATH })

    const addBtnElement = screen.getByTestId('add-button');
    const deleteBtnElement = screen.getByTestId('delete-button');
    const parent = addBtnElement.parentNode;

    expect(addBtnElement).not.toBe(null);
    expect(deleteBtnElement).not.toBe(null);
    expect(parent.children.length).toBe(2);
  })

  it('should render only Add Button', () => {
    renderWithRouter(<ActionBar />, { route: USERS_PATH })

    const addBtnElement = screen.getByTestId('add-button');
    const parent = addBtnElement.parentNode;

    expect(addBtnElement).not.toBe(null);
    expect(parent.children.length).toBe(1);
  });
});