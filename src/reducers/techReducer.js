import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

// const techReducer = (state = initialState, action) => {
//   switch (action.type) {
const techReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default techReducer;
