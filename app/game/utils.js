var Utils = {};

Utils.getRandomArbitrary = function (min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = Utils;