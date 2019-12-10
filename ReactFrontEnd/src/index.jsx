import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from 'redux';
import rootReducer from './reducers/';
import { HashRouter } from "react-router-dom";

const store = createStore(rootReducer)

    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
            </Provider>,
        document.getElementById("react-app-root")
    );
