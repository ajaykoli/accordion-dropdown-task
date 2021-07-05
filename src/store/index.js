import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../reducers';

const middleware = [...getDefaultMiddleware()];

// Any preloaded state goes here
const preloadedState = {
    //Default state  
}

export default function () {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });

    return store;
}
