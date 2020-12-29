import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './reducers/userReducer';

const rootReducer = combineReducers({
    userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
