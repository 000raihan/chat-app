import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/rootReucer';
import thunk from 'redux-thunk';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(thunk), ReactReduxDevTools) );

export default store;