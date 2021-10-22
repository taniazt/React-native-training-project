import {configureStore} from '@reduxjs/toolkit';
import settingsReducer from './toggleSlice';

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
