/**
 * Game entry point
 */
var Star = require("./entities/Star");
var Planet = require("./entities/Planet");
var BackgroundStarGroup = require("./groups/BackgroundStarGroup");
var PlanetGroup = require("./groups/PlanetGroup");
var LevelManager = require("./managers/LevelManager");

Game = function() {

};

var game = null;

Game.prototype.init = function(elmt) {

    this.instance = new Phaser.Game(
        window.innerWidth, window.innerHeight,
        Phaser.AUTO, elmt);

    this.instance.state.add("init", {
        preload: preload,
        create: create,
        update: update
    });

    this.instance.state.start("init");

    game = this.instance;

}

Game.prototype.start = function() {
    this.instance.planets.init();
    this.instance.levelManager.reset();
    this.instance.star.reset();
    this.instance.background.reset();
    this.instance.foreground.reset();

}

Game.prototype.get = function() {
    return this.instance;
}

function preload() {
    game.load.audio('music', 'assets/sounds/music.mp3');
    game.load.image('star', 'assets/images/star.png');
    game.load.image('planet', 'assets/images/planet.png');
    game.load.image('backgroundStar', 'assets/images/backgroundStar.png');
}

function create() {
    var audio = game.add.audio("music");

    audio.play();



    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.star = new Star(game);
    //game.star.body.velocity.y = -1500;

    game.levelManager = new LevelManager(game.star);
    game.background = new BackgroundStarGroup(game);
    game.planets = new PlanetGroup(game, game.star);
    game.foreground = new BackgroundStarGroup(game, true);

    game.camera.follow(game.star, Phaser.Camera.FOLLOW_TOPDOWN);
    game.camera.bounds = null;
    var camHeight = game.height * 0.6;

    this.camera.deadzone = new Phaser.Rectangle(0, camHeight,
        game.width, game.height - camHeight);
}

function update() {
    game.levelManager.update();
}

function renderer() {

}

module.exports = new Game();