import React from "react";
import express from 'express';
import { Express, Request, Response } from 'express';
import { renderToString } from "react-dom/server";
import App from '../frontend/src/App';
const app: Express = express();
app.use(express.static('frontend/public')); //dir is available to outside world


app.get('*', (req: Request, res: Response) => {
    const content = renderToString(<App />);
    res.send(`<html>
        <head>
        </head>
        <body>
           <div id="root">${content}</div>jfd sdsd
           <script src="bundle.js"></script>
        <body>
    </html>`);

})

app.listen(3000, () => {
    console.log('listening on port 3000')
})