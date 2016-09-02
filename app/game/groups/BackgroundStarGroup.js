var BackgroundStar = require("./../entities/BackgroundStar");

BackgroundStarGroup = function (game, foreGround) {

    Phaser.Group.call(this, game);

    this.foreGround = foreGround;
    for (var i = 0; i < 40; i++) {
        var sprite = new BackgroundStar(game, game.world.randomX, game.world.randomY, foreGround);
        this.add(sprite);
    }
};

BackgroundStarGroup.prototype = Object.create(Phaser.Group.prototype);
BackgroundStarGroup.prototype.constructor = BackgroundStarGroup;

BackgroundStarGroup.prototype.reset = function() {
    /*
     * Less expensive than creating x sprites
     */
    this.forEach(function(item) {
        item.destroy();
    }.bind(this));

    for (var i = 0; i < 40; i++) {
        var sprite = new BackgroundStar(this.game, this.game.world.randomX, this.game.world.randomY, this.foreGround);
        this.add(sprite);
    }
}

BackgroundStarGroup.prototype.update = function() {

    this.forEach(function(item) {

        item.update();

        if(!item.inCamera && item.x > this.game.camera.view.x) {
            item.y -= this.game.height;
            item.x = this.game.world.randomX;
        }

    }.bind(this));

}

module.exports = BackgroundStarGroup;