import { createRoutesFromElements, createBrowserRouter, Route, defer } from 'react-router-dom';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Home from './app/Home';

import {
    highlightMovieDetailLoader,
    highlightMovieLoader,
    latestReleasesLoader,
    recommendedLoader,
} from './app/Home/loader';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route
                element={<Home />}
                loader={() =>
                    defer({
                        highlightMovieDetail: highlightMovieDetailLoader(),
                        highlightMovies: highlightMovieLoader(),
                        latestReleases: latestReleasesLoader(),
                        recommended: recommendedLoader(),
                    })
                }
                index
            />
        </Route>
    )
);

export default router;
