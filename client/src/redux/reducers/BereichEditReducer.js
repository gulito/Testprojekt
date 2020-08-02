// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  bereich: {}
};

// Reducer
export default function BereichEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BEREICH_SUCCESS:
      return { ...state, bereich: action.payload };
    case types.UPDATE_BEREICH_SUCCESS:
      return { ...state, bereich: action.payload };
    case types.GET_BEREICH_SUCCESS:
      return { ...state, bereich: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}