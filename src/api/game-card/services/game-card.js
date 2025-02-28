'use strict';

/**
 * game-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-card.game-card');
