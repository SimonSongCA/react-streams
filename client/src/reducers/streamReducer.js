import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

// Key interpolation. Add the key-value pair and merge it into a new, single object
// following the 'state' variable.
export default (state = {}, action) => {
  switch (action.type) {
    // use .mapKeys() to convert an array into an object
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // choose the payload that we want to drop.
      // it creates a new object and returns it.
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
