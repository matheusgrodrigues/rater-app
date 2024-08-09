import { useTheme } from 'styled-components';

const SearchIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        strokeLinejoin="round"
        strokeLinecap="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
);

const FilterIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
    />
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
    config: {
        color: 'white';
        icon: 'search-icon' | 'filter-icon';
        size: '24';
    };
}

export default function Icon({ config, ...props }: IconProps) {
    const { utils, ref } = useTheme();

    const { color, icon, size } = config;

    return (
        <svg
            {...{
                strokeWidth: 1.5,
                viewBox: '0 0 24 24',
                stroke: color === 'white' ? ref.colors.white : 'currentColor',
                height: size === '24' ? utils.pxToRem(24) : utils.pxToRem(16),
                width: size === '24' ? utils.pxToRem(24) : utils.pxToRem(16),
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
            }}
            {...props}
        >
            {icon === 'search-icon' && <SearchIconPath />}
            {icon == 'filter-icon' && <FilterIconPath />}
        </svg>
    );
}
