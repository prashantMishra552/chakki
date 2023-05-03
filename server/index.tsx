import React from "react";
import express from 'express';
import { Express, Request, Response } from 'express';
import { renderToString } from "react-dom/server";
import App from '../frontend/src/App';
const app: Express = express();

app.get('*', (req: Request, res: Response) => {
    const content = renderToString(<App />);
    res.send(`
    <html>
        <head>
        </head>
        <body>
             ${content}
        <body>
    </html>
    `);

})

app.listen(3000, () => {
    console.log('listening on port 3000')
})