import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, defer } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import App from './app/Home';

import { defaultTheme } from './config/theme';

import { movieHighlightLoader } from './app/Home/loader';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route
                element={<App />}
                loader={() => {
                    const highlightMovies = movieHighlightLoader();

                    return defer({ highlightMovies });
                }}
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
