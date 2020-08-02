import BereichModelGenerated from "./generated/BereichModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await BereichModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BereichModelGenerated,
  ...customModel
};
