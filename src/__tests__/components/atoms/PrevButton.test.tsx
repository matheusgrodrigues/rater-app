import { screen, render } from '../../../core/utils/test-utils/testing-library';

import PrevButton from '../../../components/atoms/PrevButton';

jest.mock('swiper/react', () => ({
    useSwiper: jest.fn(),
}));

it('Deve renderizar o PrevButton', () => {
    render(<PrevButton />);

    const button = screen.getByTestId('carrousel-prev-button');

    expect(button).toBeInTheDocument();
});
