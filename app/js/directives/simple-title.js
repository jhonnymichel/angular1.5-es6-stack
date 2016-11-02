import SimpleTitleController from "./simple-title-controller.js";

function simpleTitle($interval) {

  return {
    restrict: "E",
    template: "<h1>Estou testando meu {{object}}</h1>",
    controller: ["$scope", SimpleTitleController],
    scope: {},
    link: (scope, element) => {
      console.log(typeof $interval);
      element.css({
        "font-size" : "50px"
      });
      $interval(
        () => {
          scope.object = String(Math.round(Math.random() * 500));
        },
        1000,
        10
      );
    }
  }
}

export default angular.module('app.simple-title', [])
  .directive('simpleTitle', ["$interval", simpleTitle])
  .name;
