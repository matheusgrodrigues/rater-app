import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import styled from 'styled-components';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import BaseCarrousel, { BaseCarrouselRef } from '../base/BaseCarrousel';

import Heading from '../atoms/Heading';
import Image from '../atoms/Image';
import Strong from '../atoms/Strong';

const fake_data = [
    { key: 1, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
    { key: 2, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
    { key: 3, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
    { key: 4, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
    { key: 5, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
    { key: 6, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
    { key: 7, src: 'https://image.tmdb.org/t/p/w300//2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg' },
];

interface CarrouselActorProps extends SwiperProps {}

export interface CarrouselActorRef extends BaseCarrouselRef {}

const CarrouselActor: React.ForwardRefRenderFunction<CarrouselActorRef, CarrouselActorProps> = (props, ref) => {
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
            {fake_data.map((data) => (
                <SwiperSlideOverride key={data.key}>
                    <CardActor>
                        <ImageOverride src={data.src} />

                        <HeadingOverride
                            config={{
                                fontWeight: '700',
                                fontSize: '12',
                                color: 'white',
                            }}
                        >
                            Ryan Reynolds
                            <StrongAgeOverride
                                config={{
                                    color: 'secondary-accessible-text-11',
                                    fontWeight: 400,
                                    label: '47',
                                    size: 12,
                                }}
                            />
                        </HeadingOverride>
                    </CardActor>
                </SwiperSlideOverride>
            ))}
        </BaseCarrousel>
    );
};

export default forwardRef(CarrouselActor);

const SwiperSlideOverride = styled(SwiperSlide)`
    height: ${({ theme }) => theme.utils.pxToRem(200)};
    width: ${({ theme }) => theme.utils.pxToRem(166)};

    ${({ theme }) =>
        theme.utils.screen('md', `width: ${theme.utils.pxToRem(268)}; height: ${theme.utils.pxToRem(253)};`)}
`;

const CardActor = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};

    overflow: hidden;

    transition: transform 0.3s ease-out;

    &::before {
        content: '';
        position: absolute;
        bottom: -140%;
        left: 0;
        width: 100%;
        height: 140%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, rgba(0, 0, 0, 0.7) 100%);
        transition: bottom 0.3s ease-in;
        pointer-events: none;
        z-index: 1;
    }

    &:hover {
        &::before {
            bottom: 0;
        }
    }
`;

const ImageOverride = styled(Image)`
    border-radius: ${({ theme }) => theme.ref.borderRadius['24']};
    z-index: 2;
`;

const HeadingOverride = styled(Heading)`
    font-size: ${({ theme }) => theme.ref.fontSize['12']};
    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['20']};`)}

    font-weight: ${({ theme }) => theme.ref.fontWeight['700']};

    position: absolute;
    left: ${({ theme }) => theme.ref.spacing['12']};
    bottom: ${({ theme }) => theme.ref.spacing['12']};

    align-items: center;
    display: flex;
    gap: ${({ theme }) => theme.ref.spacing['4']};

    z-index: 2;
`;

const StrongAgeOverride = styled(Strong)`
    ${({ theme }) => theme.utils.screen('md', `font-size: ${theme.ref.fontSize['14']};`)}

    z-index: 2;
`;
