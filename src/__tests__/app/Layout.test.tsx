import RootLayout from '../../app/layout';
import { render, screen } from '../../core/utils/test-utils/testing-library';

describe('Deve renderizar o Layout corretamente', () => {
    beforeEach(() => render(<RootLayout />));

    it('Deve renderizar o header', () => {
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });

    it('Deve renderizar o container do Outlet', () => {
        const container = screen.getByTestId('layout-children-container');
        expect(container).toBeInTheDocument();
    });

    it('Deve renderizar o footer', () => {
        const footer = screen.getByTestId('footer');
        expect(footer).toBeInTheDocument();
    });
});
