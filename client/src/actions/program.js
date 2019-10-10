import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROGRAM,
    GET_PROGRAMS,
    PROGRAM_ERROR,
    // UPDATE_PROFILE,
    CLEAR_PROGRAM,
    // ACCOUNT_DELETED,
    // GET_REPOS
  } from './types';
  
  
  console.log("in the program actions")
  // Get all programs
export const getPrograms = () => async dispatch => {
    dispatch({ type: CLEAR_PROGRAM });
  
    try {
      const res = await axios.get('/api/programs');
  
      dispatch({
        type: GET_PROGRAMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROGRAM_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };