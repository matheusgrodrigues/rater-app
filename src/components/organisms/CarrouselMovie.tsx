import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

interface CarrouselMovieProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function CarrouselMovie({ ...props }: CarrouselMovieProps) {
    return (
        <Swiper data-testid="carrousel-movie" spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    );
}
