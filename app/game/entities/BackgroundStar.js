var BackgroundStar = function (game, x, y, foreGround) {

    Phaser.Sprite.call(this, game, x, y, 'backgroundStar');

    this.anchor.setTo(0.5, 0.5);

    this.width = game.width / 80 * (0.1 + Math.random());
    this.height = this.width;

    this.alpha = 0.6 + Math.random() / 3;

    this.foreGround = !!foreGround;

    if (!foreGround) {
        this.alpha /= 2;
    }


    game.add.existing(this);
    game.physics.arcade.enable([this]);

};

BackgroundStar.prototype = Object.create(Phaser.Sprite.prototype);
BackgroundStar.prototype.constructor = BackgroundStar;

BackgroundStar.prototype.update = function() {

    if (this.foreGround) {
        this.y += 2; //
    }
}

module.exports = BackgroundStar;