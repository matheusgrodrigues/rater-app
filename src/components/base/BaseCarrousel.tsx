import { forwardRef, useImperativeHandle } from 'react';
import { useSwiper } from 'swiper/react';

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
