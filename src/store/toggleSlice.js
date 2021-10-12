import {createSlice} from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'state',
  initialState: {
    isCompact: 'Compact',
    sortBy: 'Newest on top',
    availablePodcasts: [],
  },
  reducers: {
    handleIsCompactToggle(state, action) {
      state.isCompact = action.payload.isCompact;
    },
    handleSortByToggle(state, action) {
      state.sortBy = action.payload.sortBy;
    },
    handleAvailablePodcastsToggle(state, action) {
      let result = [...state.availablePodcasts];
      if (state.availablePodcasts.includes(action.payload.podcastName)) {
        result = result.filter(i => i !== action.payload.podcastName);
      } else {
        result.push(action.payload.podcastName);
      }
      state.availablePodcasts = result;
    },
  },
});

export const {
  handleIsCompactToggle,
  handleSortByToggle,
  handleAvailablePodcastsToggle,
} = toggleSlice.actions;

export default toggleSlice.reducer;
