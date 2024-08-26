import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import styled from 'styled-components';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import BaseCarrousel, { BaseCarrouselRef } from '../../base/BaseCarrousel';
import BadgeCategory from '../../atoms/BadgeCategory';

import { MovieDetailGenre } from '../../../schemas/MovieSchema';

export interface CarrouselCategoryRef extends BaseCarrouselRef {}

interface CarrouselCategoryProps extends SwiperProps {
    genres: MovieDetailGenre[] | undefined;
}

const CarrouselCategory: React.ForwardRefRenderFunction<CarrouselCategoryRef, CarrouselCategoryProps> = (
    { genres, ...props },
    ref
) => {
    const baseCarrouselRef = useRef<BaseCarrouselRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            slideNext: () => baseCarrouselRef.current?.slideNext(),
            slidePrev: () => baseCarrouselRef.current?.slidePrev(),
        }),
        []
    );

    return (
        <BaseCarrousel
            slidesPerView={'auto'}
            spaceBetween={12}
            style={{ position: 'relative' }}
            ref={baseCarrouselRef}
            {...props}
        >
            {genres &&
                genres.length > 0 &&
                genres.map((genre) => (
                    <SwiperSlideOverride key={genre.id}>
                        <BadgeCategory>{genre.name}</BadgeCategory>
                    </SwiperSlideOverride>
                ))}
        </BaseCarrousel>
    );
};

export default forwardRef(CarrouselCategory);

const SwiperSlideOverride = styled(SwiperSlide)`
    width: max-content;
`;
