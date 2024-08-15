import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import styled from 'styled-components';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import BaseCarrousel, { BaseCarrouselRef } from '../../base/BaseCarrousel';
import CardCategoryLoader from './CarrouselCardCategoryLoader';
import BadgeCategory from '../../atoms/BadgeCategory';

import { MovieSchema } from '../../../schemas/MovieSchema';

export interface CarrouselCategoryRef extends BaseCarrouselRef {}

interface CarrouselCategoryProps extends SwiperProps {
    movies: MovieSchema[] | undefined;
}

const CarrouselCategory: React.ForwardRefRenderFunction<CarrouselCategoryRef, CarrouselCategoryProps> = (
    { movies, ...props },
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
            style={{ maxHeight: '49.125rem', position: 'relative' }}
            ref={baseCarrouselRef}
            {...props}
        >
            {movies && movies.length > 0 ? (
                movies.map((movie) => (
                    <SwiperSlideOverride key={movie.id}>
                        <BadgeCategory>Comédia de amigos</BadgeCategory>
                    </SwiperSlideOverride>
                ))
            ) : (
                <CardCategoryLoader>Nenhum registro encontrado</CardCategoryLoader>
            )}
        </BaseCarrousel>
    );
};

export default forwardRef(CarrouselCategory);

const SwiperSlideOverride = styled(SwiperSlide)`
    width: max-content;
`;
