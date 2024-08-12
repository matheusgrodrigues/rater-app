import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import Image from '../atoms/Image';

interface CarrouselMovieProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselMovie({ ...props }: CarrouselMovieProps) {
    return (
        <Swiper data-testid="carrousel-movie" spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>
                <CardMovie>
                    <ImageOverride src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22" />
                </CardMovie>
            </SwiperSlide>
            <SwiperSlide>
                <CardMovie>
                    <ImageOverride src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22" />
                </CardMovie>
            </SwiperSlide>
            <SwiperSlide>
                <CardMovie>
                    <ImageOverride src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22" />
                </CardMovie>
            </SwiperSlide>
            <SwiperSlide>
                <CardMovie>
                    <ImageOverride src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg%22" />
                </CardMovie>
            </SwiperSlide>
            ...
        </Swiper>
    );
}

const CardMovie = styled.div`
    height: ${({ theme }) => theme.utils.pxToRem(284)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('lg', `width: ${theme.utils.pxToRem(380)}; height: ${theme.utils.pxToRem(253)};`)}
`;

const ImageOverride = styled(Image)`
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
`;
