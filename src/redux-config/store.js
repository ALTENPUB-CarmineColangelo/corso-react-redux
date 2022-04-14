import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducers";
import { middlewares } from './middlewares';
import { watchers } from "./watchers";
import { middlewareSaga } from "./middlewares/middlewareSaga";

const store = createStore(rootReducers, {}, applyMiddleware(...middlewares));

watchers.forEach(watcher => middlewareSaga.run(watcher));

export default store;