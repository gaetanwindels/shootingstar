var Planet = require("./../entities/Planet");
var Utils = require("./../utils");

PlanetGroup = function (game, star) {

    Phaser.Group.call(this, game);
    this.star = star;

    var sprite = new Planet(game, game.world.randomX, -game.height);

    this.add(sprite);

    for (var i = 0; i < 5; i++) {
        this.spanwPlanet();
    }
};

PlanetGroup.prototype = Object.create(Phaser.Group.prototype);
PlanetGroup.prototype.constructor = PlanetGroup;

PlanetGroup.prototype.spanwPlanet = function() {
    var lastChild = this.getChildAt(this.children.length - 1);
    var fromX = lastChild.width;
    var toX = this.game.world.randomX + lastChild.width - lastChild.width;
    var toY = lastChild.y - this.game.world.randomY / 8 - lastChild.height;

    var sprite = new Planet(this.game, Utils.getRandomArbitrary(fromX, toX), toY);

    sprite.tint = Math.random() * 0xffffff;
    this.add(sprite);

    return sprite;
};

PlanetGroup.prototype.update = function() {

    this.forEach(function(item) {

        var star = this.star;

        //if (item.getBounds().contains(star.x + star.width / 2, star.y + star.height / 2)) {
            //console.log(item.getBounds());
            //console.log(star.centerX + "," + star.centerY);
        //}

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