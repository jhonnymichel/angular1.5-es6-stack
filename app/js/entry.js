import angular from "angular";
import HomeController from "./controllers/HomeController.js";
import simpleTitle from "./directives/simple-title/simple-title.js";

angular.module("app", [simpleTitle])
  .controller("homeController", ["$scope", HomeController]);
