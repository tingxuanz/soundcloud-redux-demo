import * as actionTypes from '../constants/actionType';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      const tracks = action.payload.tracks;
      return [...state, ...tracks];
    default:
      return state;
  }
}