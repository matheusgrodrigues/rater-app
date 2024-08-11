import { render, screen } from '../../../core/utils/test-utils/testing-library';

import SpecDuratCatYear from '../../../components/organisms/SpecDuratCatYear';

describe('Deve renderizar o SpecDuratCatYear corretamente', () => {
    beforeEach(() =>
        render(
            <SpecDuratCatYear
                data-testid="spec-durat-cat-year"
                config={{
                    duratLabel: '2h 8m',
                    yearLabel: '2024',
                    catLabel: 'Comedy, Action, Adventure, Superhero...',
                }}
            />
        )
    );

    it('Deve renderizar o BarDivider', () => {
        const divider = screen.getByTestId('spec-bar-divider');
        expect(divider).toBeInTheDocument();
    });

    it('Deve renderizar a Duration', () => {
        const durat = screen.getByTestId('spec-durat');
        expect(durat).toBeInTheDocument();
        expect(durat).not.toHaveTextContent('');
    });

    it('Deve renderizar a Category', () => {
        const category = screen.getByTestId('spec-cat');
        expect(category).toBeInTheDocument();
        expect(category).not.toHaveTextContent('');
    });

    it('Deve renderizar o Year', () => {
        const year = screen.getByTestId('spec-year');
        expect(year).toBeInTheDocument();
        expect(year).not.toHaveTextContent('');
    });
});
