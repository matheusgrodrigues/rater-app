import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CarrouselFilme from '../../../components/organisms/CarrouselMovie';

describe('Deve renderizar o CarrouselMovie corretamente', () => {
    beforeEach(() => render(<CarrouselFilme data-testid="carrousel-movie" />));

    it('Deve estar na tela', () => {
        const carrouselMovie = screen.getByTestId('carrousel-movie');

        expect(carrouselMovie).toBeInTheDocument();
    });
});
