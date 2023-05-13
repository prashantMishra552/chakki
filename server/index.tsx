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

app.get('*', (req: Request, res: Response) => {
    const content = renderToString(<Provider store={store}><App /></Provider>);
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