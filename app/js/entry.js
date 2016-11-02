import angular from "angular";
import HomeController from "./controllers/controller.js";
import simpleTitle from "./directives/simple-title.js";

angular.module("app", [simpleTitle])
  .controller("homeController", ["$scope", HomeController])
