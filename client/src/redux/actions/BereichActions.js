import actionsFunction from "./generated/BereichActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import BereichApi from "../../api/BereichApi";
 
 actionsFunction.loadBereichList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return BereichApi
     .getBereichList()
     .then(list => {
       dispatch(actionsFunction.loadBereichSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
