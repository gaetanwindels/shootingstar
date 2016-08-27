var angular = require("angular");
require("angular-ui-router");

var moduleName = "options";

var optionsModule = angular.module(moduleName, [
    "ui.router"
]);

optionsModule.name = moduleName;

optionsModule.controller("optionsController", require("./options.controller"));

optionsModule.config(require("./options.route"));

module.exports = optionsModule;