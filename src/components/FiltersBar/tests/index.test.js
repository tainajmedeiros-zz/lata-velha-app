import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import FiltersBar from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<FiltersBar />', () => {
  const mockedOnChange  = jest.fn();
  const filtersBarComponent = <FiltersBar onChangeHandler={mockedOnChange} />

  it('should render FiltersBar', () => {
    renderWithRouter(filtersBarComponent)

    const filtersBarElement = screen.getByTestId("filters-bar");

    expect(filtersBarElement).not.toBe(null);
    expect(filtersBarElement.children.length).toBe(3);
  })

  it('should call onChange', () => {
    const { container } = renderWithRouter(filtersBarComponent)

    const firstFilterElement = container.querySelector('select')

    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    fireEvent.change(firstFilterElement, { target: { value: 'bmw' } })

    expect(mockedOnChange).toHaveBeenCalledTimes(1); 
  })
});