import { screen, render } from '../../../core/utils/test-utils/testing-library';

import BaseCarrousel, { NextButton, PrevButton } from '../../../components/base/BaseCarrousel';

interface SwiperMockProps {
    children: React.ReactNode;
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="base-carrousel">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div>{children}</div>,
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

    it('Deve renderizar o BaseCarrousel', () => {
        render(<BaseCarrousel />);

        const carrousel = screen.getByTestId('base-carrousel');
        expect(carrousel).toBeInTheDocument();
    });
});
