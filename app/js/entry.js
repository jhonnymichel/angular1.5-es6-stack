import angular from 'angular';
import HomeController from './controllers/HomeController.js';
import simpleTitle from './components/simpleTitle/simpleTitle.js';

angular.module('app', [simpleTitle])
  .controller('homeController', ['$scope', HomeController]);
