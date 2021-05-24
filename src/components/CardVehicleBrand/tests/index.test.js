import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import CardVehicleBrand from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardVehicleBrand />', () => {
  const mockedEdit = jest.fn();
  const mockedDelete = jest.fn();
  const brand = { name: 'Fiat' }
  const cardVehicleBrandComponent = <CardVehicleBrand 
    name={brand.name} 
    onEditClick={mockedEdit}
    onDeleteClick={mockedDelete}
  />
  
  it('should render CardVehicleBrand', () => {
    renderWithRouter(cardVehicleBrandComponent)

    const cardElement = screen.getByTestId("card-vehicle-brand");
    const nameElement = screen.getByText(brand.name);

    expect(cardElement).not.toBe(null);
    expect(nameElement).not.toBe(null); 
  })

  it('should render all buttons', () => {
    renderWithRouter(cardVehicleBrandComponent)

    const containerButtonsElement = screen.getByTestId('card-vehicle-brand_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })

  it('should call on edit function', async () => {
    renderWithRouter(cardVehicleBrandComponent)

    const containerButtonsElement = screen.getByTestId('card-vehicle-brand_buttons');
    const editClickButton = containerButtonsElement.children[0];

    fireEvent.click(editClickButton)

    expect(mockedEdit).toHaveBeenCalledTimes(1);
  });

  it('should call on delete function', async () => {
    renderWithRouter(cardVehicleBrandComponent)

    const containerButtonsElement = screen.getByTestId('card-vehicle-brand_buttons');
    const deleteClickButton = containerButtonsElement.children[1];

    fireEvent.click(deleteClickButton)

    expect(mockedDelete).toHaveBeenCalledTimes(1);
  });
});