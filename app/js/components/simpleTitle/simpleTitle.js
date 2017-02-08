class SimpleTitleController {
  constructor($element) {
    this.$element = $element;
  }
  $onInit() {
    console.log(this);
  }
  $onChanges(changes) {
    console.log('this var changed:', changes);
  }
}

const simpleTitle = {
  template: `
    <h1 ng-show="$ctrl.name"> 
      Sup, {{$ctrl.name}}! 
    </h1>
  `,
  bindings: {
    name: '<',
  },
  controller: SimpleTitleController,
};

export default angular.module('app.simple-title', [])
  .component('simpleTitle', simpleTitle)
  .name;
