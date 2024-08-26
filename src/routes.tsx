import { createRoutesFromElements, createBrowserRouter, Route, defer } from 'react-router-dom';

import {
    highlightMovieDetailLoader,
    latestReleaseMoviesLoader,
    recommendedMoviesLoader,
    highlightMoviesLoader,
    LoaderHomeData,
    getAllActorsLoader,
} from './app/Home/loader';

import { movieDetailSimilarLoader, movieDetailLoader, LoaderMovieData } from './app/Movie/loader';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Movie from './app/Movie';
import Home from './app/Home';

const loaderHomeData: LoaderHomeData = {
    movieHightlightDetail: highlightMovieDetailLoader(),
    moviesHighlightsToo: highlightMoviesLoader(),
    moviesLatestReleases: latestReleaseMoviesLoader(),
    moviesRecommended: recommendedMoviesLoader(),
    actors: getAllActorsLoader(),
};

const loaderMovieData = (movie_id: string | undefined): LoaderMovieData => ({
    movieDetailSimilar: movieDetailSimilarLoader(Number(movie_id)),
    movieDetail: movieDetailLoader(Number(movie_id)),
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route
                element={<Home />}
                loader={() =>
                    defer({
                        ...loaderHomeData,
                    })
                }
                index
            />
            <Route
                element={<Movie />}
                loader={({ params }) =>
                    defer({
                        ...loaderMovieData(params.id),
                    })
                }
                path="movie/:id"
            />
        </Route>
    )
);

export default router;
