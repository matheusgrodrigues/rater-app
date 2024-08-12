import { forwardRef, useImperativeHandle } from 'react';
import { useSwiper } from 'swiper/react';

export interface PrevButtonRef {
    prev: () => void;
}

const PrevButton: React.ForwardRefRenderFunction<PrevButtonRef, object> = (props, ref) => {
    const swiper = useSwiper();

    useImperativeHandle(
        ref,
        () => ({
            prev: () => swiper.slidePrev(),
        }),
        [swiper]
    );

    return (
        <button
            data-testid="carrousel-prev-button"
            style={{ display: 'none' }}
            onClick={() => swiper.slidePrev()}
        ></button>
    );
};

export default forwardRef(PrevButton);
