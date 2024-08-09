import RootLayout from '../../app/layout';
import { render, screen } from '../../core/utils/test-utils/render';

describe('Deve renderizar o Layout corretamente', () => {
    beforeEach(() => render(<RootLayout />));

    describe('Deve renderizar o header, corretamente', () => {
        it('Deve renderizar header com a logo', () => {
            const header = screen.getByTestId('header');
            const logo = screen.getByTestId('header-logo');

            expect(header).toBeInTheDocument();
            expect(logo).toBeInTheDocument();
        });
    });
});
