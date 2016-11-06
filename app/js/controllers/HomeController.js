export default class HomeController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.message = "Hello, World"
    this.$scope.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    return "Methods are working as well!";
  }
}
