module.exports = {
    jest: {
        configure: {
            moduleNameMapper: {
                'swiper/react': 'swiper/types/index.d.ts',
                'swiper/shared': 'swiper/types/shared.d.ts',
                'swiper/modules': 'swiper/types/modules/index.d.ts',
                'swiper/css': 'swiper/swiper.min.css',
            },
            transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
            verbose: true,
        },
    },
};
