import {RootState} from '.';

export const selectIsCompact = ({settings}: RootState) => settings.isCompact;
export const selectSortBy = ({settings}: RootState) => settings.sortBy;
export const selectAvailablePodcasts = ({settings}: RootState) =>
  settings.availablePodcasts;
export const selectPodcastsList = ({podcasts}: RootState) =>
  podcasts.podcastsList;
export const selectedPodcastId = ({podcasts}: RootState) =>
  podcasts.selectedPodcastId;
