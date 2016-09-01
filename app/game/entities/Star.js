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

    console.log(this.x);
    console.log(this.y);
    console.log(game);
};

Star.prototype = Object.create(Phaser.Sprite.prototype);
Star.prototype.constructor = Star;

Star.prototype.update = function() {
    if (this.game.input.pointer1.isDown) {
        //this.rotation = this.game.physics.arcade.angleToPointer(this);
        if (this.x > this.game.input.pointer1.x)  {
            this.rotation = this.game.physics.arcade.angleToPointer(this);
        } else if (this.x <= this.game.input.pointer1.x) {
            this.rotation = -this.game.physics.arcade.angleToPointer(this);
        } else {
            //this.rotation = 0;
        }

        this.x = this.game.input.pointer1.x;
    } else {
        this.angle = 0;
    }

    if (this.tween == null || !this.tween.isRunning) {
        //this.body.velocity.y = -2500;
        this.alpha = 1;
    }
}

module.exports = Star;