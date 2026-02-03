import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import Header from '../assets/Header';

describe('Expect all header elements to be in document', () => {
  it('Header, p and h1 to be in document', () => {
    const { container } = render(<Header />);

    logRoles(container); // HTMLElement

    expect(screen.getByRole('banner')).toBeInTheDocument();
    // Paragraph element
    expect(
      screen.getByText(
        'Tap/click the scene to guess. When you find all characters you win. No downloads no login.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
