import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
} from "./matchActions";

const initialState = {
  matches: [],
  loading: false,
  error: null,
};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATCHES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MATCHES_SUCCESS:
      return { ...state, loading: false, matches: action.payload };
    case FETCH_MATCHES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
