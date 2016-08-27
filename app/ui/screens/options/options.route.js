module.exports = ["$stateProvider", function($stateProvider) {

    $stateProvider.state("options", {
        url: "/options",
        templateUrl: "ui/screens/options/options.view.html",
        controller: "optionsController"
    });

}];