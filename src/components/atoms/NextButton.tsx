import { forwardRef, useImperativeHandle } from 'react';
import { useSwiper } from 'swiper/react';

export interface NextButtonRef {
    next: () => void;
}

const NextButton: React.ForwardRefRenderFunction<NextButtonRef, object> = (props, ref) => {
    const swiper = useSwiper();

    useImperativeHandle(
        ref,
        () => ({
            next: () => swiper.slideNext(),
        }),
        [swiper]
    );

    return (
        <button
            data-testid="carrousel-next-button"
            style={{ display: 'none' }}
            onClick={() => swiper.slideNext()}
        ></button>
    );
};

export default forwardRef(NextButton);
