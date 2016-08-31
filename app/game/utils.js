var Utils = {};

Utils.getRandomArbitrary = function (min, max) {
    return Math.random() * (max - min) + min;
}

Utils.pointInCircle = function(x, y, cx, cy, radius) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
}

module.exports = Utils;