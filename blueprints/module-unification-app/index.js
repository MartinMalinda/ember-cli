'use strict';

const stringUtil = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates an Ember application with a module unification layout.',

  filesToRemove: [],

  locals(options) {
    let entity = options.entity;
    let rawName = entity.name;
    let name = stringUtil.dasherize(rawName);
    let namespace = stringUtil.classify(rawName);

    return {
      name,
      modulePrefix: name,
      namespace,
      emberCLIVersion: require('../../package').version,
      yarn: options.yarn,
      welcome: options.welcome,
    };
  },

  fileMapTokens(options) {
    return {
      __component__() { return options.locals.component; },
    };
  },
};
