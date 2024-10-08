import { useTheme } from 'styled-components';

export type IconType =
    | 'chevron-right'
    | 'chevron-left'
    | 'play-right'
    | 'search'
    | 'filter'
    | 'close'
    | 'fire'
    | 'star'
    | 'film';

export type IconSize = 14 | 20 | 24 | 48;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    config: {
        color: 'yellow' | 'white';
        icon: IconType;
        size: IconSize;
    };
}

export default function Icon({ config, ...props }: IconProps) {
    const { utils, ref } = useTheme();

    const { color, icon, size } = config;

    const fillIconList: IconType[] = ['play-right', 'star'];

    return (
        <svg
            {...{
                strokeWidth: 1.5,
                viewBox: `0 0 24 24`,
                stroke: ref.colors[color] ?? 'currentColor',
                height: utils.pxToRem(size),
                width: utils.pxToRem(size),
                xmlns: 'http://www.w3.org/2000/svg',
                fill: fillIconList.includes(icon) ? ref.colors[color] : 'none',
            }}
            {...props}
        >
            {icon === 'chevron-right' && <ChevronRightIconPath />}
            {icon === 'chevron-left' && <ChevronLeftIconPath />}
            {icon === 'play-right' && <PlayRightIconPath />}
            {icon === 'search' && <SearchIconPath />}
            {icon === 'filter' && <FilterIconPath />}
            {icon === 'close' && <CloseIconPath />}
            {icon === 'fire' && <FireIconPath />}
            {icon === 'star' && <StarIconPath />}
            {icon === 'film' && <FilmIconPath />}
        </svg>
    );
}

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

const StarIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
    />
);

const PlayRightIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
    />
);

const ChevronRightIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
);

const ChevronLeftIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
);

const FilmIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
    />
);

const CloseIconPath: React.FC<React.SVGProps<SVGPathElement>> = () => (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
);
