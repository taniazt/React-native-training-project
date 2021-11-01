import {createSlice} from '@reduxjs/toolkit';

import {podcastInfo} from '../mock-api';

const podcastInitial = {podcastsList: podcastInfo, selectedPodcastId: null};

const podcastSlice = createSlice({
  name: 'podcasts',
  initialState: podcastInitial,
  reducers: {
    handleSelectedPodcastId(state, action) {
      state.selectedPodcastId = action.payload.selectedPodcastId;
    },
  },
});

export const {handleSelectedPodcastId} = podcastSlice.actions;

export default podcastSlice.reducer;
