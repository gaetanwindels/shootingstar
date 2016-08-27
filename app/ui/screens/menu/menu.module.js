var angular = require("angular");
require("angular-ui-router");

var moduleName = "menu";

var menuModule = angular.module(moduleName, [
    "ui.router"
]);

menuModule.name = moduleName;

menuModule.controller("MenuController", require("./menu.controller"));

menuModule.config(require("./menu.route"));

module.exports = menuModule;