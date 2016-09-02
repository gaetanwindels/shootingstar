module.exports = ["$stateProvider", function($stateProvider) {

    $stateProvider.state("lost", {
        url: "/lost",
        templateUrl: "ui/screens/lost/lost.view.html",
        controller: "lostController",
        controllerAs: "lost",
    });

}];