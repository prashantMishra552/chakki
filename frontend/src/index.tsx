import React from 'react';
import App from "./App/App";
import { hydrateRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from '../../store/store';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { routes } from "../../router/routes";

let router = createBrowserRouter(routes);

hydrateRoot(document.getElementById('root'), (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
))
