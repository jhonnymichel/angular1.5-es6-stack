import angular from "angular";
import HomeController from "./controllers/controller.js"
console.log("hello world");

angular.module("app", [])
  .controller("homeController", HomeController);
