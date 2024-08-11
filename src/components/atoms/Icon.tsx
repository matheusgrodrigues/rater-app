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

const FireIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
    </>
);

export type IconType = 'search-icon' | 'filter-icon' | 'fire';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    config: {
        color: 'white';
        icon: IconType;
        size: 20 | 24;
    };
}

export default function Icon({ config, ...props }: IconProps) {
    const { utils, ref } = useTheme();

    const { color, icon, size } = config;

    return (
        <svg
            {...{
                strokeWidth: 1.5,
                viewBox: `0 0 24 24`,
                stroke: color === 'white' ? ref.colors.white : 'currentColor',
                height: utils.pxToRem(size),
                width: utils.pxToRem(size),
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
            }}
            {...props}
        >
            {icon === 'search-icon' && <SearchIconPath />}
            {icon === 'filter-icon' && <FilterIconPath />}
            {icon === 'fire' && <FireIconPath />}
        </svg>
    );
}
