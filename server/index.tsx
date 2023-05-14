import React from "react";
import express from 'express';
import { Express, Request, Response } from 'express';
import { renderToString } from "react-dom/server";
import App from '../frontend/src/App/App';
const app: Express = express();
app.use(express.static('frontend/public')); //dir is available to outside world
import { Provider } from "react-redux";
import { store } from '../store/store.server';
import serialize from 'serialize-javascript';
import {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
    StaticHandlerContext
} from "react-router-dom/server";

import { routes } from "../router/routes";
import { createFetchRequest } from "./request";
const handler = createStaticHandler(routes);

app.get('*', async (req: Request, res: Response) => {
    //converts express request to global request object
    const fetchRequest = createFetchRequest(req);
    const context = await handler.query(fetchRequest) as StaticHandlerContext;
    const router = createStaticRouter(
        handler.dataRoutes,
        context
    );

    const content = renderToString(
        <Provider store={store}>
            <StaticRouterProvider router={router} context={context} />
        </Provider>
    );
    res.send(`<html>
        <head>
        </head>
        <body>
           <div id="root">${content}</div>
           <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
           <script src="bundle.js"></script>
        <body>
    </html>`);

})

app.listen(3000, () => {
    console.log('listening on port 3000')
})