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
        // if it is a tap
        /*if (this.game.input.pointer1.justPressed(100) &&
            (this.tween == null || !this.tween.isRunning)) {
            this.destX = this.game.input.pointer1.x;
            this.destY = this.y - (this.game.height - this.game.input.pointer1.y);
            this.body.velocity.y = 0;
            this.alpha = 0.5;

            this.rotation = this.game.physics.arcade.angleToPointer(this);

            this.tween = this.game.add.tween(this).to( { x: this.destX | 0, y: this.destY | 0  }, 100, null, true);
        }*/
    } else {
        this.angle = 0;
    }

    if (this.tween == null || !this.tween.isRunning) {
        //this.body.velocity.y = -2500;
        this.alpha = 1;
    }
}

module.exports = Star;