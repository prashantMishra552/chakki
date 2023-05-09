import React from 'react';
import App from "./App";
import { hydrateRoot } from 'react-dom/client';

hydrateRoot(document.getElementById('root'), <App />)
