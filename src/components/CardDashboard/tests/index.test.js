import React from 'react';
import { screen } from '@testing-library/react'
import CardDashboard from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardDashboard />', () => {
  it('should render CardDashboard', () => {
    const item = { id: 1231312, brand: 'Fiat', total: 50, amount: 100000 }
    renderWithRouter(<CardDashboard item={item} />)

    const cardElement = screen.getByTestId(item.id);
    const titleElement = screen.getByText(item.brand);
    const totalElement = screen.getByText(item.total);
    const amountElement = screen.getByText(item.amount);

    expect(cardElement).not.toBe(null);
    expect(titleElement).not.toBe(null);
    expect(totalElement).not.toBe(null);
    expect(amountElement).not.toBe(null);
  })
});