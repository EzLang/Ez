import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './RootReducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['muiLists'],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createEnhancedStore = composeEnhancers()(createStore)

export const store = createEnhancedStore(persistedReducer)
export const persistor = persistStore(store)