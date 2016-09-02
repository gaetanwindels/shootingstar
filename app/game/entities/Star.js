var Star = function (game) {

    var width = game.width / 8;

    Phaser.Sprite.call(this, game, game.width / 2, game.height *  0.2, 'star');

    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);

    this.width = width;
    this.height = width;
    this.anchor.setTo(0.5, 0.5);

    this.tween = null;
    this.body.velocity.y = 0;
};

Star.prototype = Object.create(Phaser.Sprite.prototype);
Star.prototype.constructor = Star;

Star.prototype.reset = function() {
    this.body.velocity.y = -2000;
    this.x = this.game.width / 2;
    this.y = this.game.height *  0.2;
}

Star.prototype.update = function() {
    if (this.body.velocity.y != 0) {
        this.x = this.game.input.pointer1.x;
    }
}

module.exports = Star;