export default class HomeController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.name = "Olá mundo!"
  }

  getMessage() {
    return "testing";
  }
}
