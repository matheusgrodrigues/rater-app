import { forwardRef, useImperativeHandle, useRef } from 'react';

import { useSwiper } from 'swiper/react';
import { Swiper, SwiperProps, SwiperRef } from 'swiper/react';

import 'swiper/swiper.min.css';

export interface NextButtonRef {
    next: () => void;
}

export const NextButton = forwardRef<NextButtonRef, object>((props, ref) => {
    const swiper = useSwiper();

    useImperativeHandle(
        ref,
        () => ({
            next: () => swiper.slideNext(),
        }),
        [swiper]
    );

    return (
        <button data-testid="carrousel-next-button" style={{ display: 'none' }} onClick={() => swiper.slideNext()} />
    );
});

export interface PrevButtonRef {
    prev: () => void;
}

export const PrevButton = forwardRef<PrevButtonRef, object>((props, ref) => {
    const swiper = useSwiper();

    useImperativeHandle(
        ref,
        () => ({
            prev: () => swiper.slidePrev(),
        }),
        [swiper]
    );

    return (
        <button data-testid="carrousel-prev-button" style={{ display: 'none' }} onClick={() => swiper.slidePrev()} />
    );
});

interface BaseCarrouselProps extends SwiperProps {}

export interface BaseCarrouselRef extends Omit<SwiperRef, 'swiper'> {
    slideNext: () => void;
    slidePrev: () => void;
}

const BaseCarrousel: React.ForwardRefRenderFunction<BaseCarrouselRef, BaseCarrouselProps> = (
    { children, ...props },
    ref
) => {
    const nextButtonRef = useRef<NextButtonRef>(null);
    const prevButtonRef = useRef<PrevButtonRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            slideNext: () => nextButtonRef.current?.next(),
            slidePrev: () => prevButtonRef.current?.prev(),
        }),
        []
    );

    return (
        <Swiper {...props}>
            <NextButton ref={nextButtonRef} />
            <PrevButton ref={prevButtonRef} />

            {children}
        </Swiper>
    );
};

export default forwardRef(BaseCarrousel);
