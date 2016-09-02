var angular = require("angular");
require("angular-ui-router");

var moduleName = "lost";

var lostModule = angular.module(moduleName, [
    "ui.router"
]);

lostModule.name = moduleName;

lostModule.controller("lostController", require("./lost.controller"));

lostModule.config(require("./lost.route"));

module.exports = lostModule;