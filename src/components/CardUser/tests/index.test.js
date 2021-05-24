import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import CardUser from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardUser />', () => {
  const mockedEdit = jest.fn();
  const mockedDelete = jest.fn();
  const user = { name: 'Jucelino', email: 'jucelino@email.com' }

  const cardUserElement = <CardUser 
    name={user.name} 
    email={user.email} 
    onEditClick={mockedEdit}
    onDeleteClick={mockedDelete}
  />

  it('should render CardUser', () => {
    renderWithRouter(cardUserElement)

    const cardElement = screen.getByTestId(user.email);
    const nameElement = screen.getByText(user.name);
    const emailElement = screen.getByText(user.email);

    expect(cardElement).not.toBe(null);
    expect(nameElement).not.toBe(null);
    expect(emailElement).not.toBe(null);
  })

  it('should render all buttons', () => {
    renderWithRouter(cardUserElement)

    const containerButtonsElement = screen.getByTestId('card-user_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })

  it('should call on edit function', async () => {
    renderWithRouter(cardUserElement)

    const containerButtonsElement = screen.getByTestId('card-user_buttons');
    const editClickButton = containerButtonsElement.children[0];

    fireEvent.click(editClickButton)

    expect(mockedEdit).toHaveBeenCalledTimes(1);
  });

  it('should call on delete function', async () => {
    renderWithRouter(cardUserElement)

    const containerButtonsElement = screen.getByTestId('card-user_buttons');
    const deleteClickButton = containerButtonsElement.children[1];

    fireEvent.click(deleteClickButton)

    expect(mockedDelete).toHaveBeenCalledTimes(1);
  });
});