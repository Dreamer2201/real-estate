import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './auth/userSlice';
import housesReduser from './houses/houseSlice'

const authPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
  }

const persistedAuthReducer = persistReducer(authPersistConfig, userReducer);

const rootReducer = combineReducers({
    user: persistedAuthReducer,
    houses: housesReduser
})

const store = configureStore({
    reducer: {
        user: persistedAuthReducer,
        houses: housesReduser
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  }
  );

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   }
// })

const persistor = persistStore(store);

export { store, persistor };