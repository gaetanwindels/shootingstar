/**
 * Game entry point
 */
var Star = require("./entities/Star");
var Planet = require("./entities/Planet");
var BackgroundStarGroup = require("./groups/BackgroundStarGroup");
var PlanetGroup = require("./groups/PlanetGroup");

var game = {};

var instance = null;

var star;

game.start = function(elmt) {


    instance = new Phaser.Game(window.innerWidth,
        window.innerHeight,
        Phaser.AUTO, elmt, { preload: preload, create: create, update: update });
}

function preload() {
    instance.load.image('star', 'assets/images/star.png');
    instance.load.image('planet', 'assets/images/planet.png');
    instance.load.image('backgroundStar', 'assets/images/backgroundStar.png');
}

function create() {
    instance.physics.startSystem(Phaser.Physics.ARCADE);

    star = new Star(instance);
    new BackgroundStarGroup(instance);
    new PlanetGroup(instance, star);
    new BackgroundStarGroup(instance, true);
    instance.camera.follow(star, Phaser.Camera.FOLLOW_TOPDOWN);
    instance.camera.bounds = null;
    var camHeight = instance.height * 0.6;

    instance.camera.deadzone = new Phaser.Rectangle(0, camHeight,
        instance.width, instance.height - camHeight);
}

function update() {

}

function renderer() {

}

game.getInstance = function() {
    return instance;
}

module.exports = game;