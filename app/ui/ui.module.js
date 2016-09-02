/**
 * Ui entry point
 */
var angular = require("angular");

var uiModule = angular.module("ui", [
    require("./../shared/shared.module").name,
    require("./screens/menu/menu.module").name,
    require("./screens/game/game.module").name,
    require("./screens/lost/lost.module").name,
    require("./screens/achievements/achievements.module").name,
    require("./screens/options/options.module").name
]);

uiModule.name = "ui";

uiModule.config(["$urlRouterProvider", function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/menu");
}]);

module.exports = uiModule;