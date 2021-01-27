'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    // GET /connection string
    async getConnectionStrings(ctx) {
      const result = await strapi
      .query('sensor')
      .model.fetchAll({ columns: ['Mark', 'Name'] }) // here we wait for one column only
      console.log(result)
      ctx.send(result);
    },
};
