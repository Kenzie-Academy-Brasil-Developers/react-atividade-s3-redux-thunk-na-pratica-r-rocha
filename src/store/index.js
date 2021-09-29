// Adicionamos o applyMiddleweare do próprio redux
import { createStore, combineReducers, applyMiddleware } from "redux";

// Também adicionamos o thunk
import thunk from "redux-thunk";

import userReducer from "./modules/user/reducer";

const reducers = combineReducers({ user: userReducer });

// Além do reducers, colocamos o applyMiddleware passando o thunk
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
