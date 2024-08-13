import { screen, render, fireEvent } from '../../../core/utils/test-utils/testing-library';

import Header from '../../../components/organisms/Header';
import Filter from '../../../components/organisms/Filter/Filter';

describe('Deve renderizar o header, corretamente', () => {
    beforeEach(() => render(<Header />));

    it('Deve renderizar header com a logo', () => {
        const header = screen.getByTestId('header');
        const logo = screen.getByTestId('header-logo');

        expect(header).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
    });

    describe('Deve renderizar o formulário de busca, corretamente', () => {
        it('Deve renderizar o formulário de busca', () => {
            const formSearch = screen.getByTestId('header-form-search');

            expect(formSearch).toBeInTheDocument();
        });

        it('Deve renderizar o botão de busca', () => {
            const btnSearch = screen.getByTestId('header-form-search-btn-search');

            expect(btnSearch).toBeInTheDocument();
        });

        it('Deve renderizar o input search', () => {
            const inputSearch = screen.getByTestId('header-form-search-input');

            expect(inputSearch).toBeInTheDocument();
        });

        it('Deve renderizar o botão de filtro', () => {
            const formSearch = screen.getByTestId('header-form-search');
            const btnFilter = screen.getByTestId('header-form-search-btn-filter');

            expect(formSearch).toBeInTheDocument();
            expect(btnFilter).toBeInTheDocument();
        });
    });

    it('Deve abrir o filtro ao clicar no botão pesquisar', () => {
        render(<Filter />);

        const button = screen.getByTestId('header-form-search-btn-search');

        fireEvent.click(button);

        const filter = screen.getByTestId('header-form-filter');

        expect(filter).toBeInTheDocument();
    });
});
