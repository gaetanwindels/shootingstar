var Planet = require("./../entities/Planet");
var Utils = require("./../utils");

PlanetGroup = function (game, star) {

    Phaser.Group.call(this, game);
    this.star = star;

    var sprite = new Planet(game, game.world.randomX, -game.height);

    this.init();
};


PlanetGroup.prototype = Object.create(Phaser.Group.prototype);
PlanetGroup.prototype.constructor = PlanetGroup;

PlanetGroup.prototype.init = function() {
    this.forEach(function(item) {
        item.destroy();
    });

    var sprite = new Planet(this.game, this.game.world.randomX, -this.game.height);

    this.add(sprite);

    for (var i = 0; i < 5; i++) {
        this.spanwPlanet();
    }
}

PlanetGroup.prototype.spanwPlanet = function() {
    var lastChild = this.getChildAt(this.children.length - 1);
    var fromX = 0;
    var toX = this.game.width;
    var fromY = lastChild.y - lastChild.height * 1.8;
    var toY = fromY - this.game.world.height / 10;

    var sprite = new Planet(this.game, this.game.world.randomX,
                                       Utils.getRandomArbitrary(fromY, toY));

    sprite.tint = Math.random() * 0xffffff;
    this.add(sprite);

    return sprite;
};


PlanetGroup.prototype.update = function() {

    if (this.star.body.velocity.y == 0) return;

    this.forEach(function(item) {

        var star = this.star;
        if(Utils.pointInCircle(this.star.centerX, this.star.centerY, item.centerX, item.centerY, item.width / 2)) {
            star.body.velocity.y = 0;
            window.location = "#lost";
            //window.location("#menu");
        }

        var lastChild = this.getChildAt(this.children.length - 1);

        if (lastChild.y + lastChild.height > this.game.camera.view.y) {
            this.spanwPlanet();
        }

        if (!item.inCamera && item.y > star.y) {
            item.destroy();
        }

    }.bind(this));

}

module.exports = PlanetGroup;