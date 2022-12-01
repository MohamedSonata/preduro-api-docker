'use strict';

/**
 * feed-back service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feed-back.feed-back');
