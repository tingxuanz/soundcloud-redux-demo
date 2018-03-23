import * as actionTypes from '../constants/actionType';

export const setTracks = tracks => (
  {
    type: actionTypes.TRACKS_SET,
    payload: {
      tracks,
    },
  }
);
