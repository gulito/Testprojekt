import actionsFunction from "./generated/ToolActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ToolApi from "../../api/ToolApi";
 
 actionsFunction.loadToolList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ToolApi
     .getToolList()
     .then(list => {
       dispatch(actionsFunction.loadToolSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
