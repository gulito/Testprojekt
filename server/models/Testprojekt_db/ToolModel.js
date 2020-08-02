import ToolModelGenerated from "./generated/ToolModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ToolModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ToolModelGenerated,
  ...customModel
};
