import { it, describe, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Artwork from '../components/Artwork';

describe('Artwork header button functionality', () => {
  it('initially h4 element should have Beach text', () => {
    render(<Artwork />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Beach');
  });

  it('After image changing button has been clicked h4 text should change as well', () => {
    render(<Artwork />);

    fireEvent.click(screen.getByRole('button', { name: 'Market' }));
    expect(screen.getByRole('heading')).toHaveTextContent('Market');

    fireEvent.click(screen.getByRole('button', { name: 'Library' }));
    expect(screen.getByRole('heading')).toHaveTextContent('Library');
  });
});
