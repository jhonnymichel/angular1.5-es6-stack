export default class HomeController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.name = "Olá mundo!"
    this.test = "opa";
  }

  getMessage() {
    return "testing";
  }
}
