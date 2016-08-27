/**
 * This is not a proper way to use modules but Phaser
 * has not been defined to work in a modular way,
 * so compromise has to be made, read :
 * https://github.com/photonstorm/phaser#browserify
 */
window.PIXI = require('phaser/build/custom/pixi');
window.p2 = require('phaser/build/custom/p2');
window.Phaser = require('phaser/build/custom/phaser-split');

var angular = require("angular");

var uiModule = require("./ui/ui.module");

angular.element(document).ready(function () {
    angular.bootstrap(document.body, [uiModule.name]);
});