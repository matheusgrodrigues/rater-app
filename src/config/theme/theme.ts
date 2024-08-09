import { DefaultTheme } from 'styled-components';

const ref = {
    borderRadius: {
        '8px': '0.5rem',
        '12px': '0.75rem',
        '24px': '1.5rem',
        '99px': '6.19rem',
    },
    lineHeight: {
        '14px': '0.88rem',
        '16px': '1rem',
        '19px': '1.19rem',
        '22px': '1.38rem',
        '24px': '1.5rem',
        '28px': '1.75rem',
        '48px': '3rem',
    },
    fontFamily: 'Inter',
    fontWeight: {
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
        '12px': '0.75rem',
        '14px': '0.88rem',
        '16px': '1rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '40px': '2.5rem',
    },
    spacing: {
        '4px': '0.25rem',
        '6px': '0.38rem',
        '8px': '0.5rem',
        '12px': '0.75rem',
        '16px': '1rem',
        '22px': '1.38rem',
        '30px': '1.88rem',
        '24px': '1.5rem',
        '43px': '2.69rem',
        '48px': '3rem',
        '61px': '3.81rem',
    },
    colors: {
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
    screen: (bp: 'sm' | 'md' | 'lg' | 'xl' | '2xl', content: string) =>
        `@media screen and (min-width: ${ref.breakpoint[bp]}) {
        ${content}
      }`,

    container: () => `
        max-width: 1440px;
        padding: ${ref.spacing['16px']};
        margin: 0 auto;
        width: 100%;

        ${utils.screen('md', `padding: ${ref.spacing['24px']}`)};
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
