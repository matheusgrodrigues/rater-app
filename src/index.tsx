import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, defer } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Home from './app/Home';

import { defaultTheme } from './config/theme';

import { movieHighlightDetailLoader, movieHighlightLoader } from './app/Home/loader';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route
                element={<Home />}
                loader={() =>
                    defer({
                        movieHighlightDetail: movieHighlightDetailLoader(),
                        highlightMovies: movieHighlightLoader(),
                    })
                }
                index
            />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
