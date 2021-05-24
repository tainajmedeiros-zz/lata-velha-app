import React from 'react';
import { screen, fireEvent, findAllByText, getByTestId } from '@testing-library/react'
import Select from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<Select />', () => {
  const mockedOnChange = jest.fn();

  const id = 'brand-test'
  const options = ['Fiat', 'BMW', 'Ford']
  const defaultOption = 'default options'
  const label =  'brand test'
  const onChangeHandler = mockedOnChange;
  const value = '_'

  it('should render Select', () => {
    renderWithRouter(
      <Select 
        id={id} 
        options={options} 
        defaultOption={defaultOption} 
        label={label}
        onChangeHandler={onChangeHandler}
        value={value}
      />
    )

    const cardElement = screen.getByTestId(id);
    const selectElement = screen.getByTestId(`${id}-select`);

    expect(cardElement).not.toBe(null);
    expect(selectElement).not.toBe(null);
  })

  it('should call onChange', async () => {
    renderWithRouter(
      <Select 
        id={id} 
        options={options} 
        defaultOption={defaultOption} 
        label={label}
        onChangeHandler={onChangeHandler}
        value={value}
      />
    )

    const selectContainerElement = screen.getByTestId(`${id}-select`);
    const selectElement = selectContainerElement.children[0]

    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    fireEvent.change(selectElement, { target: { value: 'bmw' } })

    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });
});