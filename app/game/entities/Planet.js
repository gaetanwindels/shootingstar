var Utils = require("./../utils");

var Planet = function (game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'planet');

    this.anchor.setTo(0.5, 0.5);

    game.add.existing(this);
    game.physics.arcade.enable([this]);

    this.width = game.width / 3;
    this.width = this.width * Utils.getRandomArbitrary(0.5, 1);
    this.height = this.width;
};

Planet.prototype = Object.create(Phaser.Sprite.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.update = function() {

}

module.exports = Planet;