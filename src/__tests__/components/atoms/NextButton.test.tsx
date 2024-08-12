import { screen, render } from '../../../core/utils/test-utils/testing-library';

import NextButton from '../../../components/atoms/NextButton';

jest.mock('swiper/react', () => ({
    useSwiper: jest.fn(),
}));

it('Deve renderizar o NextButton', () => {
    render(<NextButton />);

    const button = screen.getByTestId('carrousel-next-button');

    expect(button).toBeInTheDocument();
});
