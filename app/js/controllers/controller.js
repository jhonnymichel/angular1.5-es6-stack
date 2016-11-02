export default class HomeController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.name = "Olá mundo!"
    this.$scope.object = "This is another property";
    this.$scope.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    return "testing";
  }
}
