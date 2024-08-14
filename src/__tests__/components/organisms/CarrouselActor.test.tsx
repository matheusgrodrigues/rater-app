import { render, screen } from '../../../core/utils/test-utils/testing-library';

import CarrouselActor from '../../../components/organisms/CarrouselActor';
import { actorMock } from '../../../__mocks__/actor.mock';

interface SwiperMockProps {
    children: React.ReactNode;
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: SwiperMockProps) => <div data-testid="carrousel-actor">{children}</div>,
    SwiperSlide: ({ children }: SwiperMockProps) => <div data-testid="carrousel-Actor-item">{children}</div>,
    useSwiper: jest.fn(),
}));

describe('Deve renderizar o CarrouselActor corretamente', () => {
    beforeEach(() => render(<CarrouselActor data-testid="carrousel-actor" actors={actorMock.results} />));

    it('Deve renderizar o Carrousel', () => {
        const carrouselActor = screen.getByTestId('carrousel-actor');

        expect(carrouselActor).toBeInTheDocument();
    });

    it('Deve renderizar pelo menos 1 filme', () => {
        const carrouselActorItem = screen.getAllByTestId('carrousel-Actor-item');
        expect(carrouselActorItem).not.toHaveLength(0);
    });
});
