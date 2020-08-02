import BereichApiGenerated from "./generated/BereichApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BereichApi extends BereichApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Bereich List
  static getBereichList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/bereichs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BereichApi;