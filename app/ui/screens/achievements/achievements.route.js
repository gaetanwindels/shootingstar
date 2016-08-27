module.exports = ["$stateProvider", function($stateProvider) {

    $stateProvider.state("achievements", {
        url: "/achievements",
        templateUrl: "ui/screens/achievements/achievements.view.html",
        controller: "achievementsController",
        controllerAs: "achievements",
    });

}];