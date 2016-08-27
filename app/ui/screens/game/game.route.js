module.exports = ["$stateProvider", function($stateProvider) {

    $stateProvider.state("game", {
        url: "/game",
        templateUrl: "ui/screens/game/game.view.html"
    });

}];