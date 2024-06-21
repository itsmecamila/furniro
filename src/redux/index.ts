import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

import userReducer  from './user/reducer';
import cartReducer  from './cart/reducer';

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;