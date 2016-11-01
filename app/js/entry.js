import angular from "angular";
import HomeController from "./controllers/controller.js";
import simpleTitle from "./directives/simple-title.js";
console.log("hello world");

angular.module("app", [])
  .controller("homeController", ["$scope", HomeController])
  .directive("simpleTitle", simpleTitle)
