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
        //item.x = this.game.world.randomX;
        //item.y = this.game.world.randomY;
    }.bind(this));
}

BackgroundStarGroup.prototype.update = function() {

    this.forEach(function(item) {

        item.update();

        if(!item.inCamera) {
            item.y -= this.game.height;
            item.x = this.game.world.randomX;
        }

    }.bind(this));

}

module.exports = BackgroundStarGroup;