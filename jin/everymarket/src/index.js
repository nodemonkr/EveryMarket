import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; // 추가
import { Provider } from "react-redux"; // 추가
import rootReducer from "./modules"; // 추가
import App from "./App";

const store = createStore(rootReducer); // 추가

ReactDOM.render(
  <Provider store={store}> // Provier로 감싸준다
    <App />
  </Provider>,
  document.getElementById("root")
);