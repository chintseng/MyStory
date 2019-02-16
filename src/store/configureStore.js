import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ui from './reducers/ui';

const rootReducer = combineReducers({
  ui,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
