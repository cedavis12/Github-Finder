import {
  SEARCH_USERS,
  SET_LOADING,
  // eslint-disable-next-line
  CLEAR_USERS,
  // eslint-disable-next-line
  GET_USER,
  // eslint-disable-next-line
  GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
