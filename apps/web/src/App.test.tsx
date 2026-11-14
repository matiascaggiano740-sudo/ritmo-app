import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';
afterEach(cleanup);
describe('Ritmo: base', () => {
  it('informa que la búsqueda aún no está disponible', () => { render(<App />); expect(screen.getByRole('searchbox')).toBeDisabled(); expect(screen.getByText(/todavía no hay videos ni búsqueda conectados/i)).toBeInTheDocument(); });
  it('permite cambiar el tema', () => { const { container } = render(<App />); const app = container.querySelector('[data-theme]'); expect(app).toHaveAttribute('data-theme', 'dark'); fireEvent.click(screen.getByRole('button', { name: 'Cambiar tema' })); expect(app).toHaveAttribute('data-theme', 'light'); });
});
