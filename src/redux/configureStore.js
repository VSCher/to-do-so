import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function (initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );

}