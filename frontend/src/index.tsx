import React from 'react';
import App from "./App/App";
import { hydrateRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from '../../store/store';

hydrateRoot(document.getElementById('root'), <Provider store={store}><App /></Provider>)
