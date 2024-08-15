import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import myFirstReducer from "./reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  myFirstReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
