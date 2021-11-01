import {configureStore} from '@reduxjs/toolkit';

import podcastsReducer from './podcastSlice';
import settingsReducer from './toggleSlice';

const middleware = [];

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, global-require
  const reduxLogger = require('redux-logger');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  middleware.push(reduxLogger.createLogger());
}

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    podcasts: podcastsReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
