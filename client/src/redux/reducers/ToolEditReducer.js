// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  tool: {}
};

// Reducer
export default function ToolEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TOOL_SUCCESS:
      return { ...state, tool: action.payload };
    case types.UPDATE_TOOL_SUCCESS:
      return { ...state, tool: action.payload };
    case types.GET_TOOL_SUCCESS:
      return { ...state, tool: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}