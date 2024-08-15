import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CardTrailer from '../../../components/organisms/CardTrailer/CardTrailer';

import movieDetailMock from '../../../__mocks__/movieDetail.mock';

describe('Deve renderizar o CardTrailer, corretamente', () => {
    beforeEach(() => render(<CardTrailer highlightMovie={movieDetailMock} />));
    it("Deve renderizar o botão 'Assistir ao Trailer'", () => {
        const button = screen.getByTestId('btn-assistir-ao-trailer');
        expect(button).toBeInTheDocument();
    });
});
