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

        describe('Deve renderizar o formulário de busca, corretamente', () => {
            it('Deve renderizar o botão de busca', () => {
                const formSearch = screen.getByTestId('header-form-search');
                const btnSearch = screen.getByTestId('header-form-search-btn-search');

                expect(formSearch).toBeInTheDocument();
                expect(btnSearch).toBeInTheDocument();
            });

            it('Deve renderizar o botão de filtro', () => {
                const formSearch = screen.getByTestId('header-form-search');
                const btnFilter = screen.getByTestId('header-form-search-btn-filter');

                expect(formSearch).toBeInTheDocument();
                expect(btnFilter).toBeInTheDocument();
            });
        });
    });
});
