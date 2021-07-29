import { createStore } from "redux";
import user_reducer from "./reducers/user_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(user_reducer, composeWithDevTools());

export default store;
