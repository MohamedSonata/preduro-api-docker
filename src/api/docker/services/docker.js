'use strict';

/**
 * docker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docker.docker');
