'use strict';

/**
 * cash-outward service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cash-outward.cash-outward');
