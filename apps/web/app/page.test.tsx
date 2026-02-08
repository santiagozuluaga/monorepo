import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../app/page';

describe('Home Page - Button Integration', () => {
  it('should render both action buttons with correct text', () => {
    render(<Home />);

    // Verificamos que los componentes Button del paquete UI existan
    const deployButton = screen.getByRole('button', { name: /deploy now/i });
    const docsButton = screen.getByRole('button', { name: /documentation/i });

    expect(deployButton).toBeDefined();
    expect(docsButton).toBeDefined();
  });
});