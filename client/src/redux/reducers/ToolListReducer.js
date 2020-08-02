// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ToolListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TOOL_SUCCESS:
      return { ...state, tool: action.payload };
    case types.LIST_TOOL_SUCCESS:
      return { ...state, listTool: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}