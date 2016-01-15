/**
 * Created by rohran01 on 1/15/16.
 */
var app = angular.module('servicesApp', []);

app.controller('servicesController', ['$scope', 'ThetaServices', function($scope , ThetaServices) {
    $scope.name = ThetaServices.name;
    $scope.mascot = ThetaServices.mascot;
    $scope.dog = ThetaServices.dog;
    $scope.instructors = ThetaServices.instructors;
    $scope.motto = ThetaServices.motto;
    $scope.mantra = ThetaServices.mantra;
    $scope.fuel = ThetaServices.fuel;
}]);

app.factory('ThetaServices' , function() {
   var instructors = ['Kristy', 'Joel'];

    function motto() {
        return '"Transcendence through Suffering"';
    }


    var fuelSource = function() {

        var fuel = '';
        var date =  new Date();
        var time =  date.getHours();
        time = time - 7;
        console.log(time);

        if (time < 8) {
            fuel = 'Coffee';
        } else {
            fuel = 'Wine';
        }
        return fuel;
    };

    return {
       name: 'Theta',
       mascot: 'WOLVERINE!',
       dog: 'Aesop',
       instructors: instructors,
       motto: motto(),
       mantra: '"There is only prime..."',
       fuel: fuelSource()
   }
});