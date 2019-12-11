import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from 'redux';
import summReducer from './reducers/summReducer';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const store = createStore(summReducer)

    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
            </Provider>,
        document.getElementById("react-app-root")
    );

 