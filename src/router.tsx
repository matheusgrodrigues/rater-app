import { createRoutesFromElements, createBrowserRouter, Route, defer } from 'react-router-dom';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Home from './app/Home';

import {
    highlightMovieDetailLoader,
    highlightMovieLoader,
    latestReleasesLoader,
    LoaderHomeData,
    recommendedLoader,
} from './app/Home/loader';

import { getActorLoader, LoaderActorData } from './app/Actor/loader';

const loaderHomeData = {
    highlightMovieDetail: highlightMovieDetailLoader(),
    highlightMovies: highlightMovieLoader(),
    latestReleases: latestReleasesLoader(),
    recommended: recommendedLoader(),
} as LoaderHomeData;

const loaderActorData = {
    actor: getActorLoader(),
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
        </Route>
    )
);

export default router;
