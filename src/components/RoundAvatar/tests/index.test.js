import React from 'react';
import { screen } from '@testing-library/react'
import RoundAvatar from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<RoundAvatar />', () => {
  it('should have an img tag', () => {
    const imageSrc = 'http://www.teste.com/';
    renderWithRouter(<RoundAvatar imgSrc={imageSrc} imgAlt="#"  />)

    const imageElement = screen.getByTestId('round-avatar-img');

    expect(imageElement).not.toBe(null);
    expect(imageElement.src).toBe(imageSrc); 
  });

  it('should have an alt attribute', () => {
    const imageSrc = 'http://www.teste.com/';
    const imageAlt = 'Alt Teste';

    renderWithRouter(<RoundAvatar imgSrc={imageSrc} imgAlt={imageAlt} />)

    const imageElement = screen.getByTestId('round-avatar-img');

    expect(imageElement).not.toBe(null);
    expect(imageElement.alt).toBe(imageAlt);
  });
});