import {
    GET_PROGRAMS,
    PROGRAM_ERROR,
    CLEAR_PROGRAM,
 
  } from '../actions/types';
  
  const initialState = {
    program: null,
    programs: [],
    loading: true,
    error: {}
  };
  
  console.log("in the program reducer")
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROGRAMS:
        return {
          ...state,
          programs: payload,
          loading: false
        };
      case PROGRAM_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case CLEAR_PROGRAM:
        return {
          ...state,
          program: null,
          loading: false
        };
      default:
        return state;
    }
  };