/**
 * Module containing all the stuff shared between
 * the Angular ui and the Phaser part of the game
 * @type {angular|exports|module.exports}
 */

var angular = require("angular");

var gameDirective = require("./game.directive");

var sharedModule = angular.module("shared", []);

sharedModule.name = "shared";

sharedModule.directive("game", gameDirective);

module.exports = sharedModule;