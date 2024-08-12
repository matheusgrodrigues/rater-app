import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

const fake_data = [
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
    { src: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22' },
];

interface CarrouselMovieProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselMovie({ ...props }: CarrouselMovieProps) {
    return (
        <Swiper data-testid="carrousel-movie" slidesPerView={'auto'} spaceBetween={12}>
            {fake_data.map((data) => (
                <SwiperSlideOverride key={data.src}>
                    <CardMovie>
                        <BadgeOverride
                            config={{
                                iconColor: 'yellow',
                                label: '7.8',
                                icon: 'star',
                            }}
                        />
                        <ImageOverride src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22" />

                        <ButtonOverride config={{ variant: 'transparent-button' }}>
                            <span>Assitir ao trailer</span>

                            <Icon
                                config={{
                                    color: 'white',
                                    icon: 'play-right',
                                    size: 20,
                                }}
                            />
                        </ButtonOverride>
                    </CardMovie>
                </SwiperSlideOverride>
            ))}
        </Swiper>
    );
}

const SwiperSlideOverride = styled(SwiperSlide)`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}
`;

const CardMovie = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ImageOverride = styled(Image)`
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;

const BadgeOverride = styled(Badge)`
    position: absolute;

    top: ${({ theme }) => theme.ref.spacing['12']};
    left: ${({ theme }) => theme.ref.spacing['12']};
`;

const ButtonOverride = styled(Button)`
    position: absolute;

    bottom: ${({ theme }) => theme.ref.spacing['12']};
    left: ${({ theme }) => theme.ref.spacing['12']};
`;
