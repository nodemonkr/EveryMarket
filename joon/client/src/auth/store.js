import { createStore } from "redux";
import user_reducer from "./reducers/user_reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginUser } from "./actions/user-action";

const store = createStore(user_reducer, composeWithDevTools());

store.dispatch(loginUser());

export default store;
