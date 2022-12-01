'use strict';

/**
 *  test-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-request.test-request');
