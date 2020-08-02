// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function BereichListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BEREICH_SUCCESS:
      return { ...state, bereich: action.payload };
    case types.LIST_BEREICH_SUCCESS:
      return { ...state, listBereich: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}