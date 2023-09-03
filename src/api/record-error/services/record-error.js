'use strict';

/**
 * record-error service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::record-error.record-error');
