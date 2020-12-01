'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByUsername(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.users.search(ctx.query);
    } else {
      entities = await strapi.services.users.find(ctx.query);
    }
    return entities.map(entity => {
      const usersClasses = sanitizeEntity(entity, {
        model: strapi.models.users,
      });
      return usersClasses;
    });
  },
};
