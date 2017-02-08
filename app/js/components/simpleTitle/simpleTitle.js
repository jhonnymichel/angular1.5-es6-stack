function SimpleTitleController($element) {
  this.$onChanges = changes => {
    console.log(changes);
  };
}

const simpleTitle = {
  template: `
    <h1 ng-show="$ctrl.name"> 
      Sup, {{$ctrl.name}}! 
    </h1>
  `,
  controller: SimpleTitleController,
  bindings: {
    name: '<',
  },
};

export default angular.module('app.simple-title', [])
  .component('simpleTitle', simpleTitle)
  .name;
