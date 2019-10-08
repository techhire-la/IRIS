import {
    GET_PROGRAM,
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
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
    //   case GET_PROGRAM:
    //   case UPDATE_PROGRAM:
    //     return {
    //       ...state,
    //       program: payload,
    //       loading: false
    //     };
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
  }