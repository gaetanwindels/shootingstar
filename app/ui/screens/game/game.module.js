var angular = require("angular");
require("angular-ui-router");

var moduleName = "game";

var gameModule = angular.module(moduleName, [
    "ui.router"
]);

gameModule.name = moduleName;

gameModule.controller("gameController", require("./game.controller"));

gameModule.config(require("./game.route"));

module.exports = gameModule;