var LevelData = require("./../data/LevelData");

LevelManager = function (star) {

    this.star = star;

    this.cursor = 0;

};

LevelManager.prototype.constructor = LevelManager;

LevelManager.prototype.update = function() {

    if (this.cursor < LevelData.length - 1 &&
        this.star.y < LevelData[this.cursor + 1].start) {
        this.cursor++; // next level
    }

    console.log(this.getCurrentLevelCompletion());
}

LevelManager.prototype.getCurrentLevelNumber = function() {
    return this.cursor + 1;
}

LevelManager.prototype.getCurrentLevel = function() {
    return LevelData[this.cursor];
}

LevelManager.prototype.getCurrentLevelCompletion = function() {
    if (this.cursor >= LevelData.length - 1) {
        return 100;
    }
    var levelDistance = Math.abs(LevelData[this.cursor + 1].start - LevelData[this.cursor].start);
    var starDistance = Math.abs(this.star.y - LevelData[this.cursor].start);
    return starDistance / levelDistance * 100;
}

LevelManager.prototype.reset = function() {
    this.cursor = 0;
}

module.exports = LevelManager;