import { combineReducers } from "redux";

// START IMPORT REDUCERS
import BereichEditReducer from "./BereichEditReducer";
import BereichListReducer from "./BereichListReducer";
import HomeReducer from "./HomeReducer";
import ToolEditReducer from "./ToolEditReducer";
import ToolListReducer from "./ToolListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	BereichEditReducer,
	BereichListReducer,
	HomeReducer,
	ToolEditReducer,
	ToolListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
