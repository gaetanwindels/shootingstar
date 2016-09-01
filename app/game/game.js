/**
 * Game entry point
 */
var Star = require("./entities/Star");
var Planet = require("./entities/Planet");
var BackgroundStarGroup = require("./groups/BackgroundStarGroup");
var PlanetGroup = require("./groups/PlanetGroup");

Game = function() {

   /* this.instance = new Phaser.Game(window.innerWidth,
        window.innerHeight,
        Phaser.AUTO);

    this.instance.state.add("init", {
        preload: preload,
        create: create,
        update: update
    });*/

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

    console.log(this.instance.width);
    console.log(this.instance.height);

}

Game.prototype.start = function() {
    this.instance.star && (this.instance.star.body.velocity.y = -1500);
    console.log(this.instance);
    console.log(this.instance.star);
    console.log(this.instance.star.body.velocity.y);
}

Game.prototype.get = function() {
    return this.instance;
}

function preload() {
    game.load.image('star', 'assets/images/star.png');
    game.load.image('planet', 'assets/images/planet.png');
    game.load.image('backgroundStar', 'assets/images/backgroundStar.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.star = new Star(game);
    //game.star.body.velocity.y = -1500;

    new BackgroundStarGroup(game);
    new PlanetGroup(game, game.star);
    new BackgroundStarGroup(game, true);
    game.camera.follow(game.star, Phaser.Camera.FOLLOW_TOPDOWN);
    game.camera.bounds = null;
    var camHeight = game.height * 0.6;

    this.camera.deadzone = new Phaser.Rectangle(0, camHeight,
        game.width, game.height - camHeight);
}

function update() {
}

function renderer() {

}

module.exports = new Game();