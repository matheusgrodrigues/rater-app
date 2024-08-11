import { render, screen } from '../../../core/utils/test-utils/testing-library';

import SpecRatingView from '../../../components/organisms/SpecRatingView';

describe('Deve renderizar o SpecRatingView corretamente', () => {
    beforeEach(() =>
        render(
            <SpecRatingView
                data-testid="spec-rating-view"
                config={{
                    ratingLabel: '8.2',
                    viewLabel: '120 mil',
                }}
            />
        )
    );

    describe('Deve renderizar o Rating corretamente', () => {
        it('Deve renderizar o Star Icon', () => {
            const star = screen.getByTestId('spec-rating-star');
            expect(star).toBeInTheDocument();
        });

        it('Deve renderizar a quantidade de rating', () => {
            const rating = screen.getByTestId('spec-rating-number');
            expect(rating).toBeInTheDocument();
            expect(rating).not.toHaveTextContent('');
        });
    });

    it('Deve renderizar o BarDivider', () => {
        const divider = screen.getByTestId('spec-bar-divider');
        expect(divider).toBeInTheDocument();
    });

    it('Deve renderizar a quantidade de view', () => {
        const view = screen.getByTestId('spec-view');
        expect(view).toBeInTheDocument();
        expect(view).not.toHaveTextContent('');
    });
});
