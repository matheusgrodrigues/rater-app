import { DefaultTheme } from 'styled-components';

const ref = {
    borderRadius: {
        '8': '0.5rem',
        '9': '0.56rem',
        '12': '0.75rem',
        '24': '1.5rem',
        '99': '6.18rem',
    },
    lineHeight: {
        '14': '0.88rem',
        '16': '1rem',
        '19': '1.19rem',
        '22': '1.38rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '48': '3rem',
    },
    fontFamily: 'Inter, sans-serif',
    fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
    },
    breakpoint: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
    },
    fontSize: {
        '12': '0.75rem',
        '14': '0.88rem',
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '40': '2.5rem',
    },
    spacing: {
        '4': '0.25rem',
        '6': '0.38rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '22': '1.38rem',
        '24': '1.5rem',
        '30': '1.88rem',
        '43': '2.69rem',
        '48': '3rem',
        '61': '3.81rem',
    },
    padding: {
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '24': '1.5rem',
        '48': '3rem',
        '61': '3.81rem',
    },
    colors: {
        yellow: '#eab308',
        white: '#FFFFFF',
        'secondary-background-1': '#121212',
        'secondary-background-2': '#191919',
        'secondary-interactive-3': '#232323',
        'secondary-interactive-4': '#2A2A2A',
        'secondary-interactive-5': '#313131',
        'secondary-borders-6': '#3A3A3A',
        'secondary-borders-7': '#484848',
        'secondary-borders-8': '#606060',
        'secondary-solid-9': '#6E6E6E',
        'secondary-solid-10': '#7C7C7C',
        'secondary-accessible-text-11': '#B4B4B4',
        'secondary-accessible-text-12': '#EEEEEE',
    },
};

const utils = {
    screen: (bp: 'sm' | 'md' | 'lg' | 'xl' | '2xl', content: string) => {
        const result =
            bp === 'sm'
                ? `@media screen and (max-width: ${ref.breakpoint[bp]}) {
            ${content}
          }`
                : `@media screen and (min-width: ${ref.breakpoint[bp]}) {
            ${content}
          }`;

        return result;
    },

    container: () => `
        max-width: ${ref.breakpoint['2xl']};
        padding: ${ref.spacing['16']};
        margin: 0 auto;
        width: 100%;

        ${utils.screen('md', `padding: ${ref.spacing['24']}`)};
    `,

    pxToRem: (px: number, base = 16) => `${px / base}rem`,

    applyHoverTransition: () => `
            transition: 0.3s;
            
            &:hover {
                transition: 0.3s;
                opacity: 0.8;
            }
        `,

    applyTransparentBg: () => `
         box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
         backdrop-filter: blur(${utils.pxToRem(6)});
         background: rgba(238, 238, 238, 0.2);
    `,
};

declare module 'styled-components' {
    export interface DefaultTheme {
        utils: typeof utils;
        name: 'default';
        ref: typeof ref;
    }
}

export const defaultTheme: DefaultTheme = {
    utils,
    name: 'default',
    ref,
};
