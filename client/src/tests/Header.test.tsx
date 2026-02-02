import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import Header from '../assets/Header';

it('Header component should be in the document', () => {
  const { container } = render(<Header />);

  logRoles(container); // HTMLElement

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('heading')).toHaveTextContent(
    'Find the tiny character.',
  );
});
