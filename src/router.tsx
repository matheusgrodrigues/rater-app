import { createRoutesFromElements, createBrowserRouter, Route, defer } from 'react-router-dom';

import {
    highlightMovieDetailLoader,
    highlightMovieLoader,
    latestReleasesLoader,
    recommendedLoader,
    LoaderHomeData,
} from './app/Home/loader';

import { getActorLoader, LoaderActorData } from './app/Actor/loader';
import {
    movieDetailSimilarLoader,
    movieDetailCastLoader,
    movieDetailLoader,
    LoaderMovieData,
} from './app/Movie/loader';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Movie from './app/Movie';
import Actor from './app/Actor/Actor';
import Home from './app/Home';

const loaderHomeData: LoaderHomeData = {
    highlightMovieDetail: highlightMovieDetailLoader(),
    highlightMovies: highlightMovieLoader(),
    latestReleases: latestReleasesLoader(),
    recommended: recommendedLoader(),
};

const loaderActorData: LoaderActorData = {
    actors: getActorLoader(),
};

const loaderMovieData = (movie_id: string | undefined): LoaderMovieData => ({
    movieDetailSimilar: movieDetailSimilarLoader(Number(movie_id)),
    movieDetailCast: movieDetailCastLoader(Number(movie_id)),
    movieDetail: movieDetailLoader(Number(movie_id)),
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route
                element={<Home />}
                loader={() =>
                    defer({
                        ...loaderActorData,
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
            <Route element={<Actor />} path="actor/:id" />
        </Route>
    )
);

export default router;
