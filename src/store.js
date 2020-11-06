import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import photoGalleryReducer from './modules/reducers/photoBrowserReducer';

const rootReducer = combineReducers({
    photoGallery: photoGalleryReducer
});

const loggerMiddleware = createLogger();

const store = createStore(
    // reducer
    rootReducer,
    undefined,
    compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
);

export default store;