import {configureStore} from '@reduxjs/toolkit';
import settingsReducer from './toggleSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
