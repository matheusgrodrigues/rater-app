import { createRoutesFromElements, createBrowserRouter, Route, defer } from 'react-router-dom';

import {
    highlightMovieDetailLoader,
    highlightMovieLoader,
    latestReleasesLoader,
    recommendedLoader,
    LoaderHomeData,
} from './app/Home/loader';

import { getActorLoader, LoaderActorData } from './app/Actor/loader';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Movie from './app/Movie';
import Actor from './app/Actor/Actor';
import Home from './app/Home';
import { LoaderMovieData, movieDetailLoader } from './app/Movie/loader';

const loaderHomeData = {
    highlightMovieDetail: highlightMovieDetailLoader(),
    highlightMovies: highlightMovieLoader(),
    latestReleases: latestReleasesLoader(),
    recommended: recommendedLoader(),
} as LoaderHomeData;

const loaderActorData = {
    actors: getActorLoader(),
} as LoaderActorData;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route
                element={<Home />}
                loader={() =>
                    defer({
                        ...loaderHomeData,
                        ...loaderActorData,
                    })
                }
                index
            />

            <Route
                element={<Movie />}
                loader={({ params }) =>
                    defer({
                        movieDetail: movieDetailLoader(Number(params.id)),
                    })
                }
                path="movie/:id"
            />
            <Route element={<Actor />} path="actor/:id" />
        </Route>
    )
);

export default router;
