import { MovieCacheSchema } from '../../schemas/MovieSchema';

export const setStoreCacheMovie = (
    store: {
        cacheMovies: [] | MovieCacheSchema[];
        setCacheMovies: (cacheMovies: MovieCacheSchema[]) => void;
    },
    data: MovieCacheSchema | MovieCacheSchema[]
) => {
    const { cacheMovies, setCacheMovies } = store;

    const mergeUniqueValues = () => {
        if (Array.isArray(data)) {
            const combined = [...cacheMovies, ...data];
            const uniqueById = new Map<number, MovieCacheSchema>();

            combined.forEach((item) => {
                return uniqueById.set(item.id, item);
            });

            return [...uniqueById.values()];
        }
    };

    if (Array.isArray(data)) {
        setCacheMovies(mergeUniqueValues() as unknown as MovieCacheSchema[]);
    } else {
        let newCacheRegister = mergeUniqueValues();

        if (newCacheRegister) {
            const checkExistOnCache = newCacheRegister.filter((movie) => movie.id === data.id);

            if (!(checkExistOnCache.length > 0)) {
                newCacheRegister.push(data);
                setCacheMovies(newCacheRegister);
            }
        }
    }
};
