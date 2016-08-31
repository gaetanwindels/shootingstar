/**
 * This directive is meant to wrap the Phaser game
 * to be used in an angular ui.
 * It acts as a bridge between the Phaser and Angular part of
 * the game.
 */

var angular = require("angular"),
    game    = require("./../game/game.js");

function gameDirective() {
    return {
        link: function($scope, $elmt, $attr) {
            game.init($elmt[0]);
        }
    }
}

module.exports = gameDirective;

