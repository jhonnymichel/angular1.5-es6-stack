export default class HomeController {
  constructor($scope) {
    this.$scope = $scope;
    //scope is injected this way, but really, avoid using scope with the controllerAs syntax.
    this.message = "Hello, World"
  }

  getMessage() {
    return "Methods are working as well!";
  }
}
