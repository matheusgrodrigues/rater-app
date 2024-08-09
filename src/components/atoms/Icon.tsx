import { useMemo } from 'react';
import { useTheme } from 'styled-components';

const SearchIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        strokeLinejoin="round"
        strokeLinecap="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
    config: {
        color: 'white';
        icon: 'search-icon';
        size: '24';
    };
}

export default function Icon({ config, ...props }: IconProps) {
    const { ref } = useTheme();

    const { color, icon, size } = config;

    const iconStyle = useMemo(
        () => ({
            strokeWidth: 3,
            viewBox: '0 0 24 24',
            stroke: color === 'white' ? ref.colors.white : 'currentColor',
            height: size === '24' ? ref.fontSize['24'] : ref.fontSize['16'],
            width: size === '24' ? ref.fontSize['24'] : ref.fontSize['16'],
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'none',
        }),

        []
    );

    return (
        <svg {...iconStyle} {...props}>
            {icon === 'search-icon' && <SearchIconPath />}
        </svg>
    );
}
