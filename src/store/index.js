import {configureStore} from '@reduxjs/toolkit';
import toggleReducer from './toggleSlice';

export default configureStore({
  reducer: {
    state: toggleReducer,
  },
});
