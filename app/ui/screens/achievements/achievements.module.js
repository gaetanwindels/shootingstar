var angular = require("angular");
require("angular-ui-router");

var moduleName = "achievements";

var achievementsModule = angular.module(moduleName, [
    "ui.router"
]);

achievementsModule.name = moduleName;

achievementsModule.controller("achievementsController", require("./achievements.controller"));

achievementsModule.config(require("./achievements.route"));

module.exports = achievementsModule;