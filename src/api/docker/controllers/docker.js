'use strict';

/**
 * docker controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::docker.docker');
