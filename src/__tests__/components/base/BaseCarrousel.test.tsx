import { screen, render } from '../../../core/utils/test-utils/testing-library';

import { NextButton, PrevButton } from '../../../components/base/BaseCarrousel';

jest.mock('swiper/react', () => ({
    useSwiper: jest.fn(),
}));

describe('Deve renderizar os componentes do BaseCarrousel', () => {
    it('Deve renderizar o NextButton', () => {
        render(<NextButton />);

        const button = screen.getByTestId('carrousel-next-button');

        expect(button).toBeInTheDocument();
    });

    it('Deve renderizar o PrevButton', () => {
        render(<PrevButton />);

        const button = screen.getByTestId('carrousel-prev-button');

        expect(button).toBeInTheDocument();
    });
});
