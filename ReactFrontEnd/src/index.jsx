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
                <Component />
            </HashRouter>
            </Provider>,
        document.getElementById("react-app-root")
    );

    render(App);

/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
      render(App);
    });
  }
  /*eslint-enable */