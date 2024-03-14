'use strict';

/**
 * cash-inward service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cash-inward.cash-inward');
