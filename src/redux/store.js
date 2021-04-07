import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';
/**
 * the middleware will listen the change of states
 */

/**
 * devTools used to monitoring the store data.
 * thunk is used to send request
 */
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk)));
//const store = createStore(rootReducer, applyMiddleware(logger))

export default store