import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: getLogs,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// initial way to understand better, then refactored
// with less code and trycatch
// export const getLogs = () => {

//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: getLogs,
//       payload: data
//     })
//   }
// };

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
